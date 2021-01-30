import React  from 'react';

import { IonButton } from '@ionic/react';

import '../App.css'

function PostContentButton() {

    return (
        <a href="upload">
            <IonButton className="tab-button" color="dark">
                <p>+</p>
            </IonButton>
        </a>
    )
}

export default PostContentButton
