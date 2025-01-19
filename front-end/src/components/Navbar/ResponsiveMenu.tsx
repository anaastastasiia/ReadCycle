import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveMenuProps } from '../../model/types';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

const ResponsiveMenu = ({ open, options, closeMenu }: ResponsiveMenuProps) => {
    const { t } = useTranslation();
    console.log(open);

    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
                >
                    <div className="text-xl font-semibold bg-white  py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {options.map((item) => {
                                return (
                                    <li
                                        className="uppercase cursor-pointer"
                                        onClick={closeMenu}
                                    >
                                        {t(`enums:NavbarEnum.${item.key}`)}
                                    </li>
                                );
                            })}
                            <LanguageSwitcher />
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
