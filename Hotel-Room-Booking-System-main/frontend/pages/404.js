// Developed by pooja

import { Result } from 'antd';
import Link from 'next/link';
import React from 'react';

function ErrorPage() {
  return (
    <Result
      status='404'
      title='404 - Not Found!'
      subTitle='Sorry, the page you visited does not exist.'
      extra={(
        <Link className='btn-primary' href='/'>
          Back to home
        </Link>
      )}
    />
  );
}

export default ErrorPage;
