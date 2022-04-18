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
