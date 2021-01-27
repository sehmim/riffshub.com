import { IonButton, IonLabel, IonPage , IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCard } from '@ionic/react';
import React, { useState, useEffect, useRef, useContext, useHistory } from 'react';
// import {AmplifySignOut} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
import { publicLists } from "../graphql/queries";
// Styles and assets
import './Home.css';
import "../App.css"
import DEFAULT_PROFILE from "../assets/fin.jpg"
import LOGO from "../assets/guitar.jpg";

// Modules
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries'
import { getCurrentUser } from "../Util";

// Components and pages
import { AppContext } from "../State"
import SigninToPostButton from "../components/SigninToPostButton";
import PostContentButton from "../components/PostContentButton"
import BackButton from '../components/BackButton';


const Home = ({ history }) => {
  const [posts, setPosts] = useState([])
  const { state, dispatch } = useContext(AppContext)

  console.log("posts ---> ", posts)

  useEffect(() => {
    fetchPosts();
    getCurrentUser().then(result => {
      dispatch({
        type: "getCurrentUser",
        payload: result
      })
    }).catch(err => console.log(err))
  }, []);


  async function fetchPosts() {
    try {
      // const postsData = await API.graphql(graphqlOperation(listPosts))
      // const fetchedPosts = postsData.data.listPosts.items
      
      // console.log("posts ---> ", postsData)

      // setPosts(fetchedPosts)
      const aaRes = await API.graphql(graphqlOperation(publicLists))
      console.log("PUBLIC--->", aaRes)
      
    } catch (err) { console.log("ERROR: --------> " , err) }
  }

  async function handleSignout() {
    try {
        await Auth.signOut();
        history.replace("/")
        dispatch({
          type: "signOutUser",
        })
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <button onClick={handleSignout}> Signout</button>
          <IonTitle style={{textAlign: "center"}}>
            <img className="logo" src={LOGO} alt="logo"/>
          </IonTitle>
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
    

    return (<IonCard>
      <IonItem>
        <IonLabel className="username">@{item.owner}</IonLabel>
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


