import React, { useState, useRef, useEffect, useContext } from 'react'

import Error from "../components/Error";
import { IonLoading, IonProgressBar,IonButton } from '@ionic/react';


import { Storage, API, graphqlOperation } from 'aws-amplify';
import { createPost } from "../graphql/mutations";
import { AppContext } from "../State";

import BackButton from "../components/BackButton";
// import cloudinary from 'cloudinary'
const apiVideo = require('@api.video/nodejs-sdk');

const client = new apiVideo.ClientSandbox({ apiKey: 'CqDdKbizcJnaTq9jNTAWJTXyE3J9ym8pQVjfyUjgCj4' });


const UploadPage = ({ history }) => {

    const [pickedFile, setPickedFile] = useState()
    const [videoURL, setVideoURL] = useState()
    const [error, setError] = useState()
    const [uploading, setUploading] = useState(false)
    const [uploadingProgress, setUploadingProgress] = useState(0)

    const videoElm = useRef();
  
    const { state, dispatch } = useContext(AppContext)

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
  
    const handleCancel = () => {
      setPickedFile(null)
    }
  
    const handleUpload = async () => {
      setUploading(true)

      try {
        let result = await Storage.put(pickedFile[0].name, pickedFile[0], {
          progressCallback(progress) {
            setUploadingProgress((progress.loaded/progress.total) * 100)
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
        })
        console.log("Video Added to Store")
        const dbResponse = await addVideoURLToDB(result)
                    
        setUploading(false)
        setPickedFile(null)
        history.push("/")
        console.log("dbResponse", dbResponse)

      } catch (error) {
        console.error("Storage Error", error);
      }
  
      // Storage.put(pickedFile[0].name, pickedFile[0], {
      //   progressCallback(progress) {
      //       setUploadingProgress((progress.loaded/progress.total) * 100)
      //       console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      //   },
      // })
      // .then (result => {
      //     const post = { 
      //       title: "Default Title",
      //       vidUrl: result.key
      //     }
      //     API.graphql(graphqlOperation(createPost, {input: post})).then(() =>{
      //       setUploading(false)
      //       setPickedFile(null)
      //       history.push("/")
      //       console.log(result)
      //     }).catch(err => console.log(err))
      //   })
      // .catch(err => console.log(err));
    }

    async function addVideoURLToDB(result) {
          try {
            const post = { 
              title: "Default Title",
              vidUrl: result.key,
              // postAuthorId: state.current
            }
            const apiResponse = await API.graphql(graphqlOperation(createPost, {input: post}))
            return apiResponse
          } catch (error) {
            console.log("ERROR: addVideoURLToDB", error)
          }
    }
  
    return (
      <>
        {
          uploading ?
          <>
              <IonLoading
                cssClass='my-custom-class'
                isOpen={uploading}
                message={`Uploading...\n${uploadingProgress}%`}
              />
              <IonProgressBar
                color="secondary" 
                value={uploadingProgress} />
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
              <div className="video-viewer-body">
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
        <BackButton to={"/"}/>
      </>
    );
  };


  export default UploadPage;