import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../../contexts/UserContext';
import { ResponsiveMenuProps } from '../../model/types';
import LogoutIcon from '@mui/icons-material/Logout';

export const AccountDetails = ({
    open,
    options,
    closeMenu
}: ResponsiveMenuProps) => {
    const { t } = useTranslation();
    const { user, login, register, logout } = useUserContext();

    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full bg-slate-50"
                >
                    <div className="text-l rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-4">
                            {options.map((item) => {
                                return (
                                    <li
                                        className="cursor-pointer"
                                        onClick={closeMenu}
                                        key={item.id}
                                    >
                                        {t(
                                            `pages:authPage.accountMenu.${item.key}`
                                        )}
                                    </li>
                                );
                            })}
                            {user ? (
                                <div className="block space-x-6">
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
