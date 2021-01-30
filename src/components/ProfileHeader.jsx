import React, { useContext } from 'react'
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import LOGO from "../assets/guitar.jpg";
import { Auth } from 'aws-amplify';

import { AppContext } from "../State"

function ProfileHeader({ history }) {
    const { state, dispatch } = useContext(AppContext)

    async function handleSignout() {
        try {
            await Auth.signOut();
            history.replace("/")
            dispatch({
              type: "signOutUser",
            })
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <IonHeader>
        <IonToolbar>
          <button onClick={handleSignout}> Signout</button>
          <IonTitle style={{textAlign: "center"}}>
            <a href="/">
              <img className="logo" src={LOGO} alt="logo"/>
            </a>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    )
}

export default ProfileHeader
