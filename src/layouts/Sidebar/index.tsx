import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { SIDEBAR_LINKS } from './constants';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <ul className="mt-6 h-min space-y-1 rounded-[1.2rem] bg-white/20 p-[1rem]">
      {SIDEBAR_LINKS.map(link => (
        <li key={link.name}>
          <Link
            to={link.to}
            className={twMerge(
              'block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700',
              pathname === link.to && 'bg-gray-100',
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
