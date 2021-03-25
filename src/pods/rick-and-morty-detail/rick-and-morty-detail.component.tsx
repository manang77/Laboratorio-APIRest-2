import React from 'react';
import {
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Card } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WcIcon from '@material-ui/icons/Wc';
import PetsIcon from '@material-ui/icons/Pets';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { RickAndMortyDetailVm } from './rick-and-morty-detail.vm';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import * as rickyAndMortyDetailClasses from './rick-and-morty-detail.styles';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RickAndMortyBestSentencesComponent } from './components';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'oldlace',
      width: '40%',
      minHeight: '60em',
    },
    media: {
      padding: '35%',
    },
    icon: {
      color: 'secondary',
    },
  })
);

interface Props {
  rickAndMortyCharacter: RickAndMortyDetailVm;
  updateRickAndMortyCharacter: (character: RickAndMortyDetailVm) => void;
}

export const RickAndMortyDetailComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { rickAndMortyCharacter, updateRickAndMortyCharacter } = props;
  const history = useHistory();

  const handleExitClickButton = () => {
    history.goBack();
  };

  const updateCharacterSentences = (updatedSentences: string[]) => {
    const updatedCharacter = {
      ...rickAndMortyCharacter,
      bestSentences: updatedSentences,
    };
    updateRickAndMortyCharacter(updatedCharacter);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={rickAndMortyCharacter.name} />
        {rickAndMortyCharacter.image ? (
          <CardMedia
            className={classes.media}
            image={rickAndMortyCharacter.image}
          />
        ) : (
          <CircularProgress color="primary" />
        )}

        <CardContent>
          <div className={rickyAndMortyDetailClasses.cardBlockContainer}>
            <div>
              <div className={rickyAndMortyDetailClasses.cardLineContainer}>
                <div className={rickyAndMortyDetailClasses.lineElementIcon}>
                  <WcIcon fontSize="large" className={classes.icon} />
                </div>
                <div className={rickyAndMortyDetailClasses.lineElementText}>
                  <Typography variant="body1" component="p">
                    {rickAndMortyCharacter.gender}
                  </Typography>
                </div>
              </div>
              <div className={rickyAndMortyDetailClasses.cardLineContainer}>
                <div className={rickyAndMortyDetailClasses.lineElementIcon}>
                  <PetsIcon fontSize="large" className={classes.icon} />
                </div>
                <div className={rickyAndMortyDetailClasses.lineElementText}>
                  <Typography variant="body1" component="p">
                    {rickAndMortyCharacter.species}
                  </Typography>
                </div>
              </div>
              <div className={rickyAndMortyDetailClasses.cardLineContainer}>
                <div className={rickyAndMortyDetailClasses.lineElementIcon}>
                  <AccessibilityNewIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </div>
                <div className={rickyAndMortyDetailClasses.lineElementText}>
                  <Typography variant="body1" component="p">
                    {rickAndMortyCharacter.status}
                  </Typography>
                </div>
              </div>

              <div className={rickyAndMortyDetailClasses.cardLineContainer}>
                <div className={rickyAndMortyDetailClasses.lineElementIcon}>
                  <PublicIcon fontSize="large" className={classes.icon} />
                </div>
                <div className={rickyAndMortyDetailClasses.lineElementText}>
                  <Typography variant="body1" component="p">
                    {rickAndMortyCharacter.origin}
                  </Typography>
                </div>
              </div>
              <div className={rickyAndMortyDetailClasses.cardLineContainer}>
                <div className={rickyAndMortyDetailClasses.lineElementIcon}>
                  <LocationCityIcon fontSize="large" className={classes.icon} />
                </div>
                <div className={rickyAndMortyDetailClasses.lineElementText}>
                  <Typography variant="body1" component="p">
                    {rickAndMortyCharacter.location}
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <RickAndMortyBestSentencesComponent
                characterName={rickAndMortyCharacter.name}
                characterBestSentences={rickAndMortyCharacter.bestSentences}
                updateCharacterSentences={updateCharacterSentences}
              />
            </div>
          </div>
          <div className={rickyAndMortyDetailClasses.lineButtonIcon}>
            <IconButton onClick={() => handleExitClickButton()}>
              <ExitToAppIcon fontSize="large" color="primary" />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
