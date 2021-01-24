import { IonButton, IonContent, IonCard, IonItem, IonLabel, IonCardContent } from '@ionic/react';
import React, { useState, useEffect, useRef } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import VideoRecorder from 'react-video-recorder'


// configs
// import firebase from 'firebase/app'
// import "firebase/storage";
// import 'firebase/firestore';

import { Storage, API, graphqlOperation  } from 'aws-amplify';
import { listPosts } from '../graphql/queries'

// 
import DEFAULT_PROFILE from "../assets/fin.jpg"

import "../App.css"

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts))
      const fetchedPosts = postsData.data.listPosts.items
      setPosts(fetchedPosts)
      
    } catch (err) { console.log('error fetching todos') }
  }


  return (
    <>
        {
          posts.map((item, index)=> {
            return(
              <Card item={item} key={index}/>
            )
          })
        }
    </>
  );
};



const Card = ({ item }) => {

    const videoElm = useRef();
    const [videoUrl, setVideoUrl] = useState("")
    const [isPlaying, setisPlaying] = useState(false)

    const pauseVideo = () => {
      if (!isPlaying) {
        videoElm.current.play()
        setisPlaying(true)
      } else {
        videoElm.current.pause()
        setisPlaying(false)
      }
    }
    
    useEffect(()=> {
      fetchVideos()
    },[])

    const fetchVideos = async () => {
      const vid = await Storage.get(item.vidUrl)
      setVideoUrl(vid)
    }

    console.log("videoUrl -->", videoUrl)
    

    return (<IonCard>
      <IonItem>
        <IonLabel className="username">@finthehuman</IonLabel>
        <IonButton color="light" slot="end">
          <img className="profile-pic-small" src={DEFAULT_PROFILE}></img>
        </IonButton>
      </IonItem>
      <IonItem onClick={pauseVideo}>
        <video 
          ref={videoElm}
          className="video-viewer"
          src={videoUrl} 
          />
      </IonItem>
    </IonCard>)}

export { Home };


