import { Auth } from 'aws-amplify';

export const getCurrentUser = async (dispatch) => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        return user
    } catch (error) {
        console.log("ERROR: ", error)
    }
}
    