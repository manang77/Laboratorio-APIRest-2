const serverConfig = require('./config/server.config.json');
const data = require('./mock-data/characters.json');

let jsonServer = require('json-server');
const { readBuilderProgram } = require('typescript');
let server = jsonServer.create();
let router = jsonServer.router('./mock-data/characters.json');

const middlewares = jsonServer.defaults();

const calculateResponseHeader = (search, serverPageSize) => {
  const charactersFiltered =
    search === null
      ? data.characters.length
      : data.characters.filter(
          (elem) => elem.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        ).length;

  return {
    count: charactersFiltered,
    pages: Math.ceil(
      charactersFiltered /
        (serverPageSize
          ? serverPageSize
          : serverConfig.DEFAULT_SERVER_PAGE_SIZE)
    ),
    next: '',
    prev: '',
  };
};

router.render = function (req, res) {
  const url = new URL(
    `${serverConfig.BASE_URL_SERVER}.${serverConfig.SERVER_PORT}/${req.url}`
  );
  const params = new URLSearchParams(url.search);
  if (req.method === 'GET') {
    if (req.path === '/characters') {
      const nameParam = params.get('name_like');
      const serverPageSize = params.get('_limit');
      if (params.has('id')) {
        res.jsonp({ ...res.locals.data[0] });
      } else {
        const resHeader = calculateResponseHeader(nameParam, serverPageSize);
        res.jsonp({
          info: resHeader,
          results: res.locals.data,
        });
      }
    }
  } else {
    res.jsonp(res.locals.data);
  }
};

server.use(
  jsonServer.rewriter({
    '/api/*/:id': '/$1?id=:id',
    '/api/*': '/$1',
    '/*/:id': '/$1/:id',
  })
);
server.use(middlewares);
server.use(router);
server.listen(serverConfig.SERVER_PORT, () => {
  console.log(
    `Server listening at ${serverConfig.BASE_URL_SERVER}:${serverConfig.SERVER_PORT}`
  );
});
