import React from 'react'
import {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  } from '@ionic/react';

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
                    <IonButton onClick={()=> Auth.federatedSignIn()} >Email</IonButton>
                </div>
            </IonContent>
        </IonPage>

        
    )
}

export default Authpage
