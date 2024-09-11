// components/Navbar.tsx
import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/services">
            Services
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          background-color: #333;
          padding: 1rem;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        .navbar li {
          margin-right: 1rem;
        }
        .navbar a {
          color: white;
          text-decoration: none;
        }
        .navbar a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
