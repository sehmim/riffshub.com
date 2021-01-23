import { IonButton, IonContent, IonCard, IonItem, IonLabel, IonCardContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import VideoRecorder from 'react-video-recorder'

// configs
import firebase from 'firebase/app'
import "firebase/storage";
import 'firebase/firestore';


// 
import DEFAULT_PROFILE from "../assets/fin.jpg"

import "../App.css"

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("videos").get();
      setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  console.log("POSTS --->", posts)

  return (
    <>
        {
          posts.map((item, index)=> {
            return(
              <Card item={item} key={index} />
            )
          })
        }
    </>
  );
};

const Card = ({ item }) => {

    const url = "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-89761.appspot.com/o/videos%2FBleeze%20IG%20STORY%202.mp4"
    const [muted, setMuted] = useState(true)

    console.log(muted)

    return (<IonCard>
      <IonItem>
        <IonLabel className="username">@finthehuman</IonLabel>
        <IonButton color="light" slot="end">
          <img className="profile-pic-small" src={DEFAULT_PROFILE}></img>
        </IonButton>
      </IonItem>
      <IonItem onClick={()=> {setMuted(!muted)}}>
        <video 
          className="video-viewer"
          src={url} autoPlay 
          muted={muted}
          />
      </IonItem>
    </IonCard>)}

export { Home };


