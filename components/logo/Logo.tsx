import Image from 'next/image';
import logo from '../../assets/logo.png';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='object-cover px-3 py-2'
        height={50}
        width={150}
        src={logo}
        alt={title}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
