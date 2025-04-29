import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuProps } from '../../model/types';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserContext } from '../../contexts/UserContext';

const ResponsiveMenu = ({ open, options, closeMenu }: MenuProps) => {
    const { t } = useTranslation();
    const { user, login, register, logout } = useUserContext();
    console.log('u: ', user);

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
                    <div className="text-xl font-semibold bg-white py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {options.map((item) => {
                                return (
                                    <li
                                        className="uppercase cursor-pointer"
                                        onClick={closeMenu}
                                        key={item.id}
                                    >
                                        {t(`enums:NavbarEnum.${item.key}`)}
                                    </li>
                                );
                            })}
                            <LanguageSwitcher />
                            {user ? (
                                <div className="block space-x-6">
                                    {user.firstName}
                                    <button onClick={logout} className="pl-3">
                                        <LogoutIcon />
                                    </button>
                                </div>
                            ) : (
                                <div className="block space-x-6">
                                    <button
                                        className="font-semibold"
                                        onClick={login}
                                    >
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
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
