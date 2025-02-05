"use client";

import CardContainer from "@/components/CardContainer";
import CheckContainer, { toggleCheckType } from "@/components/CheckContainer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { carouselNormal, htmlParams } from "@/utils/carousel-normal";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "react-use";
type content = {
  id: number;
  type: string;
  content: string;
};
export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isHeaderVisible, setIsHeaderVissible] = useLocalStorage<boolean>(
    "isHeaderVisible",
    false
  );
  const [isCarouselVisible, setIsCarouselVissible] = useLocalStorage<boolean>(
    "isCarouselVisible",
    false
  );
  const [isContentVisible, setIsContentVissible] = useLocalStorage<boolean>(
    "isContentVisible",
    false
  );

  const [headerContent, setHeaderContent] = useLocalStorage<content[]>(
    "headerContent",
    []
  );
  const [carouselContent, setCarouselContent] = useLocalStorage<content[]>(
    "carouselContent",
    []
  );
  const [content, setContent] = useLocalStorage<content[]>("content", []);
  const [cta, setCta] = useLocalStorage<string>("cta", "");

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
  const generateMip = async () => {
    setIsGenerating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const params: htmlParams = {
        header: headerContent,
        slide: carouselContent,
        content: content,
        cta: cta,
      };
      const html = carouselNormal(params);
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mip.html";
      a.click();
    } finally {
      setIsGenerating(false);
    }
  };
  const clearAllInputs = () => {
    setHeaderContent([]);
    setCarouselContent([]);
    setContent([]);
    setCta("");
    setIsHeaderVissible(false);
    setIsCarouselVissible(false);
    setIsContentVissible(false);
  };
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex justify-center p-10">
      <Card className="xl:w-2/5 xs:w-80">
        <CardHeader>
          <CardTitle className="text-4xl text-center">MIP Generator</CardTitle>
          <Button onClick={clearAllInputs} variant="secondary">
            Clear All
          </Button>
          <CheckContainer
            toggleBox={toggleCheckBox}
            isHeaderVisible={isHeaderVisible}
            isCarouselVisible={isCarouselVisible}
            isContentVisible={isContentVisible}
          />
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
                  value={cta}
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
