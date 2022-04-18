import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Nav from '../components/Nav';
import { img } from '../util';

const Chat = (props) => {
  return (
    <IonPage>
      <Nav />
      <IonContent className="ion-padding">
        <img src={img(props.film.img)} alt=""/>
        <h2>{props.film.title}</h2>
        <h4>{props.film.artist}</h4>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
