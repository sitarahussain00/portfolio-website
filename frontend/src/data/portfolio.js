import socioonImg from '../assets/images/portfolio/project-socioon.jpg'
import housecallsImg from '../assets/images/portfolio/project-housecalls.jpg'
import broadvoiceImg from '../assets/images/portfolio/project-broadvoice.jpg'
import webinargeekImg from '../assets/images/portfolio/project-webinargeek.jpg'
import najmaImg from '../assets/images/portfolio/project-najma.jpg'
import khmcImg from '../assets/images/portfolio/project-khmc.jpg'

export const portfolioSections = [
  {
    id: 'featured-projects',
    title: 'Featured Projects',
    items: [
      {
        title: 'Socioon — Social Media Platform',
        description:
          'Led Agile delivery and business analysis for a scalable social platform — profiles, feeds, communities, messaging, and moderation — that grew to 100,000+ users while maintaining performance and engagement.',
        image: socioonImg,
        tag: 'Agile / BA',
      },
      {
        title: 'HouseCalls — Digital Healthcare Platform',
        description:
          'Drove Agile delivery for an appointment and consultation platform featuring scheduling, prescriptions, medical history access, and secure doctor–patient communication that improved patient access and reduced admin workload.',
        image: housecallsImg,
        tag: 'Healthcare',
      },
      {
        title: 'Broadvoice — Telecom & Call Center Platform',
        description:
          'Defined requirements and coordinated UAT for call routing, agent performance monitoring, analytics dashboards, and workflow automation that streamlined call center operations and improved visibility.',
        image: broadvoiceImg,
        tag: 'Telecom',
      },
      {
        title: 'WebinarGeek — Webinar Platform QA',
        description:
          'Executed end-to-end functional, UI/UX, regression, and cross-browser testing across registration, live streaming, engagement tools, email automation, and CRM integrations for a global webinar platform.',
        image: webinargeekImg,
        tag: 'QA / UAT',
      },
      {
        title: 'Najma Designs & Co. — Shopify Fashion Store',
        description:
          'Validated the full e-commerce journey for a US Shopify fashion retailer — catalog, cart, checkout, payments, and mobile experience — reducing checkout issues and improving release confidence.',
        image: najmaImg,
        tag: 'E-Commerce',
      },
      {
        title: 'KHMC — Electronic Patient Registration',
        description:
          'Digitized paper-based patient registration and records through process mapping and future-state workflows — delivering electronic registration, digital records, automated tracking, and analytics that cut paperwork and improved data accuracy.',
        image: khmcImg,
        tag: 'Healthcare Digitization',
      },
    ],
  },
]
