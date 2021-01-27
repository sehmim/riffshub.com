import { Auth } from 'aws-amplify';
import { userInfo } from 'os';

export const getCurrentUser = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        return user
    } catch (error) {
        console.log("ERROR: ",error)
    }
}
    