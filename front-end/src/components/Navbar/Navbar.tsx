import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { NavbarMenu } from '../../utils/data.ts';
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo.png';
import ResponsiveMenu from './ResponsiveMenu.js';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher.tsx';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onClickMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-5 z-10"></div>
            )}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="container flex justify-between items-center">
                    <div className="text-2xl flex items-center gap-2 font-bold">
                        <img
                            src={Logo}
                            alt="logo"
                            width={'120px'}
                            height={'120px'}
                        />
                        <p>
                            <span className="text-secondary">Read</span>
                            <span className="text-primary">Cycle</span>
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6">
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                                        >
                                            {t(`enums:NavbarEnum.${item.key}`)}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <LanguageSwitcher />
                    </div>
                    <div className="hidden lg:block space-x-6">
                        <button className="font-semibold">
                            {t('pages:mainPage.navbar.signIn')}
                        </button>
                        <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 ">
                            {t('pages:mainPage.navbar.register')}
                        </button>
                    </div>
                    <div className="lg:hidden z-30" onClick={onClickMenu}>
                        <MdMenu className="text-4xl" />
                    </div>
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black opacity-70 z-20"
                            onClick={onClickMenu}
                        ></div>
                    )}
                </div>
            </motion.div>
            <ResponsiveMenu
                open={isOpen}
                options={NavbarMenu}
                closeMenu={onClickMenu}
            />
        </>
    );
};

export default Navbar;
