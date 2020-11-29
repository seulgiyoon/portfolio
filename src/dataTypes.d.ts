type SkillType = {
  label: string;
  items: string;
};

type ListType = {
  title: string;
  percent: number;
  details: string[];
  stacks: string;
};

type WorkListType = {
  simpleStyle: boolean;
  workList: string[] | ListType[];
};

type ProjectType = {
  title: string;
  description: string;
  link: { title: string; url: string };
  serviceDetail?: string;
  projectInfo: { date: string; position: string; stacks?: string };
  works: WorkList;
  imgs?: { url: string; text: string }[] | null;
  videos?: { url: string; coverImg: string; title: string; text: string }[];
};

type ContactType = {
  label: string;
  value: string;
  url: string;
  isMail?: boolean;
};

export { SkillType, ListType, WorkListType, ProjectType, ContactType };
