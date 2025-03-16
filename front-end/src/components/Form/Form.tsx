import { ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormProps {
    children: ReactNode;
    onSubmit: () => void;
    className?: string;
}

interface InputProps {
    label: string;
    type?: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
}

export const Form = ({ children, onSubmit, className }: FormProps) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
};

export const FormInput = ({
    label,
    type = 'text',
    error,
    register
}: InputProps) => {
    return (
        <div>
            <label className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                {...register}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
};
