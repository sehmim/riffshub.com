import React from 'react'
import { IonLoading, IonProgressBar, IonApp, IonRouterOutlet, IonPage , IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonItem, IonCard} from '@ionic/react';
import { useHistory } from "react-router-dom";

import "../App.css"

function SigninToPostButton() {
    return (
        <a href="/auth">
            <IonButton className="tab-button" color="dark">Login to Post</IonButton>
        </a>
    )
}

export default SigninToPostButton
