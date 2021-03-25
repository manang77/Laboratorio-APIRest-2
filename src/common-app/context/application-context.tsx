import React from 'react';

interface ApplicationContext {
  rickAndMortySearchText: string;
  setRickAndMortySearchText: (value: string) => void;
  rickAndMortyNavigationPage: number;
  setRickAndMortyNavigationPage: (value: number) => void;
}

export const ApplicationContext = React.createContext<ApplicationContext>({
  rickAndMortySearchText: '',
  setRickAndMortySearchText: value => {},
  rickAndMortyNavigationPage: 0,
  setRickAndMortyNavigationPage: value => {},
});

export const ApplicationContextProvider = props => {
  const [rickAndMortySearchText, setRickAndMortySearchText] = React.useState(
    ''
  );
  const [
    rickAndMortyNavigationPage,
    setRickAndMortyNavigationPage,
  ] = React.useState(0);

  return (
    <ApplicationContext.Provider
      value={{
        rickAndMortySearchText,
        setRickAndMortySearchText,
        rickAndMortyNavigationPage,
        setRickAndMortyNavigationPage,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
