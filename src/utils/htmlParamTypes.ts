type content = {
  id: number;
  type: string;
  content: string;
};

export type htmlParams = {
  slide: content[];
  header: content[];
  content: content[];
  cta: string;
};
