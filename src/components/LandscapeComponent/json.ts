type designObject = {
  layout: "column" | "row";
  type: "carousel" | "header" | "content";
  child: {
    layoutType: "row" | "column";
    child: [];
  };
};

const rowType = {
  layout: "row",
  child: [],
};

const carouselType = {};

type LayoutType = {
  id: number;
  type: "column" | "row";
  content?: string;
  children?: {
    id: number;
    content?: string;
    rowOrder?: string;
    children?: {
      id: number;
      content: string;
    }[];
  }[];
};

const layouts: LayoutType[] = [
  {
    id: 1,
    type: "column",
    content: "Header Section",
    children: [
      {
        id: 11,
        content: "Header Image",
      },
      {
        id: 12,
        content: "Header Text",
      },
    ],
  },
  {
    id: 2,
    type: "row",
    children: [
      {
        id: 21,
        rowOrder: "1",
        children: [
          {
            id: 211,
            content: "Product 1",
          },
        ],
      },
      {
        id: 22,
        rowOrder: "2",
        children: [
          {
            id: 211,
            content: "Product 1",
          },
        ],
      },
    ],
  },
];
