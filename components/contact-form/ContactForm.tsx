'use client';

import HCaptcha from '@/lib/captcha';
import { themeColors } from '@/styles/styles';
import emailjs, { init } from '@emailjs/browser';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const emailJsTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!;

// EmailJS
init(emailJsPublicKey);

type EmailFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [token, setToken] = useState<string>('');
  const captchaRef = useRef<HCaptcha>(null);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);

  const formik = useFormik<EmailFormData>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors = {} as Record<keyof EmailFormData, string>;
      if (values.name.length === 0) {
        errors.name = 'Name is required';
      }
      if (values.email.length === 0) {
        errors.email = 'Email is required';
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is invalid';
      }
      if (values.message.length === 0) {
        errors.message = 'Message is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      const { name, email, message } = values;
      const templateParams = {
        name: sanitizeHtml(name),
        email: sanitizeHtml(email),
        message: sanitizeHtml(message),
      };
      try {
        emailjs
          .send(emailJsServiceId, emailJsTemplate, templateParams || '')
          .then((response) => {
            if (response.status === 200) {
              setEmailSentSuccess(true);
              window.alert('Email sent successfully');
              window.location.href = '/contact';
            } else {
              alert('Something went wrong. Please try again later.');
            }
          })
          .then((error) => console.log(error));
      } catch (error) {
        console.log(error);
        alert('Something went wrong. Please try again later.');
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex flex-col space-y-4 py-4'
    >
      <input
        name='name'
        type='text'
        className={classNames(
          'rounded p-2 outline-none outline-2 outline-offset-0',
          themeColors.focus.outline,
          formik.errors.name &&
            `${themeColors.error.outline} ${themeColors.error.focus}`
        )}
        placeholder='Your name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <span className={`text-sm font-semibold ${themeColors.error.text}`}>
          {formik.errors.name}
        </span>
      )}
      <input
        name='email'
        type='email'
        className={classNames(
          'rounded p-2 outline-none outline-2 outline-offset-0 ',
          themeColors.focus.outline,
          formik.errors.email &&
            `${themeColors.error.outline} ${themeColors.error.focus}`
        )}
        placeholder='Your email address'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <span className={`text-sm font-semibold ${themeColors.error.text}`}>
          {formik.errors.email}
        </span>
      )}
      <textarea
        name='message'
        placeholder='Your message'
        className={classNames(
          'h-32 resize-none rounded p-2 outline-none outline-2 outline-offset-0',
          themeColors.focus.outline,
          formik.errors.message &&
            `${themeColors.error.outline} ${themeColors.error.focus}`
        )}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.message && formik.errors.message && (
        <span className={`text-sm font-semibold ${themeColors.error.text}`}>
          {formik.errors.message}
        </span>
      )}
      <div className='self-center'>
        <HCaptcha sitekey={sitekey} onVerify={setToken} ref={captchaRef} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <button
          className={classNames(
            'rounded px-4 py-2 font-medium hover:brightness-95 disabled:pointer-events-none',
            themeColors.primaryVariant.bg,
            themeColors.onPrimary.text,
            themeColors.disabled.bg,
            themeColors.disabled.text
          )}
          type='submit'
          onClick={() => {
            formik.submitForm;
          }}
          disabled={!token || !formik.dirty || !formik.isValid}
        >
          Send message
        </button>
        <span
          className={classNames(
            'py-4',
            themeColors.primaryVariant.text,
            emailSentSuccess ? 'visible' : 'hidden'
          )}
        >
          {emailSentSuccess
            ? 'Thank you for your message, we will be in touch in no time!'
            : 'Unable to send message, please try again later'}
        </span>
      </div>
    </form>
  );
}
