import { motion, AnimatePresence } from 'framer-motion';
import { NavbarMenuProps } from '../../mockData/data';
import { useTranslation } from 'react-i18next';

interface ResponsiveMenuProps {
    open: boolean;
    options: NavbarMenuProps[];
}

const ResponsiveMenu = ({ open, options }: ResponsiveMenuProps) => {
    const { t } = useTranslation();
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
                    <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {options.map((item) => {
                                return (
                                    <li>{t(`mainPage:navbar.${item.key}`)}</li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
