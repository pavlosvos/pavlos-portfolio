import React from 'react';
import Layout from '../src/layout/Page';
import Link from '../src/components/Link';
import SectionTitle from '../src/components/SectionTitle';

const PortfolioLink = props => (
  <li>
    <Link href="/portfolio/[slug]" as={`/portfolio/${props.slug}`}>
      <a>{props.slug}</a>
    </Link>
  </li>
);

const portfolioPage = [
  'car-sharing-startup',
  'conversion-driven-ux-improvements',
  'e-banking-mobile-app',
  'food-finder-web-application',
  'redesign-homepage',
  'ux-improvement-blind-folded-user-testing',
];

export default function Portfolio() {
  return (
    <Layout>
      <SectionTitle primary="Allowed to show online" secondary="Portfolio" />
      <ul>
        {portfolioPage.map(item => (
          <PortfolioLink slug={item} key={item} />
        ))}
      </ul>
    </Layout>
  );
}
