import React from "react";
import { DialogDescription } from "../ui/dialog";
import { DialogTitle } from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { DialogContent } from "../ui/dialog";
import { DialogTrigger } from "../ui/dialog";
import CardContainer from "../CardContainer";
import { Dialog } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { carouselContent } from "@/utils/htmlParamTypes";
type content = {
  id: number;
  type: string;
  content: string;
};
type Props = {
  isHeaderVisible: boolean;
  isCarouselVisible: boolean;
  isContentVisible: boolean;
  headerContent: content[];
  carouselContent: content[];
  content: content[];
  handleCtaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setHeaderContent: (content: content[]) => void;
  setCarouselContent: (content: content[]) => void;
  setContent: (content: content[]) => void;
};

const index = (props: Props) => {
  const {
    isHeaderVisible,
    isCarouselVisible,
    isContentVisible,
    headerContent,
    carouselContent,
    content,
    handleCtaChange,
    setHeaderContent,
    setCarouselContent,
    setContent,
  } = props;
  return (
    <>
      <CardContainer
        title="Header"
        isVissible={isHeaderVisible}
        content={headerContent}
        setContent={setHeaderContent}
      />
      <CardContainer
        title="Carousel"
        isVissible={isCarouselVisible}
        content={carouselContent}
        setContent={setCarouselContent}
      />
      <CardContainer
        title="Content"
        isVissible={isContentVisible}
        content={content}
        setContent={setContent}
      />
      <div className="mt-7 flex flex-col gap-3">
        <h3 className="text-xl font-bold">CTA</h3>
        <div className="flex gap-3">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleCtaChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default index;
