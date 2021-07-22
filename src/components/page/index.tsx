import React, { memo } from 'react';
import Head from 'next/head';

import styles from './page.module.scss';

interface Props {
  children: React.ReactNode | React.ReactNode[] | string | number;
  title: string;
}

const Page: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.page}>{children}</main>
    </>
  );
};

export default memo(Page);
