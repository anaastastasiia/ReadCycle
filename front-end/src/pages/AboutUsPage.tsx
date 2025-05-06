import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="flex-1 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="container mx-auto px-4 py-12 text-gray-800"
        >
            <h1 className="text-4xl font-bold text-center mb-8">
                {t('pages:aboutUs.title')}
            </h1>
            <div className="max-w-3xl mx-auto text-lg space-y-6">
                <p>
                    <strong>ReadCycle</strong> {t('pages:aboutUs.intro')}
                </p>
                <p>{t('pages:aboutUs.mission')}</p>
                <p>{t('pages:aboutUs.vision')}</p>
                <p>{t('pages:aboutUs.value')}</p>
                <p>{t('pages:aboutUs.join')}</p>
            </div>
        </motion.div>
    );
};
