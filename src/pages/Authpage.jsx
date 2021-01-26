import React from 'react'
import {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  } from '@ionic/react';

import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { Home } from './Home';

function Authpage() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>AuthPage</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">Hello World</IonContent>
        </IonPage>

        
    )
}

export default Authpage
