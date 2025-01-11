import { useState } from 'react';
import { NavbarMenu } from '../../mockData/data.ts';
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu.js';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="container flex justify-between items-center pb-6">
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
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="hidden lg:block space-x-6">
                        <button className="font-semibold">Sign in</button>
                        <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 ">
                            Register
                        </button>
                    </div>
                    <div
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </motion.div>
            <ResponsiveMenu open={isOpen} />
        </>
    );
};

export default Navbar;
