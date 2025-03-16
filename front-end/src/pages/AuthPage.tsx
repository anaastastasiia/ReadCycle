import { motion } from 'framer-motion';
import image from '../assets/fly.png';
import { LoginForm } from '../components/Auth/LoginForm';
import { RegisterForm } from '../components/Auth/RegisterForm';

export const AuthPage = () => {
    return (
        <div className="overflow-x-hidden flex container my-8">
            <motion.div
                className="hidden md:flex flex-1 justify-center items-center"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={image} />
            </motion.div>
            <LoginForm />
            <RegisterForm />
        </div>
    );
};
