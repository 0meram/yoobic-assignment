import React, { useState } from 'react';
import { menu } from 'ionicons/icons';
import urls from '../urls';
import { useHistory } from 'react-router-dom';
import {
    IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel,
    IonButtons, IonButton, IonIcon, IonPopover
} from '@ionic/react';

const Nav = () => {
    const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
    const history = useHistory();

    const routeChange = () => {
        let path = urls.LOGIN;
        history.push(path);
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
                            <IonIcon icon={menu} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Yoobic Movies</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonPopover
                event={showUserMenuEvent}
                isOpen={!!showUserMenuEvent}
                onDidDismiss={() => setShowUserMenuEvent(null)}>
                <IonList>
                    <IonItem href={urls.APP_CHAT}>
                        <IonLabel>Chat</IonLabel>
                    </IonItem>
                    <IonItem href={urls.APP_HOME}>
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => { if (window.confirm('Are you sure you wish to logout?')) { routeChange() } }} href="">
                        <IonLabel color="warning">Log out</IonLabel>
                    </IonItem>
                </IonList>
            </IonPopover>
        </>
    );
};

export default Nav;

















