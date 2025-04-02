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
    let translation = '';
    if (isObject(message)) {
        const msgObj = message as ErrorMessageOptions;
        translation = t(msgObj.message);
    } else {
        translation = t(message as string);
    }
    return message ? (
        <div className="text-red-500 text-sm">{translation}</div>
    ) : null;
};
