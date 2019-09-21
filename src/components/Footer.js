import React from 'react';
import Link from 'next/link';
import Mailto from 'react-protected-mailto';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { social } from '../../config';
import Linkedin from '../icons/Linkedin';
import Behance from '../icons/Behance';
import Dribbble from '../icons/Dribbble';
import Pinterest from '../icons/Pinterest';
import Typography from '../components/Typography';
import { siteLinks, contactInfo } from '../../config';

const socialAccounts = [
  { icon: <Linkedin />, url: social.linkedin },
  { icon: <Behance />, url: social.behance },
  { icon: <Dribbble />, url: social.dribbble },
  { icon: <Pinterest />, url: social.pinterest },
];

const styles = theme => ({
  root: {
    marginTop: 56,
    marginBottom: 16,
    // backgroundImage: 'url(/static/body_bg.png)',
    // backgroundSize: 'cover',
    // backgroundPosition: 'bottom',
  },
  socialBar: {
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    background: 'linear-gradient(rgba(4, 2, 33, 0.47) 0%, #57556a 100%)',
  },
  socialBarLink: {
    display: 'inline-flex',
    padding: 12,
    borderRadius: '50%',
    color: theme.palette.common.white,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: fade(
        theme.palette.action.active,
        theme.palette.action.hoverOpacity
      ),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  footerNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  footerNavLink: {
    paddingLeft: 8,
    paddingRight: 8,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
});

const links = siteLinks.map(link => {
  link.key = `footer-${link.href}-${link.label}`;
  return link;
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <div className={classes.footerNav}>
        {links.map(({ key, href, label }) => (
          <Link key={key} href={href}>
            <a className={classes.footerNavLink}>{label}</a>
          </Link>
        ))}
      </div>
      <Typography variant="caption" color="primary" align="center" gutterBottom>
        CH / <Mailto tel={contactInfo.tel} /> /{' '}
        <Mailto
          email={contactInfo.email}
          headers={
            ({ subject: 'let’s talk about you UX needs' },
            { cc: 'daheib@gmail.com' })
          }
        />
      </Typography>
      <div className={classes.socialBar}>
        {socialAccounts.map(({ url, icon }) => (
          <Link key={url} href={url} prefetch={false}>
            <a target="_blank" ref="nofollow" className={classes.socialBarLink}>
              {icon}
            </a>
          </Link>
        ))}
      </div>
      <Typography variant="caption" color="primary" align="center">
        Copyright &copy; {new Date().getFullYear()} Pavlos Vos | All rights
        reserved
      </Typography>
    </footer>
  );
}

export default withStyles(styles, { name: 'Footer' })(Footer);
