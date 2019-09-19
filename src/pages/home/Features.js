import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import Typography from '../../components/Typography';

import AgileIcon from '../../icons/Agile';
import AmbientIcon from '../../icons/Ambient';
import CoachIcon from '../../icons/Coach';
import CSSIcon from '../../icons/CSS';
import CustomerCentricityIcon from '../../icons/CustomerCentricity';
import HTML5Icon from '../../icons/HTML5';
import JSIcon from '../../icons/JS';
import PrototypingIcon from '../../icons/Prototyping';
import ScrumIcon from '../../icons/Scrum';

const iconStyle = {
  fontSize: 90,
};

const sections = [
  {
    primary: 'User Experience Designer',
    secondary: 'Experience',
    content: [
      {
        title: 'Prototyping',
        description: 'Rapid Paper Prototypes, Mobile & Web Interactive Prototypes',
        icon: <PrototypingIcon style={iconStyle} />,
      },
      {
        title: 'User Centric Design',
        description: 'Facilitate Design Thinking Workshops & Google Design Sprints',
        icon: <CustomerCentricityIcon style={iconStyle} />,
      },
      {
        title: 'User Experience Designer',
        description: 'Ideation, User Research, User Flows & High Fidelity Mockups',
        icon: <AmbientIcon style={iconStyle} />,
      },
    ],
  },
  {
    primary: 'Front-end Developer',
    secondary: 'Experience',
    content: [
      {
        title: 'HTML5',
        description: 'Accessibility Through Semantic HTML',
        icon: <HTML5Icon style={iconStyle} />,
      },
      {
        title: 'CSS',
        description: 'LESS, SASS, Foundation, Bootstrap',
        icon: <CSSIcon style={iconStyle} />,
      },
      {
        title: 'Javascript',
        description: 'AngularJS, ReactJS, VueJS',
        icon: <JSIcon style={iconStyle} />,
      },
    ],
  },
  {
    primary: 'Scrum & Agile Coach',
    secondary: 'Experience',
    content: [
      {
        title: 'Scrum',
        description: 'Agile Scrum Master 2015',
        icon: <ScrumIcon style={iconStyle} />,
      },
      {
        title: 'Agile',
        description: 'Agile Product Owner 2017',
        icon: <AgileIcon style={iconStyle} />,
      },
      {
        title: 'Agile Coach',
        description: 'SAFe Evangelist 2016',
        icon: <CoachIcon style={iconStyle} />,
      },
    ],
  },
];

export default function Features() {
  return (
    <Fragment>
      {sections.map(section => {
        const { primary, secondary, content } = section;
        return (
          <Section key={primary}>
            <SectionTitle primary={primary} secondary={secondary} />
            <Grid container spacing={4}>
              {content.map(item => {
                const { icon, title, description } = item;
                return (
                  <Grid
                    item
                    sm={4}
                    xs={12}
                    key={title}
                    style={{ textAlign: 'center' }}
                  >
                    {icon}
                    <Typography variant="subheader">
                      <b>{title}</b>
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Section>
        );
      })}
    </Fragment>
  );
}
