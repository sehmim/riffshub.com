import React from 'react'
import '../App.css'

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';


import ERROR_IMG from '../assets/squid.gif'


function Error({setError, setPickedFile}) {
    const setDefault = () => {
        setError(false)
        setPickedFile(false)
    }

    return (
        <IonCard style={{textAlign: 'center'}}>
                <IonItem>
                    <IonButton 
                        color="dark" 
                        fill="outline" 
                        slot="end"
                        onClick={setDefault}
                        >
                    Try Again</IonButton>
                </IonItem>
            
            <img className="error-img" src={ERROR_IMG}></img>
            <IonCardContent>Sorry! Videos have to be smaller than 15s :'(</IonCardContent>
            <IonCardContent>I dont have the money to host big files</IonCardContent>
        </IonCard>
    )
}

export default Error

