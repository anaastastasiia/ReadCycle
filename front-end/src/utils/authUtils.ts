import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    street: string;
    city: string;
    houseNumber: string;
    apartment?: string;
    postalCode: string;
    exp: number; 
}

export const getUserFromToken = (token: string | null): DecodedToken | null => {
    if (!token) {
        console.log('No token available');
        return null;
    }

    console.log('Decoding token:', token);
    try {
        const decoded: DecodedToken = jwtDecode(token);
        return decoded;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};

