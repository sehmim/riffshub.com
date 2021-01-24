import React from 'react'
import { IonButton } from '@ionic/react';

import "../App.css"

function BackButton({ to }) {
    return (
        <a href={to}>
            <IonButton className="tab-button-bottom" color="dark">
                <p>Back</p>
            </IonButton>
        </a>
    )
}

export default BackButton
