import ContactForm from '@/components/contact-form/ContactForm';
import PageBanner from '@/components/page-banner/PageBanner';
import { getContactPage } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { ContactPage } from '@/typings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Auckland's top notch drainage crew",
};

export const revalidate = 30;

export default async function Page() {
  const contactPage: ContactPage = await client.fetch(getContactPage, {});

  const { title, subtitle, media } = contactPage;

  return (
    <div
      className={
        'container flex-col space-y-1 xs:space-y-2 lg:space-y-4 xl:flex'
      }
    >
      <PageBanner title={title} subtitle={subtitle} media={media} />
      <ContactForm />
    </div>
  );
}
