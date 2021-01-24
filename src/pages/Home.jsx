import { IonButton, IonContent, IonCard, IonItem, IonLabel, IonCardContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import VideoRecorder from 'react-video-recorder'

// configs
// import firebase from 'firebase/app'
// import "firebase/storage";
// import 'firebase/firestore';

import { Storage } from 'aws-amplify';


// 
import DEFAULT_PROFILE from "../assets/fin.jpg"

import "../App.css"

const Home = () => {
  const [posts, setPosts] = useState([{}])
  const [tmp, setTmp] = useState()


  useEffect(() => {
    const fetchData = async () => {
      const data = await Storage.get(`iiiiiiii.mp4`, { level: 'public' })
      setTmp(data)
    };
    fetchData();
  }, []);

  console.log("POSTS --->", posts)

  return (
    <>
        {
          posts.map((item, index)=> {
            return(
              <Card item={item} key={index} tmp={tmp}/>
            )
          })
        }
    </>
  );
};

const Card = ({ item, tmp }) => {

    const url = "http://techslides.com/demos/sample-videos/small.mp4"
    const [muted, setMuted] = useState(true)

    console.log("---SRC--->", tmp)

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
          src={tmp} autoPlay 
          muted={muted}
          />
      </IonItem>
    </IonCard>)}

export { Home };


