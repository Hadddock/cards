import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        &copy; {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default Layout;
