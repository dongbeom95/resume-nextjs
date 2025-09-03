import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    { title: 'Java' },
    { title: 'TypeScript' },
    { title: 'JavaScript' },
    { title: 'SQL' },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    { title: 'Spring Boot' },
    { title: 'Vue.js' },
    { title: 'Keycloak' },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'AWS ECS' },
    { title: 'AWS MSK' },
    { title: 'AWS API Gateway' },
    { title: 'MySQL' },
    { title: 'Redis' },
    { title: 'Debezium (CDC)' },
    { title: 'Rabbit MQ' },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    { title: 'Claude Code' },
    { title: 'Gemini CLI' },
    { title: 'n8n' },
    { title: 'IntelliJ IDEA' },
    { title: 'Jira' },
    { title: 'Confluence' },
  ],
};

const security: ISkill.Skill = {
  category: 'Security & Authentication',
  items: [
    { title: 'OAuth2' },
    { title: 'SAML' },
    { title: 'SSO' },
  ],
};

const methodology: ISkill.Skill = {
  category: 'Methodology',
  items: [
    { title: 'Agile' },
    { title: 'Scrum' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworks, infrastructure, tools, security, methodology],
};

export default skill;
