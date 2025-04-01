import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, FormInput } from '../Form/Form';
import { registerSchema } from '../../validation/authSchema';
import { authActions, RegisterFormData } from '../../store/authStore';
import AuthMapper from '../../model/mapper/AuthMapper';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { register, loadUserData } = authActions;

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
            loadUserData();
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
                {t('pages:authPage.register.welcome')}
            </h2>
            <Form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                <div className="flex gap-x-3 md:flex-row flex-col">
                    <div className="md:w-1/2">
                        <FormInput
                            label={t('pages:authPage.register.form.firstName')}
                            register={formRegister('firstName')}
                            error={errors.firstName}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <FormInput
                            label={t('pages:authPage.register.form.lastName')}
                            register={formRegister('lastName')}
                            error={errors.lastName}
                        />
                    </div>
                </div>
                <FormInput
                    label={t('pages:authPage.register.form.email')}
                    type="email"
                    register={formRegister('email')}
                    error={errors.email}
                />
                <FormInput
                    label={t('pages:authPage.register.form.phoneNumber')}
                    register={formRegister('phoneNumber')}
                    error={errors.phoneNumber}
                />
                <FormInput
                    label={t('pages:authPage.register.form.password')}
                    type="password"
                    register={formRegister('password')}
                    error={errors.password}
                />
                <FormInput
                    label={t('pages:authPage.register.form.confirmPassword')}
                    type="password"
                    register={formRegister('confirmPassword')}
                    error={errors.confirmPassword}
                />

                <div className="font-medium">
                    {t('pages:authPage.register.form.address.title')}
                </div>
                <FormInput
                    label={t('pages:authPage.register.form.address.city')}
                    register={formRegister('city')}
                    error={errors.city}
                />
                <div className="flex lg:gap-x-3 lg:flex-row flex-col">
                    <div className="lg:w-1/2 w-full">
                        <FormInput
                            label={t(
                                'pages:authPage.register.form.address.street'
                            )}
                            register={formRegister('street')}
                            error={errors.street}
                        />
                    </div>
                    <div className="lg:w-1/4 w-full">
                        <FormInput
                            label={t(
                                'pages:authPage.register.form.address.houseNumber'
                            )}
                            register={formRegister('houseNumber')}
                            error={errors.houseNumber}
                        />
                    </div>
                    <div className="lg:w-1/4 w-full">
                        <FormInput
                            label={t(
                                'pages:authPage.register.form.address.apartment'
                            )}
                            register={formRegister('apartment')}
                            error={errors.apartment}
                        />
                    </div>
                </div>
                <FormInput
                    label={t('pages:authPage.register.form.address.postalCode')}
                    register={formRegister('postalCode')}
                    error={errors.postalCode}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                    {t('common:button.signUp')}
                </button>
            </Form>
            <p className="text-sm text-center mt-4">
                {t('pages:authPage.register.form.haveAccount')}{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    {t('common:button.signIn')}
                </a>
            </p>
        </motion.div>
    );
};
