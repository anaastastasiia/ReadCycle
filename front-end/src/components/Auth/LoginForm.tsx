import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { authActions, authStore, LoginFormData } from '../../store/authStore';
import { Form, FormInput } from '../Form/Form';
import { loginSchema } from '../../validation/authSchema';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { login, loadUserData } = authActions;
    const { user } = authStore();

    const {
        register: formRegister,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = async (data: LoginFormData) => {
        const res = await login(data);
        if (res) {
            loadUserData();
            console.log(user);
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
            <h2 className="text-2xl font-semibold mb-5">Welcome!</h2>
            <Form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                <FormInput
                    label="Email address"
                    type="email"
                    register={formRegister('email')}
                    error={errors.email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    register={formRegister('password')}
                    error={errors.password}
                />
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                    Sign in
                </button>
            </Form>
            <p className="text-sm text-center mt-4">
                Don’t have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    Sign up
                </a>
            </p>
        </motion.div>
    );
};
