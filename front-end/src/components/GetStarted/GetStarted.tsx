import { useTranslation } from 'react-i18next';
import GirlImg from '../../assets/education.jpg';
import { motion } from 'framer-motion';
import { SlideRight } from '../../utils/animations';

const GetStarted = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
                    <div className="text-center md:text-left space-y-6">
                        <motion.h1
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl font-semibold lg:text-6xl !leading-tight"
                        >
                            {t('pages:mainPage.getStarted.title')} Read
                            <span className="text-primary">Cycle!</span>
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(0.8)}
                            initial="hidden"
                            animate="visible"
                        >
                            {t('pages:mainPage.getStarted.description')}
                        </motion.p>
                        <motion.div
                            variants={SlideRight(1.0)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
                        >
                            <button className="primary-btn">
                                {t('common:button.getStarted')}
                            </button>
                            <span className="text-primary font-semibold text-xl">
                                {t('pages:mainPage.getStarted.fast')}
                            </span>
                        </motion.div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            delay: 0.2
                        }}
                        src={GirlImg}
                        alt=""
                        className="w-[450px] md:w-[550px] xl:w-[700px]"
                    />
                </div>
            </div>
        </>
    );
};

export default GetStarted;
