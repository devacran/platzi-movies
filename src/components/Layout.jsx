import React from 'react';
import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
);
