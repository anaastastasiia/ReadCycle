import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { authActions, authStore, LoginFormData } from '../../store/authStore';
import { Form, FormInput } from '../Form/Form';
import { loginSchema } from '../../validation/authSchema';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
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
            <h2 className="text-2xl font-semibold mb-5">
                {t('pages:authPage.login.welcome')}
            </h2>
            <Form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                <FormInput
                    label={t('pages:authPage.login.form.email')}
                    type="email"
                    register={formRegister('email')}
                    error={errors.email}
                />
                <FormInput
                    label={t('pages:authPage.login.form.password')}
                    type="password"
                    register={formRegister('password')}
                    error={errors.password}
                />
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        {t('pages:authPage.login.form.forgotPassword')}
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                    {t('common:button.signIn')}
                </button>
            </Form>
            <p className="text-sm text-center mt-4">
                {t('pages:authPage.login.form.noAccount')}{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    {t('common:button.signUp')}
                </a>
            </p>
        </motion.div>
    );
};
