import React from 'react';

import Footer from '../../../components/commons/footer/Footer';
import { NavHeader } from '../../../components/commons/header/Header';

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = (props: LayoutProp) => {
  const { children } = props;
  return (
    <>
      <NavHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
