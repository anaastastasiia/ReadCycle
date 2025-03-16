import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter')
        .matches(/[a-z]/, 'Password must contain a lowercase letter')
        .matches(/\d/, 'Password must contain a number')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
    city: yup.string().required('City is required'),
    street: yup.string().required('Street is required'),
    houseNumber: yup.string().required('House number is required'),
    apartment: yup.string().nullable().notRequired(), 
    postalCode: yup
        .string()
        .matches(/^\d{2}-\d{3}$/, 'Invalid postal code format (e.g. 00-123)')
        .required('Postal code is required'),
    phoneNumber: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .required('Phone number is required'),
});

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter')
        .matches(/[a-z]/, 'Password must contain a lowercase letter')
        .matches(/\d/, 'Password must contain a number')
        .required('Password is required'),
});
