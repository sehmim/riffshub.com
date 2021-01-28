import React from 'react'
import { IonButton } from '@ionic/react';
import { Auth } from 'aws-amplify';

import "../App.css"

function SigninToPostButton() {
    return (
        <IonButton 
            className="tab-button" 
            color="dark"
            onClick={()=> Auth.federatedSignIn()}
            >Login to Post</IonButton>
    )
}

export default SigninToPostButton
