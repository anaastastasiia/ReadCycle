import { create } from 'zustand';
import { authController } from '../controllers/authController.ts';
import { RegisterRequest } from '../api/api.ts';
import { getUserFromToken } from '../utils/authUtils.ts';

export interface AuthState {
    registerData: RegisterFormData;
    loginData: LoginFormData;
    user: UserData
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
    user: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        houseNumber: '',
        phoneNumber: '',
        postalCode: '',
        street: '',
        city: '',
    },
}));

//ACTIONS
const register = async (formData: RegisterRequest) => {
    try {
        const response = await authController.callEndpoint((api) =>
            api.apiAuthRegisterPost(formData)  
        );

        if (response?.data.token) {
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

const setUserData = (formData: UserData) => {
    authStore.setState(() => ({
        user: formData
    }))
}

const getUserData = () => {
    console.log('localStorage: ', localStorage)
    const token = localStorage.getItem('token');
    console.log('token: ',token)
    const user = getUserFromToken(token);
    console.log('user: ', user)

    if (user) {
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
            }
        }))
    }
};

const clearData = () => {
    authStore.setState(() => ({
        user: {
            firstName: '',
            lastName: '',
            city: '',
            email: '',
            houseNumber: '',
            phoneNumber: '',
            postalCode: '',
            street: '',
            apartment: '',
            id: 0
        }
    }))
}

export const authActions = { register, login, setUserData, getUserData, clearData };
