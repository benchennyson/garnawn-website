import { Quicksand } from 'next/font/google';

export const metadata = {
  metadataBase: new URL('https://www.garnawn.com'),
};

const font = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={font.className}>
      <body>{children}</body>
    </html>
  );
}
