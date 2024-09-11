// app/layout.tsx
import './globals.css'; // Import global CSS if needed
import { FC, ReactNode } from 'react';
import Navbar from '@/components/Navbar'; // Adjust the import path based on your folder structure

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <style jsx>{`
        main {
          padding: 2rem;
        }
      `}</style>
    </>
  );
};

export default Layout;
