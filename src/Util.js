import { Auth } from 'aws-amplify';

export const getCurrentUser = async () => {
    try {
        const data = await Auth.currentAuthenticatedUser();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
    