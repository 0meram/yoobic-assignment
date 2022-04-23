import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Card from '../pages/Card';
import { home, apps } from 'ionicons/icons';
import urls from '../urls';
import axios from "axios";
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
  const [movieList, setMovieList] = useState([])
  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key': 'c692243122msh75f877da5593d8ap10d61ajsnfcd3a392e0b7'
    }
  };

  const getMovieList = async () => {
    const res = await axios.request(options);
    await setMovieList(res.data.results);
  };
  useEffect(() => {
    getMovieList();
  }, [])

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/home" render={() => <Home film={film} setFilm={setFilm} movieList={movieList} />} exact={true} />
        <Route path="/app/chat" render={() => <Card film={film} setFilm={setFilm} movieList={movieList} />} exact={true} />
        <Route path="/app/" render={() => <Redirect to={urls.APP_HOME} />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href={urls.APP_HOME}>
          <IonIcon icon={home} />
          <IonLabel>Master List</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chat" href={urls.APP_CHAT}>
          <IonIcon icon={apps} />
          <IonLabel>Card Info</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default Tabs;
