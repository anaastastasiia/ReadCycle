import image from '../assets/fly.png';
// import { LoginForm } from '../components/Auth/LoginForm';
import { RegisterForm } from '../components/Auth/RegisterForm';

export const AuthPage = () => {
    return (
        <div className="overflow-x-hidden flex container my-8">
            <div className="hidden md:flex flex-1 justify-center items-center">
                <img src={image} />
            </div>
            {/* <LoginForm /> */}
            <RegisterForm />
        </div>
    );
};
