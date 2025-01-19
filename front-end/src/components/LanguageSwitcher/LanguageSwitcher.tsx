import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { LanguageType } from '../../model/types.ts';
import { LANGUAGES } from '../../model/data.ts';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpenLngSelect, setIsOpenLngSelect] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

    const changeLng = (lang: LanguageType) => {
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang.value);
        setIsOpenLngSelect(false);
    };

    return (
        <div>
            <div
                className="flex items-center justify-between cursor-pointer py-2 px-3"
                onClick={() => setIsOpenLngSelect((prev) => !prev)}
            >
                <img
                    src={selectedLanguage.img}
                    alt={selectedLanguage.label}
                    className="w-6 h-4 mr-2"
                />
                <span className="text-gray-500">&#9662;</span>
            </div>
            {isOpenLngSelect && (
                <ul className="absolute bg-white border border-gray-200 mt-1 z-10 max-h-60 overflow-y-auto shadow-lg">
                    {LANGUAGES.map((lang) => (
                        <li
                            key={lang.value}
                            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => changeLng(lang)}
                        >
                            <img
                                src={lang.img}
                                alt={lang.label}
                                className="w-6 h-4 mr-2"
                            />
                            <span>{lang.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
