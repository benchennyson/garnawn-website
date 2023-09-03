import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='flex items-center text-primary'>
          <ArrowUturnLeftIcon className='mr-2 h-6 w-6 text-primary' />
          Go to website
        </Link>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  );
}

export default StudioNavbar;
