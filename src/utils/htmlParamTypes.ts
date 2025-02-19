type content = {
  id: number;
  type: string;
  content: string;
};
export type carouselContent = {
  id: number;
  layout: string;
  content: [];
};

export type htmlParams = {
  title: string;
  slide: carouselContent[];
  header: content[];
  content: content[];
  cta: string;
};


export type templateParams ={
  
}