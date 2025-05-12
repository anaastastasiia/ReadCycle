import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface SelectProps {
    label: string;
    options: { value: string; label: string }[];
    error?: FieldError;
    register: UseFormRegisterReturn;
    required?: boolean;
    className?: string;
}

export const FormSelect = ({
    label,
    options,
    error,
    register,
    required = false,
    className = ''
}: SelectProps) => {
    return (
        <div className={`w-full  ${className}`}>
            <label className="block text-sm font-medium">{label}</label>
            <select
                {...register}
                required={required}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400 bg-white ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            >
                <option value=""></option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
};
