import siteMetadata from './siteMetadata'

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  source?: string
  WIP?: boolean
}

const projectsData: Project[] = [
  {
    title: 'Efficient Financial Entity Extraction',
    description: `End-to-end NER pipeline on FiNER-ORD`,
    imgSrc: '/static/images/projects/efer.png',
    source: 'https://github.com/dayan-battulga/Efficient-Financial-Entity-Extraction',
  },
  {
    title: 'Top Hat Audio Alert',
    description: `Published chrome extension to get you those participation points :D`,
    imgSrc: '/static/images/projects/tophataudioalert.png',
    source: 'https://github.com/dayan-battulga/top-hat-audio-alert',
    href: 'https://chromewebstore.google.com/detail/top-hat-audio-alert/dmeionheeaknhkmkdnfijpnoojndgomc?authuser=2&hl=en',
  },
  {
    title: 'Signisa',
    description: `Sign Language Teaching Application`,
    imgSrc: '/static/images/projects/signisa.png',
    WIP: true,
  },
  {
    title: 'Personal Website',
    description: `Hope you like it!`,
    imgSrc: '/static/images/projects/p_website.png',
    href: '#',
    source: 'https://github.com/dayan-battulga/personal-website',
  },
  {
    title: 'DyrtyVision',
    description: `Detecting and tracking waste in real-time`,
    imgSrc: '/static/images/projects/dyrtyvision.png',
    source: 'https://github.com/dayan-battulga/wastevision',
  },
  {
    title: 'URECA Anomaly Detection',
    description: `Validating Carbon Credits produced by Households`,
    imgSrc: '/static/images/projects/ureca.png',
    source: 'https://github.com/dayan-battulga/ureca-coal-burn-detect/',
  },
  {
    title: 'Datamatch@UW',
    description: `Maybe you'll land a date/friend?`,
    imgSrc: '/static/images/projects/datamatch.png',
    href: 'https://datamatch.me/',
    source: 'https://github.com/dayan-battulga/bootcamp',
  },
  {
    title: 'MonkeyType On-Screen Keyboard',
    description: `Open Source Contribution`,
    imgSrc: '/static/images/projects/monkeytype.png',
    href: 'https://monkeytype.com/',
    source: 'https://github.com/dayan-battulga/monkeytype_multilingual',
  },
  {
    title: 'Protein Peekaboo',
    description: `Madhacks 2023`,
    imgSrc: '/static/images/projects/protein-peekaboo.png',
    source: 'https://github.com/dayan-battulga/protein-peekaboo/',
  },
]

export default projectsData
