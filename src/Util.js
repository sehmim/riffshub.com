import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../src/graphql/queries'
import { createUser } from './graphql/mutations';

export const getCurrentUser = async (dispatch) => {
    // Check Whos signed in first 
    try {
        const user = await Auth.currentAuthenticatedUser();

        // See if this user exists in out database
        try {
            let currentUser = await API.graphql(graphqlOperation(
                getUser, { id: user.attributes.email }
            ))

            console.log(currentUser.data.getUser)

            return currentUser.data.getUser

        } catch (error) {
            console.log("Error: ERROR: Couldn't see if Current User exists ->", error)
            // Sign them the fuck up
            const newUserPayload = {
                id: user.attributes.email,
                email: user.attributes.email,
                username: "User",
            }
            try {
                const newUserResponse = await API.graphql(graphqlOperation(createUser, {input: newUserPayload}))
                console.log("respond from creation of new user", newUserResponse)
                return newUserPayload
            } catch (error) {
                console.log("Error: ERROR: Couldn't create new user ->", error)
            }
        }
    } catch (error) {
        console.log("ERROR: Couldn't get Current User->", error)
    }
}
    