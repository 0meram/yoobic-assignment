import React, { useState } from 'react';
import { menu } from 'ionicons/icons';
import urls from '../urls';
import {
    IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel,
    IonButtons, IonButton, IonIcon, IonPopover
} from '@ionic/react';

const Nav = () => {
    const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);

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
                    <IonItem href={urls.LOGIN}>
                        <IonLabel>Log out</IonLabel>
                    </IonItem>
                </IonList>
            </IonPopover>
        </>
    );
};

export default Nav;

















