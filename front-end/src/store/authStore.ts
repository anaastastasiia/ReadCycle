import { create } from 'zustand';
import { authController } from '../controllers/authController.ts';
import { RegisterRequest } from '../api/api.ts';
import { getUserFromToken } from '../utils/authUtils.ts';
import AuthMapper from '../model/mapper/AuthMapper.ts';
import { UsersNameData } from '../model/types.ts';

export interface AuthState {
    registerData: RegisterFormData,
    loginData: LoginFormData,
    user: UserData | null,
    token: string | null,
    username: UsersNameData;
}

export interface RegisterFormData {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
    street: string,
    city: string,
    houseNumber: string,
    apartment?: string | null,
    postalCode: string
}

export interface LoginFormData {
    email: string,
    password: string,
}

export interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    street: string,
    city: string,
    houseNumber: string,
    apartment?: string | null,
    postalCode: string,
    id: number
}

//STORE
export const authStore = create<AuthState>(() => ({
    registerData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        houseNumber: '',
        phoneNumber: '',
        postalCode: '',
        street: '',
        city: '',
        confirmPassword: ''
    },
    loginData: {
        email: '',
        password: ''
    },
    user: null,
    token: null,
    username: {
        id: 0,
        fullName: ''
    }
}));

//ACTIONS
const register = async (formData: RegisterRequest) => {
    try {
        const response = await authController.callEndpoint((api) =>
            api.apiAuthRegisterPost(formData)  
        );

        if (response && response.data.token) {
            authStore.setState(() => ({
                token: response?.data.token
            }));
            localStorage.setItem('token', response?.data.token);
            return true;
        } else {
            console.error('Token not received from API');
            return false;
        }
    } catch (err) {
        console.error('Upload failed: ', err);
        return false;
    }
};

const login = async (formData: LoginFormData) => {
    try {
        const response = await authController.callEndpoint((api) =>
            api.apiAuthLoginPost(formData)  
        );
        
        if (response?.data.token) {
            authStore.setState(() => ({
                token: response?.data.token
            }));
            localStorage.setItem('token', response?.data.token);
            return true;
        } else {
            console.error('Token not received from API');
            return false;
        }
    } catch (err) {
        console.error('Upload failed: ', err);
        return false
    }
};

const setUserData = (formData: UserData, token: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(formData));
    authStore.setState(() => ({
        user: formData,
        token: token
    }))
}

const setToken = (token: string) => {
    localStorage.setItem('token', token);
    authStore.setState(() => ({
        token: token
    }))
}

const loadUserData = () => {
    const token = localStorage.getItem('token');

    if(token) {
        const decoded = getUserFromToken(token);
        
        if (decoded && decoded.user) {
            const user = decoded.user;
            authStore.setState(() => ({
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    city: user.city,
                    email: user.email,
                    houseNumber: user.houseNumber,
                    phoneNumber: user.phoneNumber,
                    postalCode: user.postalCode,
                    street: user.street,
                    apartment: user.apartment ? user.apartment : '',
                    id: user.id
                },
                token: token
            }));
        }
    } 
};

const clearData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    authStore.setState(() => ({
        user: null,
        token: null
    }));
}

const checkTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if(token) {
        try {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Math.floor(Date.now() / 1000);
            if(decodedToken.exp < currentTime) {
                authStore.setState(() => ({
                    user: null,
                    token: null
                }));
                localStorage.removeItem('token');
                localStorage.removeItem('userData');
                return false;
            }
            return true;
        } catch(e) {
            console.error("Invalid token format", e);
            clearData();
            return false;
        }
    }
    return false;
}

const getUserNameById = async (id: number) => {
    console.log('id: ', id)
    try {
        const res = await authController.callEndpoint((api) => api.apiAuthUserIdGet(id));
    console.log('res: ', res)
    if(res && res.data) {
    console.log('res data: ', res.data)
    console.log('res data: ', res.data.firstName)
    const user = AuthMapper.mapUserNameData(res.data);
            authStore.setState(() => ({
                username: user
            }))
            console.log('user:', user)
            return user;
        } 
        return null;
    } catch (err) {
        console.error('Error while getting users name: ', err)
    }
}

export const authActions = { 
    register, 
    setToken, 
    login, 
    setUserData, 
    loadUserData, 
    clearData,
    checkTokenExpiration,
    getUserNameById
};
