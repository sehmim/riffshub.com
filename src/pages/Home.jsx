import { IonButton, IonLabel, IonPage , IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCard } from '@ionic/react';
import React, { useState, useEffect, useRef, useContext } from 'react';

import { Auth } from 'aws-amplify';
// Styles and assets
import './Home.css';
import "../App.css"
import DEFAULT_PROFILE from "../assets/fin.jpg"
import LOGO from "../assets/guitar.jpg";

// Modules
import { Storage, API } from 'aws-amplify';
import { listPosts } from '../graphql/queries'
import { getCurrentUser } from "../Util";

// Components and pages
import { AppContext } from "../State"
import SigninToPostButton from "../components/SigninToPostButton";
import PostContentButton from "../components/PostContentButton"


const Home = ({ history }) => {
  const [posts, setPosts] = useState([])
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

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
    }).catch(err => console.log(err))
  }, [])


  async function fetchPosts() {
    try {
      const postsData = await API.graphql({
        query: listPosts, 
        authMode: 'API_KEY'
      })

      const fetchedPosts = postsData.data.listPosts.items

      setPosts(fetchedPosts)
      // const aaRes = await API.graphql(graphqlOperation())
      console.log("PUBLIC--->", fetchedPosts)


      // const items = await API.get('apie66d254a', '/posts', 
      // {
        // 'queryStringParameters': {
        //   'order': 'byPrice'
        // }
      // }
      // );
      // console.log("ITEMs -> ", items)



      
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
      {/* <IonHeader>
        <IonToolbar>
          {/* <button onClick={handleSignout}> Signout</button> */}
          {/* <IonTitle style={{textAlign: "center"}}>
            <a href="/">
              <img className="logo" src={LOGO} alt="logo"/>
            </a>
          </IonTitle> */}
        {/* </IonToolbar> */}
      {/* // </IonHeader> */}
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
      try {
        const vid = await Storage.get(item.vidUrl, { level : 'public', expires: 1500 })
        setVideoUrl(vid)

      } catch (error) {
        console.log(error)
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


