import React, {useState, useRef, useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage , IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonItem} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {Home} from './pages/Home';
import ImageUploader from 'react-images-upload';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { VideoPlayer } from "@ionic-native/video-player";
import { VideoEditor } from "@ionic-native/video-editor";
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

import "./App.css"


/* Theme variables */
import './theme/variables.css';
import VideoRecorder from 'react-video-recorder'

var VideoEditorOptions = {
  OptimizeForNetworkUse: {
      NO: 0,
      YES: 1
  },
  OutputFileType: {
      M4V: 0,
      MPEG4: 1,
      M4A: 2,
      QUICK_TIME: 3
  }
};


const App = () => {

  const [cameraControl, setCameraControl] = useState(false)

  return ( <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>


    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>RiffsHub</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* {
      cameraControl ?   
          <>
          <div className="button-body">
            <IonButton onClick={()=> {setCameraControl(!cameraControl)}}>Select This</IonButton>
          </div>
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
      } */}
      <Tab1 />
    </IonPage>
  </IonApp>)
};

const Tab1 = () => {

  const [pickedFile, setPickedFile] = useState()
  const [videoURL, setVideoURL] = useState()
  const videoElm = useRef();

  useEffect(() => {
    console.log('---dlwdlwld', videoElm)
  }, [videoURL])

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };

  const openFileTransfer = async () => {
    // const data = await FileTransfer.create();
    console.log(`File:`);
    FileChooser.open(function(uri) {
      alert(uri);
    });
  };

  console.log(pickedFile ? pickedFile[0] : null)
  
  const handleEdit = () => {
    VideoPlayer.play(URL.createObjectURL(pickedFile[0]));
  }

  
  
  function videoTranscodeSuccess(result) {
    // result is the path to the transcoded video on the device
      console.log('videoTranscodeSuccess, result: ' + result);
  }
  
  function videoTranscodeError(err) {
    console.log('videoTranscodeError, err: ' + err);
  }

  function handleFilePick(e){
    let fileURL = URL.createObjectURL(e.target.files[0])
    
    setPickedFile(e.target.files)
    setVideoURL(fileURL)

    // console.log(videoElm.current)
  }

  console.log(pickedFile ? pickedFile.duration : null)


  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent> */}

      <IonContent>

        {
          pickedFile ? 

          <div>
            <video 
            ref={videoElm}
            style={{
              width: "100vw",
              height: "70vh"
            }}
            src={videoURL} controls autoPlay></video>
          <div>

            <IonButton color="dark" onClick={()=> {}}>Upload</IonButton>
            <IonButton color="dark" onClick={()=> {}}>Edit</IonButton>
          </div>
          </div>

        : <IonButton style={{zIndex: 1, padding: 0, width: '100%'}} color="dark">
          <input accept="video/*" type="file" style={{zIndex: -1, cursor: "pointer"}} onChange={handleFilePick}></input>
        </IonButton>
        }        
      </IonContent>
    </>
  );
};

export default App;
