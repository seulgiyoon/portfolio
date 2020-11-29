type SkillType = {
  label: string;
  items: string;
};

type ProjectType = {
  title: string;
  description: string;
  link: { title: string; url: string };
  serviceDetail?: string;
  projectInfo: { date: string; position: string; stacks?: string };
  works: { simpleStyle: boolean; workList: string[] };
  imgs?: { url: string; text: string }[] | null;
  videos?: { url: string; coverImg: string; title: string; text: string }[];
};

type ContactType = {
  label: string;
  value: string;
  url: string;
  isMail?: boolean;
};

export { SkillType, ProjectType, ContactType };
