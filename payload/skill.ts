import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    { title: 'C' },
    { title: 'Java' },
    { title: 'Kotlin' },
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'Python' },
    { title: 'Golang' },
    { title: 'Rust' },
    { title: 'SQL' },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [
    {
      title: 'Kernel Programming',
    },
    {
      title: 'GNU Debugger',
    },
    {
      title: 'Memory Management',
    },
    {
      title: 'System Call Interface',
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
    },
    {
      title: 'KVM',
    },
    {
      title: 'Xen',
    },
    {
      title: 'VirtualBox',
    },
    {
      title: 'VMware ESXi',
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
    },
    {
      title: 'Puppet',
    },
    {
      title: 'Chef',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'CI/CD Pipelines',
    },
    {
      title: 'Infrastructure as Code',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
    },
    {
      title: 'OpenSSH',
    },
    {
      title: 'OpenSSL',
    },
    {
      title: 'NACLs',
    },
    {
      title: 'VPN Technologies',
    },
    {
      title: 'Intrusion Detection',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    misc,
  ],
};

export default skill;
