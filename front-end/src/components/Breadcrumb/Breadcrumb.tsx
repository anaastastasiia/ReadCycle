import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    paths: { name: string; href: string }[];
}

const Breadcrumb = ({ paths }: BreadcrumbProps) => {
    const { t } = useTranslation();
    return (
        <nav className="text-sm text-gray-600 mb-2">
            <Link to="/" className="hover:underline">
                {t(`enums:NavbarEnum.home`)}
            </Link>
            {paths.map((path, index) => (
                <span key={index} className="mx-1">
                    →{' '}
                    <Link
                        to={path.href}
                        className="hover:underline font-medium text-gray-800"
                    >
                        {path.name}
                    </Link>
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
