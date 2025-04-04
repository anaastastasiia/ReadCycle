import { ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import ClearIcon from '@mui/icons-material/Clear';
import { ErrorMessage } from './ErrorMessage';

interface FormProps {
    children: ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
}

interface InputProps {
    label: string;
    type?: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
    accept?: string;
    required?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    onClear?: () => void;
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
    register,
    accept,
    multiple,
    required,
    clearable = false,
    onClear
}: InputProps) => {
    return (
        <div className="relative">
            <label className="block text-sm font-medium">{label}</label>
            <div className="relative">
                <input
                    accept={accept}
                    type={type}
                    multiple={multiple}
                    required={required}
                    {...register}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400 ${
                        error ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {clearable && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    >
                        <ClearIcon className="text-gray-500" />
                    </button>
                )}
            </div>
            {error && <ErrorMessage message={error?.message as string} />}
        </div>
    );
};
