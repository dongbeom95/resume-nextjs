import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/앱 서비스 백엔드 개발과 스타트업 개발자로서의 다양한 경험이 있습니다. Node.js, Java, Kotlin, MySQL, Redis, AWS 등을 사용하여 프로덕션 서비스를 설계, 개발, 운영한 경험으로 확장성과 유지 보수성이 높은 백엔드 아키텍처와 패턴을 위해 언제나 고민하고 있습니다.',
    'In the world of zeros and ones, my expertise has been instrumental in pioneering advancements in Linux system engineering. My flippers have crafted meticulous kernel enhancements, each aimed at streamlining performance and bolstering security across distributed networks. I am known in the community for my ability to dive deep into complex codebases and emerge with pearls of innovation that drive the collective progress of Linux environments. Advocacy is also a part of my plumage – spreading the word about the virtues of open-source and encouraging the adoption of Linux, from personal desktops to corporate data centers. As a mentor, I have nurtured the growth of young hatchlings into seasoned professionals, contributing to the diversity and vitality of our ecosystem.',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
