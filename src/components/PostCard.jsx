import React, { useState, useEffect, useRef } from 'react'
import { Storage } from 'aws-amplify';

import { IonButton, IonLabel, IonItem, IonCard } from '@ionic/react';
import DEFAULT_PROFILE from "../assets/fin.jpg"

const PostCard = ({ item }) => {

    const videoElm = useRef();
    const [videoUrl, setVideoUrl] = useState("")
    const [isPlaying, setisPlaying] = useState(false)

    // const { state, dispatch } = useContext(AppContext)
    
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
      try {
        const vid = await Storage.get(item.vidUrl, { level : 'public', expires: 1500 })
        setVideoUrl(vid)

      } catch (error) {
        console.log("Error: ", error)
      }
    }
    

    return (<IonCard>
      <IonItem>
        <IonLabel className="username">@{item.owner}</IonLabel>
        <IonButton color="light" slot="end">
          <a href="/">
            <img className="profile-pic-small" src={DEFAULT_PROFILE}></img>
          </a>
        </IonButton>
      </IonItem>
      <IonItem onClick={pauseVideo}>
        <div className="video-viewer-body">
        <video 
          ref={videoElm}
          className="video-viewer"
          src={videoUrl} 
          />
        </div>
      </IonItem>
    </IonCard>)}

export default PostCard
