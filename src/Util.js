import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUserByEmail } from '../src/graphql/queries'
import { createUser  } from './graphql/mutations';

export const getCurrentUser = async () => {
    // Check Whos signed in first 
    const authUser = await getAuthFromFB();

    // console.log("AUTH USER -->", authUser)

    // if user exists then query the user data from DB
    if (!authUser) {
        // console.log("No User found, creating new user")

        const userData = await createUserOnDB(authUser)
        return userData
    // if user does not exists then create a user
    } else {
    // console.log("User, found Fetching user info")

    const userData = await getUserFromDB(authUser)
    return userData
    }
}
    
async function getAuthFromFB() {
    try {
        const user = await Auth.currentAuthenticatedUser();
        return user
    } catch (error) {
        console.log("ERROR FROM getAuthFromFB: ", error)
    }
}

async function createUserOnDB(user) {
    try {
        let currentUser = await API.graphql(graphqlOperation(
            createUser, { email: user.attributes.email, username: user.username }
        ))
        console.log("createUserOnDB", currentUser)
        return currentUser
    } catch (error) {
        console.log("ERROR FROM createUserOnDB: ", error)
    }
}

async function getUserFromDB(user) {
    try {
        let currentUser = await API.graphql(graphqlOperation(
            getUserByEmail, { email: user.attributes.email }
        ))
        return currentUser
    } catch (error) {
        console.log("ERROR FROM getUserFromDB: ", error)
    }
}