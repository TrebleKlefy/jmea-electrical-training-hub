import React from 'react';
import { Header } from './Header'; // Assuming Header is in the same directory or adjust path

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* You can also add a Footer here if it's common to all pages using this layout */}
    </>
  );
};

export default MainLayout;
