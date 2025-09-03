import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { IProfile } from '../component/profile/IProfile';

const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.NODE_ENV === 'production' ? '/resume-nextjs' : ''); // '' (dev) or '/resume-nextjs' (prod)

const profile: IProfile.Payload = {
  disable: false,

  image: `${BASE_PATH}/asset/profile.jpg`, // ✅ 배포시 '/resume-nextjs/asset/profile.jpg' 로 요청됨

  name: {
    title: '김동범',
    small: '| 조직의 변화를 이끄는 개발자',
  },
  contact: [
    { title: 'rlavkgk123@naver.com', link: 'mailto:rlavkgk123@naver.com', icon: faEnvelope },
    {
      title: '010-5172-9638',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dongbeom-kim-719738308',
      icon: faLinkedin,
    },
  ],
};

export default profile;
