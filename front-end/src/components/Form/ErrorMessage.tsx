import { useTranslation } from 'react-i18next';
import { isObject } from 'lodash';

interface ErrorMessageOptions {
    message: string;
}

interface ErrorMessageProps {
    message?: React.ReactNode | ErrorMessageOptions;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    const { t } = useTranslation();

    if (!message) return null;

    const translation = isObject(message)
        ? t((message as ErrorMessageOptions).message)
        : t(message as string);

    return <div className="text-red-500 text-sm">{translation}</div>;
};
