import React, {useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage , IonHeader, IonToolbar, IonTitle, IonContent,IonButton} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {Home} from './pages/Home';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



/* Theme variables */
import './theme/variables.css';
import VideoRecorder from 'react-video-recorder'



const App = () => {

  const [cameraControl, setCameraControl] = useState(false)


  return ( <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>

  {/* <Home /> */}
    {
      cameraControl ?   
        <>
        <IonButton onClick={()=> {setCameraControl(!cameraControl)}}>Select This</IonButton>
        <VideoRecorder
        chunkSize={250}
        constraints={{
          audio: true,
          video: true
        }}
        // mimeType={10}
        onRecordingComplete={videoBlob => {
          console.log('videoBlob', videoBlob)
        }}
        onStopRecording={()=> {}}
        showReplayControls
        />
      </> 
      : 

    <IonButton onClick={()=> {setCameraControl(!cameraControl)}}>Open Camera</IonButton>

    }

  </IonApp>)
};

const Tab1 = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default App;
