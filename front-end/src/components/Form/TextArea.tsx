import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
    label: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
    required?: boolean;
    rows?: number;
    className?: string;
}

export const FormTextArea = ({
    label,
    error,
    register,
    required = false,
    rows = 4,
    className = ''
}: TextAreaProps) => {
    return (
        <div className={`w-full ${className}`}>
            <label className="block text-sm font-medium">{label}</label>
            <textarea
                {...register}
                rows={rows}
                required={required}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400 resize-none ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
};
