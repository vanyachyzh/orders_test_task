import { Link } from 'react-router-dom';

import { SIDEBAR_LINKS } from './constants';

const Sidebar = () => {
  return (
    <ul className="mt-6 space-y-1 p-[1rem] bg-white/20 rounded-[1.2rem] h-min">
      {SIDEBAR_LINKS.map(link => (
        <li key={link.name}>
          <Link
            to={link.to}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
