type content = {
  id: number;
  type: string;
  content: string;
};

export type htmlParams = {
  title: string;
  slide: content[];
  header: content[];
  content: content[];
  cta: string;
};

