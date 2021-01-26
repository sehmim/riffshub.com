import React from 'react'
import {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  } from '@ionic/react';

import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { Home } from './Home';
import { Auth } from 'aws-amplify';

import '../App.css'

function Authpage() {
    return (
        <IonPage className="auth-page-body">
            <IonHeader>
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonTitle>Sign In</IonTitle>
                <div className="button-grp">
                    <IonButton onClick={()=> Auth.federatedSignIn({
                        provider: "Facebook"
                    })} >FACELBOOK LOGO</IonButton>
                    <IonButton onClick={()=> Auth.federatedSignIn()} >Email</IonButton>
                </div>
            </IonContent>
        </IonPage>

        
    )
}

export default Authpage
