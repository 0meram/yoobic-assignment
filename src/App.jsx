import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppContextProvider } from "./State";
import urls from "./urls";
import Tabs from "./components/Tabs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  // const [Films, setFilms] = useState([])
  // const options = {
  //   method: 'GET',
  //   url: 'https://movies-app1.p.rapidapi.com/api/movies',
  //   headers: {
  //     'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
  //     'X-RapidAPI-Key': 'a975f03f51msh25d01219d203eb3p1717b4jsn5f80aa07df6b'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data.results);
  //   setFilms(response.data.results)
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonPage>
            <IonRouterOutlet>
              <Route path={urls.LOGIN} component={Login} exact={true} />
              <Route path={urls.SIGNUP} component={Signup} exact={true} />
              <Route exact={true} path="/" render={() => <Redirect to={urls.LOGIN} />} />
              <Route path="/app" component={Tabs} />
            </IonRouterOutlet>
          </IonPage>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;
