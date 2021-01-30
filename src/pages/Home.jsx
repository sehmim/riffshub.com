import { IonButton, IonLabel, IonPage , IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCard } from '@ionic/react';
import React, { useState, useEffect, useRef, useContext } from 'react';

import { Auth } from 'aws-amplify';
// Styles and assets
import './Home.css';
import "../App.css"
import DEFAULT_PROFILE from "../assets/fin.jpg"

// Modules
import { Storage, API } from 'aws-amplify';
import { listPosts } from '../graphql/queries'
import { getCurrentUser } from "../Util";

// Components and pages
import { AppContext } from "../State"
import SigninToPostButton from "../components/SigninToPostButton";
import PostContentButton from "../components/PostContentButton"
import ProfileHeader from "../components/ProfileHeader"

const Home = () => {
  const [posts, setPosts] = useState([])
  const { state, dispatch } = useContext(AppContext)

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    getCurrentUser().then(result => {
        dispatch({
          type: "getCurrentUser",
          payload: result
        })
    }).catch(err => console.log("ERROR: ", err))
  }, [])


  async function fetchPosts() {
    try {
      const postsData = await API.graphql({
        query: listPosts, 
        authMode: 'API_KEY'
      })
      const fetchedPosts = postsData.data.listPosts.items
      setPosts(fetchedPosts)
    } catch (err) { 
      console.log("ERROR: " , err) 
    }
  }

  return (
    <IonPage >
      <ProfileHeader />
      <IonContent>
        { !state.currentUser ? <SigninToPostButton/> : <PostContentButton /> }
        <br></br><br></br><br></br>
          {
            posts.map((item, index)=> {
              return(
                <Card item={item} key={index}/>
              )
            })
          }
      </IonContent>
    </IonPage>
  );
};



const Card = ({ item }) => {

    const videoElm = useRef();
    const [videoUrl, setVideoUrl] = useState("")
    const [isPlaying, setisPlaying] = useState(false)
    const { state, dispatch } = useContext(AppContext)
    
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

export { Home };


