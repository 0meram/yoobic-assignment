import React, { useContext, useRef, useState } from 'react';
import { AppContext, loggedIn } from '../State';
import { login } from '../auth';
import urls from '../urls';
import './Form.css';
import {
  IonButton, IonHeader,
  IonToolbar, IonTitle, IonContent, IonPage,
  IonList, IonItem, IonLabel, IonInput, IonLoading
} from '@ionic/react';

const Login = ({ track, history }) => {
  const { dispatch } = useContext(AppContext);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ formErrors, setFormErrors ] = useState(null);
  const [ showLoading, setShowLoading ] = useState(false);
  const formRef = useRef(null);

  const goTo = path => {
    history.push(path, { direction: 'forward' });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setShowLoading(true);
      const user = await login(email, password);
      dispatch(loggedIn(user));
      history.replace(urls.APP_HOME);
      setShowLoading(false);
    } catch (e) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e);
    }
  }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Login</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="form">
      <IonLoading isOpen={showLoading} message="Logging in..." onDidDismiss={() => setShowLoading(false)}/>
      <form onSubmit={handleSubmit} method="post" ref={formRef} action="">
          <IonList>
            <IonItem>
              <IonLabel position={'fixed'}>User name</IonLabel>
              <IonInput name="name" type="text" value={name} onInput={e => setName(e.currentTarget.value)} />
            </IonItem>
          <IonItem>
            <IonLabel position={'fixed'}>Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onInput={e => setPassword(e.currentTarget.value)}
              />
          </IonItem>
          <IonButton expand="block" type="submit">Log in</IonButton>
        </IonList>
      </form>
      <div className="below-form">
        <a className="create" href="#/" onClick={(e) => { e.preventDefault(); goTo('/signup')}}>Create account instead</a>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Login;
