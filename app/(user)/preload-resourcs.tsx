'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload(
    'https://www.sanity.io/static/images/favicons/favicon-32x32.png'
  );
  ReactDOM.preload(
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    {
      as: 'style',
    }
  );
  ReactDOM.preload(
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
    {
      as: 'style',
    }
  );
  ReactDOM.preload(
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    {
      as: 'style',
    }
  );

  return null;
}
