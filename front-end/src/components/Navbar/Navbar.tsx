import { useNavigate } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AccountMenu, NavbarMenu } from '../../model/data.ts';
import ResponsiveMenu from './ResponsiveMenu.js';
import { AccountDetails } from './AccountDetails.tsx';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher.tsx';
import { authActions, authStore } from '../../store/authStore.ts';
import { UserContext } from '../../contexts/UserContext.ts';
import Logo from '../../../public/assets/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAccount, setIsOpenAccount] = useState(false);
    const { user, token } = authStore();
    const { clearData, loadUserData, checkTokenExpiration } = authActions;
    const accountRef = useRef<HTMLDivElement>(null);

    const onClickMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const onClickAccount = () => {
        setIsOpenAccount((prev) => !prev);
    };

    const register = () => {
        navigate('/register');
        setIsOpen(false);
    };

    const login = () => {
        navigate('/login');
        setIsOpen(false);
        setIsOpenAccount(false);
    };

    useEffect(() => {
        loadUserData();
        if (!checkTokenExpiration) {
            clearData();
        }
    }, [loadUserData, checkTokenExpiration, clearData]);

    const logout = () => {
        clearData();
        navigate('/');
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                accountRef.current &&
                !accountRef.current.contains(event.target as Node)
            ) {
                setIsOpenAccount(false);
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <UserContext.Provider value={{ user, token, login, register, logout }}>
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
                    {user ? (
                        <div
                            className="relative hidden lg:block space-x-6 w-1/8"
                            ref={accountRef}
                        >
                            <div
                                onClick={onClickAccount}
                                className="cursor-pointer flex items-center"
                            >
                                <PersonIcon />{' '}
                                <div className="text-xl font-semibold px-4">
                                    {user.firstName}
                                </div>
                                <KeyboardArrowDownIcon />
                            </div>
                            {isOpenAccount && (
                                <div className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg z-50">
                                    <AccountDetails
                                        open={isOpenAccount}
                                        options={AccountMenu}
                                        closeMenu={onClickAccount}
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="relative hidden lg:block space-x-6">
                            <button className="font-semibold" onClick={login}>
                                {t('pages:mainPage.navbar.signIn')}
                            </button>
                            <button
                                className="text-white bg-secondary font-semibold rounded-full px-6 py-2 "
                                onClick={register}
                            >
                                {t('pages:mainPage.navbar.register')}
                            </button>
                        </div>
                    )}
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
        </UserContext.Provider>
    );
};

export default Navbar;
