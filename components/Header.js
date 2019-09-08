import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default function Header() {
  return (
    <div>
      {links.map(({ key, href, label }) => (
        <Link key={key} href={href}>
          <a style={linkStyle}>{label}</a>
        </Link>
      ))}
    </div>
  );
}
