import Footer from '@/components/footer/Footer';
import Header from '../../components/navbar/Navbar';

import '../../styles/input.css';
import { pagePadding, themeColors } from '@/styles/styles';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={`${themeColors.background.bg} ${pagePadding}`}>
        {children}
      </div>
      <Footer />
    </>
  );
}
