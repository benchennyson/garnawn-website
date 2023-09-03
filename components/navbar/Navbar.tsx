'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';

import { config, paths } from '@/admin.config';
import { themeColors } from '@/styles/styles';
import classNames from 'classnames';

type Props = {
  customStyles?: string;
};

export default function Navbar({ customStyles }: Props) {
  return (
    <div className={themeColors.onSurface.bg}>
      <div
        className={`container flex h-20 flex-row justify-between py-2 ${customStyles}`}
      >
        {/*Nav links - left side */}
        <div className='align-center flex flex-row gap-6 justify-self-start lg:hidden'>
          <div className='relative mr-2 w-32'>
            <Link href='/'>
              <Image src={logo} alt='logo' />
            </Link>
          </div>
        </div>
        <div className='align-center hidden flex-row gap-6 justify-self-start lg:flex'>
          <div className='min-w-32 relative w-32'>
            <Link href='/'>
              <Image src={logo} alt='logo' />
            </Link>
          </div>
          {[
            paths.map((path) => (
              <div
                key={path}
                className={`flex items-center ${themeColors.onPrimary.text} ${themeColors.onHover.hover}`}
              >
                <Link href={`/${path.toLowerCase()}`}>{path}</Link>
              </div>
            )),
          ]}
        </div>
        {/*Social links - right side */}
        <div className='hidden items-center lg:flex'>
          <Link href={config.facebook} passHref>
            <FacebookIcon fontSize='large' sx={{ color: '#4267B2' }} />
          </Link>
        </div>
        {/*Dropdown Menu */}

        {/*Dropdown menu for mobile sizes*/}
        <div className='z-50 flex flex-col justify-center lg:hidden'>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button
                aria-label='menu'
                className={`focus:ring-none inline-flex justify-center rounded-lg border-2 px-2 py-1 text-sm font-medium shadow-sm ${themeColors.secondary.border} ${themeColors.onBackground.text}`}
              >
                <MenuIcon
                  className={`mr-1h-5 w-5 ${themeColors.secondary.text}`}
                  aria-hidden='true'
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                className={`absolute right-0 mt-2 w-56 origin-top-right overflow-hidden rounded-lg shadow-lg ${themeColors.surface.bg}`}
              >
                <Menu.Item>
                  <Link
                    className={classNames(
                      'block border-b px-4 py-2 text-sm',
                      themeColors.active.border,
                      themeColors.active.active,
                      themeColors.active.hover
                    )}
                    href='/'
                  >
                    Home
                  </Link>
                </Menu.Item>
                {paths.map((path) => (
                  <Menu.Item key={path}>
                    <Link
                      className={classNames(
                        'block border-b px-4 py-2 text-sm',
                        themeColors.active.border,
                        themeColors.active.active,
                        themeColors.active.hover
                      )}
                      href={`/${path.toLowerCase()}`}
                    >
                      {path}
                    </Link>
                  </Menu.Item>
                ))}
                <Menu.Item>
                  <Link
                    className={`block px-4 py-2 text-sm ${themeColors.active.active} ${themeColors.active.hover}`}
                    href={config.facebook}
                  >
                    Facebook
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
