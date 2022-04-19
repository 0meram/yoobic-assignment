import React, { useCallback, useState } from 'react';
import Nav from '../components/Nav';
import { img } from '../util';
import urls from '../urls';
import './Home.css';
import { Link } from 'react-router-dom';
import { movies } from '../mockData';
import axios from 'axios';
import {
  IonPage,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

//c692243122msh75f877da5593d8ap10d61ajsnfcd3a392e0b7
const Home = (props) => {
  const movieChange = useCallback(async track => {
    await props.setFilm(track)
  });

  return (
    <IonPage>
      <Nav />
      <IonContent>
        <IonList>
          <IonListHeader>
            <ion-label>New Movies</ion-label>
          </IonListHeader>
          <IonGrid>
            <IonRow>
              {movies.tracks.map(track => (
                <IonCol
                  size={3}
                  className="new-track"
                  key={track.title}
                >
                  <Link to={urls.APP_CHAT}>
                    <IonItem lines="none" onClick={() => movieChange(track)} >
                      <IonLabel>
                        <img src={img(track.img)} />
                        <h3>{track.title}</h3>
                        <p>{track.artist}</p>
                      </IonLabel>
                    </IonItem>
                  </Link>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
