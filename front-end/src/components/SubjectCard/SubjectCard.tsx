import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BooksTypesList } from '../../utils/data';

const SubjectCard = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <div className="py-14 px-20 bg-[#f9f9f9]">
                    <div className="space-y-4 px-6 pb-6 text-center max-w-[600px] mx-auto mb-5">
                        <h1 className="uppercase font-semibold text-orange-500">
                            {t('pages:mainPage.booksTypes.subtitle')}
                        </h1>
                        <p className="font-semibold text-3xl">
                            {t('pages:mainPage.booksTypes.title')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {BooksTypesList.map((item) => {
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -200 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        delay: item.delay
                                    }}
                                    className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
                                >
                                    <div
                                        style={{
                                            color: item.color,
                                            backgroundColor: item.color + '20'
                                        }}
                                        className="w-10 h-10 rounded-md flex justify-center items-center"
                                    >
                                        {item.icon}
                                    </div>
                                    <p>
                                        {t(`enums:BooksTypeEnum.${item.key}`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubjectCard;
