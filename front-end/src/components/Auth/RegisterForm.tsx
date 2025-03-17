import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormInput } from '../Form/Form';
import { registerSchema } from '../../validation/authSchema';
import { authActions, RegisterFormData } from '../../store/authStore';
import AuthMapper from '../../model/mapper/AuthMapper';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const { register, getUserData } = authActions;

    const {
        register: formRegister,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema)
    });

    const handleRegister = async (data: RegisterFormData) => {
        const res = await register(AuthMapper.mapRegisterData(data));
        if (res) {
            getUserData();
            navigate('/');
        }
    };

    return (
        <motion.div
            className="flex-1 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <h2 className="text-2xl font-semibold mb-5">
                Welcome! Create an account!
            </h2>
            <Form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                <div className="flex gap-x-3">
                    <div className="w-1/2">
                        <FormInput
                            label="First name"
                            register={formRegister('firstName')}
                            error={errors.firstName}
                        />
                    </div>
                    <div className="w-1/2">
                        <FormInput
                            label="Last name"
                            register={formRegister('lastName')}
                            error={errors.lastName}
                        />
                    </div>
                </div>
                <FormInput
                    label="Email address"
                    type="email"
                    register={formRegister('email')}
                    error={errors.email}
                />
                <FormInput
                    label="Phone number"
                    register={formRegister('phoneNumber')}
                    error={errors.phoneNumber}
                />
                <FormInput
                    label="Password"
                    type="password"
                    register={formRegister('password')}
                    error={errors.password}
                />
                <FormInput
                    label="Confirm password"
                    type="password"
                    register={formRegister('confirmPassword')}
                    error={errors.confirmPassword}
                />

                <div className="font-medium">Adres do korespondencji</div>
                <FormInput
                    label="Miasto"
                    register={formRegister('city')}
                    error={errors.city}
                />
                <div className="flex lg:gap-x-3 lg:flex-row flex-col">
                    <div className="lg:w-1/2 w-full">
                        <FormInput
                            label="Ulica"
                            register={formRegister('street')}
                            error={errors.street}
                        />
                    </div>
                    <div className="lg:w-1/4 w-full">
                        <FormInput
                            label="Numer domu"
                            register={formRegister('houseNumber')}
                            error={errors.houseNumber}
                        />
                    </div>
                    <div className="lg:w-1/4 w-full">
                        <FormInput
                            label="Numer mieszkania"
                            register={formRegister('apartment')}
                            error={errors.apartment}
                        />
                    </div>
                </div>
                <FormInput
                    label="Kod pocztowy"
                    register={formRegister('postalCode')}
                    error={errors.postalCode}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                    Sign up
                </button>
            </Form>
            <p className="text-sm text-center mt-4">
                Already have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    Sign in
                </a>
            </p>
        </motion.div>
    );
};
