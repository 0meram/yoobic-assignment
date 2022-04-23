import React from 'react';
import { IonPage, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react';
import Nav from '../components/Nav';
import urls from '../urls';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';

const Card = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = urls.APP_HOME;
    history.push(path);
  }

  return (
    <IonPage>
      <Nav />
      <IonButtons slot="start">
        <IonButton fill="clear" onClick={routeChange}>
          <IonIcon icon={arrowBackOutline} />
        </IonButton>
      </IonButtons>
      <IonContent className="ion-padding">
        <img src={props.film.image} alt="" />
        <h2>{props.film.title}</h2>
        <h4>{props.film.description}</h4>
        <h4>{props.film.rating}</h4>
        <h4>{props.film.year}</h4>
      </IonContent>
    </IonPage>
  );
};

export default Card;
