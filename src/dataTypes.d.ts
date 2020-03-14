type SkillType = {
  label: string;
  items: string;
};

type ProjectType = {
  title: string;
  description: string;
  link: { title: string; url: string };
  serviceDetail?: string;
  projectInfo: { date: string; position: string; stacks: string };
  works?: string[];
  imgs: { url: string; text: string }[] | null;
  gifs?: { url: string; title: string; text: string }[];
  extraText?: string;
};

type ContactType = {
  label: string;
  value: string;
  url: string;
  isMail?: boolean;
};

export { SkillType, ProjectType, ContactType };
