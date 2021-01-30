import React from 'react'
import { IonButton } from '@ionic/react';
import { Auth } from 'aws-amplify';

import "../App.css"

function SigninToPostButton() {
    
    async function signInUser() {
        try {
            const user = Auth.federatedSignIn()
            console.log("Facebook Login Response ->", user)
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    return (
        <IonButton 
            className="tab-button" 
            color="dark"
            onClick={signInUser}
            >Login to Post</IonButton>
    )
}

export default SigninToPostButton
