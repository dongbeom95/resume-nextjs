import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: 'asset/1751332566840.jpeg',
  name: {
    title: '김동범',
    small: '동범',
  },
  contact: [
    {
      title: 'rlavkgk123@naver.com',
      link: 'rlavkgk123@naver.com',
      icon: faEnvelope,
    },
    {
      link: 'https://www.linkedin.com/in/dongbeom-kim-719738308',
      icon: faLinkedin,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
