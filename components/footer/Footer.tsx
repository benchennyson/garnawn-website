import { config, paths } from '@/admin.config';
import logo from '@/assets/logo.png';
import { themeColors } from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/*Footer 2 rows - 1 for logo, 1 for links */}
      <div
        className={`flex flex-col ${themeColors.onSurface.bg} px-12 py-10 sm:px-24 md:px-32 lg:px-48 xl:px-80`}
      >
        {/*Logo*/}
        <div className='mb-8 flex h-20 justify-center sm:h-32 md:mb-12 md:h-48'>
          <div className='relative w-full'>
            <Image src={logo} alt='logo' fill />
          </div>
        </div>
        {/*Links, 2 columns */}
        {/*Left side links */}
        <div className='flex flex-col justify-between text-sm sm:flex-row sm:text-base'>
          <div className='flex flex-col gap-6'>
            {paths.map((path) => (
              <div
                key={path}
                className={`flex items-center justify-center ${themeColors.onPrimary.text} sm:justify-start`}
              >
                <Link
                  className={themeColors.onHover.hover}
                  href={`/${path.toLowerCase()}`}
                >
                  {path}
                </Link>
              </div>
            ))}
          </div>
          {/*Right side links */}
          <div className='mt-6 flex flex-col gap-6 sm:mt-0'>
            {/*Social links */}
            <div
              className={`flex justify-center text-right ${themeColors.onPrimary.text} sm:justify-end`}
            >
              <Link
                className={themeColors.onHover.hover}
                href={config.facebook}
                target='_blank'
              >
                Facebook
              </Link>
            </div>
            {/*Email */}
            <div
              className={`flex justify-center text-right  ${themeColors.onPrimary.text} sm:justify-end`}
            >
              <a
                className={themeColors.onHover.hover}
                href={`mailto:dog@dog.com`}
              >{`Email: ${config.email}`}</a>
            </div>
            {/*Mobile */}
            <div
              className={`flex justify-center text-right  ${themeColors.onPrimary.text} sm:justify-end`}
            >
              <a
                className={themeColors.onHover.hover}
                href={`tel: ${config.mobile}`}
              >{`Mobile: ${config.mobile}`}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
