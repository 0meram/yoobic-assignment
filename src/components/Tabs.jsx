import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import { home, apps} from 'ionicons/icons';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';

const Tabs = () => {
  const [film, setFilm] = useState({
    title: "please select a movie to see details",
    img: "",
    desc: "",
    artist: ""
  })

  return (
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/app/home" render={() => <Home film={film} setFilm={setFilm} />} exact={true} />
        <Route path="/app/chat" render={() => <Chat film={film} setFilm={setFilm} />} exact={true} />
        <Route path="/app/" render={() => <Redirect to="/app/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>Master List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="chat" href="/app/chat">
          <IonIcon icon={apps} />
            <IonLabel>Chat option</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
}

export default Tabs;