import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: '/profile.jpeg', // public/profile.jpeg

  name: {
    title: '김동범',
    small: 'Momentum Driver · Platform Engineer',
  },
  contact: [
    {
      title: 'rlavkgk123@naver.com',
      link: 'mailto:rlavkgk123@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dongbeom-kim-719738308',
      icon: faLinkedin,
    },
  ],
  // ✅ notice는 객체로 제공 (내용이 없어도 안전)
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
