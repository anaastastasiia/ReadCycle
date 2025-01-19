import Logo from '../../assets/logo.png';
import { NavbarMenu } from '../../model/data';

const Footer = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="grid grid-cols-2 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
                        <div className="py-4 px-4 space-y-4">
                            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    width={'70px'}
                                    height={'70px'}
                                />
                                <p>
                                    <span className="text-secondary">Read</span>
                                    <span className="text-primary">Cycle</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex md:ml-14">
                            <ul className="flex items-center gap-6">
                                {NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={item.link}
                                                className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                                            >
                                                {item.key}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center py-4 border-t-2 border-gray-800/10">
                        <span className="text-sm text-black/60">
                            @copyright 2024 The Coding Journey
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
