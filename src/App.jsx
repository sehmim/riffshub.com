import React, {useState, useRef, useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';

//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////

// Ionic Stuff imported by me
import { IonLoading, IonProgressBar, IonApp, IonRouterOutlet, IonPage , IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonItem, IonCard} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// My pages
import {Home} from './pages/Home';

// My Components
import Error from "./components/Error";

// Configs && modules
import { firebaseConfig } from "./Firebase";
import firebase from 'firebase/app'
import "firebase/storage";
import 'firebase/firestore';


// CSS & assets
import "./App.css"
import { LOADING_IMG } from "./assets/squid.gif";

const App = () => {
  const Firebase = firebase.initializeApp(firebaseConfig);


  return ( 
  <IonApp className="App">
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
      <IonContent>
        <Tab1 className="Tab" Firebase={Firebase} />
        <br></br><br></br><br></br>
        <Home Firebase={Firebase} />
      </IonContent>
    </IonPage>
  </IonApp>)
};

const Tab1 = ({Firebase}) => {

  const [pickedFile, setPickedFile] = useState()
  const [videoURL, setVideoURL] = useState()
  const [error, setError] = useState()
  const [uploading, setUploading] = useState(false)


  const videoElm = useRef();

  useEffect(() => {
    if(pickedFile){
        setTimeout(() => {
          if (videoElm.current && videoElm.current.duration > 16) {
            setError(true)
          } else {
            setError(undefined)
          }
        }, 250);
    }

  }, [videoURL])

  function handleFilePick(e){
    let fileURL = URL.createObjectURL(e.target.files[0])
    
    setPickedFile(e.target.files)
    setVideoURL(fileURL)
  }

  { console.log("Error state ----> ", error)}
  { console.log("pickedFile state ----> ", pickedFile)}

  const handleCancel = () => {
    setPickedFile(null)
  }

  const handleUpload = () => {
    setUploading(true)

    const storageRef = Firebase.storage().ref('videos')
    const fileRef = storageRef.child(pickedFile[0].name)

    fileRef.put(pickedFile)
      .then(() => {

        // Get the URL and set it to firestore
        storageRef.child(pickedFile[0].name).getDownloadURL().then(url => {
          Firebase
            .firestore()
            .collection('videos')
            .add({
              vidUrl: url
            })
            .then(() => {
              setUploading(false)
              setPickedFile(null)
            })
            .catch((err) => {
              console.log(err)
            })
        });
      })
      .catch(err=> console.log(err))
  }

  return (
    <>
      {
        uploading ?
        <>
            <IonLoading
              cssClass='my-custom-class'
              isOpen={uploading}
              message={`Uploading...\n%`}
            />
            <IonProgressBar
              color="secondary" 
              value={0.5} />
        </>
        :
      <>
        {
          pickedFile ? 
            error ?               
            <Error 
              setError={setError} 
                setPickedFile={setPickedFile}
              /> 
            :
            <div>
              <video 
                className="video-viewer"
                ref={videoElm}
                src={videoURL} autoPlay />
              <div className="btn-group">
                <IonButton className="btn" color="dark" onClick={handleUpload}>Upload</IonButton>
                {/* <IonButton disabled className="btn" color="light" onClick={()=> {}}>Edit</IonButton> */}
                <IonButton className="btn" color="danger" onClick={handleCancel}>Cancel</IonButton>
              </div>
            </div>

        : 
        <IonButton className="tab-button" color="dark">
          <p>+</p>
          <input className="custom-file-upload" accept="video/*" type="file" onChange={handleFilePick}></input>
        </IonButton>
        }        
      </>
      }
    </>
  );
};

export default App;
