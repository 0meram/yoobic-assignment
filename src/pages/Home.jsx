import React, { useCallback, useState } from 'react';
import Nav from '../components/Nav';
import { img } from '../util';
import urls from '../urls';
import './Home.css';
import { Link } from 'react-router-dom';
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
          {props.movieList === [] ? <div>wait pleas</div> :
          <IonGrid>
            <IonRow>
                {props.movieList.map(track => (
                <IonCol
                  size={3}
                  className="new-track"
                  key={track.title}
                >
                  <Link to={urls.APP_CHAT}>
                    <IonItem lines="none" onClick={() => movieChange(track)} >
                      <IonLabel>
                        <img src={track.image} />
                        <h3>{track.title}</h3>
                        <p>{track.year}</p>
                      </IonLabel>
                    </IonItem>
                  </Link>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
            }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
