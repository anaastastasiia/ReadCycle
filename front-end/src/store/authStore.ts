import { create } from 'zustand';
import { authController } from '../controllers/authController.ts';
import { RegisterRequest } from '../api/api.ts';

export interface AuthState {
    registerData: RegisterFormData;
    loginData: LoginFormData;
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
    }
}));

//ACTIONS
const register = async (formData: RegisterRequest) => {
   console.log(formData)

    try {
        const response = await authController.callEndpoint((api) =>
            api.apiAuthRegisterPost(formData)  
        );

        console.log(response)

        // if (response) {
        //     const {data} = await response;
        //     authStore.setState(() => ({
        //         image: data.imageUrl 
        //     }));
        //     return data.imageUrl;
        // }
    } catch (err) {
        console.error('Upload failed: ', err);
    }

    return null;
};

const login = async (formData: LoginFormData) => {
   console.log('login formData: ', formData)

   try {
    const response = await authController.callEndpoint((api) =>
        api.apiAuthLoginPost(formData)  
    );

    console.log(response)
} catch (err) {
    console.error('Upload failed: ', err);
}

return null;
};

export const authActions = { register, login };
