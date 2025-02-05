"use client";

import CardContainer from "@/components/CardContainer";
import CheckContainer, { toggleCheckType } from "@/components/CheckContainer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { carouselNormal, htmlParams } from "@/utils/carousel-normal";
import { testHTML } from "@/utils/test";
import { Input } from "@/components/ui/input";
type content = {
  id: number;
  type: string;
  content: string;
};
export default function Home() {
  const [isHeaderVisible, setIsHeaderVissible] = useState<boolean>(false);
  const [isCarouselVisible, setIsCarouselVissible] = useState<boolean>(false);
  const [isContentVisible, setIsContentVissible] = useState<boolean>(false);

  const [headerContent, setHeaderContent] = useState<content[]>([]);
  const [carouselContent, setCarouselContent] = useState<content[]>([]);
  const [content, setContent] = useState<content[]>([]);
  const [cta, setCta] = useState<string>("");

  const toggleCheckBox = (checkType: toggleCheckType) => {
    if (checkType.type === "header") {
      setIsHeaderVissible(checkType.isChecked);
    } else if (checkType.type === "carousel") {
      setIsCarouselVissible(checkType.isChecked);
    } else if (checkType.type === "content") {
      setIsContentVissible(checkType.isChecked);
    }
  };
  const handleCtaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCta(e.target.value);
  };
  const generateMip = () => {
    console.log(content, "CONTENTSS");
    const params: htmlParams = {
      header: headerContent,
      slide: carouselContent,
      content: content,
      cta: cta,
    };
    console.log(params, "PARAMS");
    const html = carouselNormal(params);
    console.log(html, "HTML");

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mip.html";
    a.click();
  };
  return (
    <div className="flex justify-center p-10">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-4xl text-center">MIP Generator</CardTitle>
          <CheckContainer toggleBox={toggleCheckBox} />
          <CardContent className="flex flex-col gap-2">
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
                  type="text"
                  placeholder="Enter your prompt"
                  onChange={(e) => handleCtaChange(e)}
                />
              </div>
            </div>
          </CardContent>
          <Button onClick={generateMip}>Generate</Button>
        </CardHeader>
      </Card>
    </div>
  );
}
