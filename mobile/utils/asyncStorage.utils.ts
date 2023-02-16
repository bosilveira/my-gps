import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserData {
    id: number,
    name: string,
    email: string,
    role: number,
    department: string, 
    available: boolean,
    status: string
}

const storeUserData = async (data: IUserData) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('@userData', jsonValue)
    } catch (e) {
        // saving error
    }
}

const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}
  
export const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('@token', token)
    } catch (e) {
      // saving error
    }
  }

  export const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      if(value !== null) {
        // value previously stored
      }
      return value
    } catch(e) {
      // error reading value
    }
  }
  