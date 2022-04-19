import React from 'react';
import { IonPage, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react';
import Nav from '../components/Nav';
import urls from '../urls';
import { img } from '../util';
import { arrowBackOutline } from 'ionicons/icons';


const Chat = (props) => {
  return (
    <IonPage>
      <Nav />
      <IonButtons slot="start">
        <IonButton fill="clear" onClick={() => alert("are you sure")} href={urls.APP_HOME}>
          <IonIcon icon={arrowBackOutline} />
        </IonButton>
      </IonButtons>
      <IonContent className="ion-padding">
        <img src={img(props.film.img)} alt=""/>
        <h2>{props.film.title}</h2>
        <h4>{props.film.artist}</h4>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
