import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { IProfile } from '../component/profile/IProfile';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''; // '' (dev) or '/<repo>' (prod)

const profile: IProfile.Payload = {
  disable: false,

  image: `${BASE_PATH}/asset/profile.jpeg`, // ✅ 배포시 '/resume-nextjs/asset/profile.jpeg' 로 요청됨

  name: {
    title: '김동범',
    small: 'Momentum Driver · Platform Engineer',
  },
  contact: [
    { title: 'rlavkgk123@naver.com', link: 'mailto:rlavkgk123@naver.com', icon: faEnvelope },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dongbeom-kim-719738308',
      icon: faLinkedin,
    },
  ],
  notice: { title: '', icon: faBell }, // notice undefined 방지
};

export default profile;
