import Link from 'next/link';
import { useRef } from 'react';

interface HeaderProps {
  preview: boolean;
}

const Header: React.FC<HeaderProps> = ({ preview }) => {
  const menuBtn = useRef(null);
  const menu = useRef(null);

  function menuHandler() {
    menuBtn.current.classList.toggle('open');
    menu.current.classList.toggle('flex');
    menu.current.classList.toggle('hidden');
  }

  const navItems = [
    { title: 'Comunidad', link: '/#comunidad' },
    { title: 'Eventos', link: '/#events' },
    { title: 'Mentorias', link: '/mentorias' },
  ];

  return (
    <header
      className={`shadow-md w-full flex flex-col fixed md:relative bg-white z-50 ${
        preview ? 'pt-10' : ''
      }`}
    >
      <nav
        id="site-menu"
        className="container mx-auto flex flex-col md:flex-row w-full justify-between items-center px-4 md:px-6 py-1 bg-white shadow md:shadow-none"
      >
        <div className="w-full md:w-auto self-start md:self-center flex flex-row md:flex-none flex-no-wrap justify-between items-center">
          <Link href="/">
            <a className="flex title-font items-center text-gray-900">
              <img
                src="/logo.svg"
                className="w-12 h-12 text-white p-2 rounded-full"
                alt="FRONTENDCAFE"
              />
              <span className="ml-1 text-xl text-gray-600 font-semibold">
                FRONTEND
              </span>
              <span className="text-xl text-gray-600 font-normal">CAFE</span>
            </a>
          </Link>
          <button
            ref={menuBtn}
            className="hamburger block md:hidden focus:outline-none"
            type="button"
            onClick={() => menuHandler()}
          >
            <span className="hamburger__top-bun"></span>
            <span className="hamburger__bottom-bun"></span>
          </button>
        </div>
        <div
          ref={menu}
          className="w-full md:w-auto self-end md:self-center md:flex flex-col md:flex-row items-center h-full py-1 pb-4 md:py-0 md:pb-0 hidden"
        >
          {navItems.map((item) => (
            <Link href={item.link}>
              <a className="w-full md:w-auto text-center px-4 py-2 text-gray-600 hover:text-gray-800">
                {item.title}
              </a>
            </Link>
          ))}

          <button
            className={
              'bg-indigo-500 text-white active:bg-pink-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
            }
            type="button"
            style={{ transition: 'all .15s ease' }}
          >
            Sumate a Discord
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
