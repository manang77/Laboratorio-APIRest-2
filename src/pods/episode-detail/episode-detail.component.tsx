import React from 'react';
import { CardContent, CardHeader, IconButton } from '@material-ui/core';
import { Card } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { EpisodeDetailVm } from './episode-detail.vm';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import * as episodeDetailClasses from './episode-detail.styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'oldlace',
      width: '60%',
      minHeight: '6em',
    },
    icon: {
      color: 'secondary',
    },
  })
);

interface Props {
  episode: EpisodeDetailVm;
}

export const EpisodeDetailComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { episode } = props;
  const history = useHistory();

  const handleExitClickButton = () => {
    history.goBack();
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={`Characters appearing in episode '${episode.name}'`}
        />
        <CardContent>
          <div className={episodeDetailClasses.cardBlockContainer}>
            {episode.characters.map((character, index) => (
              <div>
                <div
                  className={episodeDetailClasses.imageContainer}
                  key={index}
                >
                  <img
                    className={episodeDetailClasses.characterImage}
                    src={character.image}
                    height="50"
                  />
                </div>
                <div className={episodeDetailClasses.characterName}>
                  <p>{character.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={episodeDetailClasses.lineButtonIcon}>
            <IconButton onClick={() => handleExitClickButton()}>
              <ExitToAppIcon fontSize="large" color="primary" />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
