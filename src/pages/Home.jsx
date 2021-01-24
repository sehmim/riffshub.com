import { IonButton, IonLabel, IonPage , IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCard } from '@ionic/react';
import React, { useState, useEffect, useRef, useContext } from 'react';

// Styles and assets
import './Home.css';
import "../App.css"
import DEFAULT_PROFILE from "../assets/fin.jpg"

// Modules
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries'


// Components and pages
import { AppContext } from "../State"
import SigninToPostButton from "../components/SigninToPostButton";
import PostContentButton from "../components/PostContentButton"


const Home = () => {
  const [posts, setPosts] = useState([])
  const { state, dispatch } = useContext(AppContext)

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
    <IonPage >
      <IonHeader>
        <IonToolbar>
          {/* <AmplifySignOut /> */}
          <IonTitle style={{textAlign: "center"}}> Riffs Hub</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {
          state.currentUser ? <PostContentButton /> : <SigninToPostButton/>
        }
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

    // console.log(state.currentUser.UserAttributes[4].Value)
    
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
        <IonLabel className="username">@</IonLabel>
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


