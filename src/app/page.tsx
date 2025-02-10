"use client";

import CardContainer from "@/components/CardContainer";
import CheckContainer, { toggleCheckType } from "@/components/CheckContainer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { htmlParams } from "@/utils/carousel-normal";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "react-use";
import { carouselMain } from "@/utils/carousel-main";

type content = {
  id: number;
  type: string;
  content: string;
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);
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
  ) as unknown as [content[], (value: content[]) => void, () => void];

  const [carouselContent, setCarouselContent] = useLocalStorage<content[]>(
    "carouselContent",
    []
  ) as unknown as [content[], (value: content[]) => void, () => void];

  const [content, setContent] = useLocalStorage<content[]>(
    "content",
    []
  ) as unknown as [content[], (value: content[]) => void, () => void];

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
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setCta(base64);
      };
      reader.readAsDataURL(file);
    }
  };
  const generateMip = async () => {
    const params: htmlParams = {
      header: headerContent,
      slide: carouselContent,
      content: content,
      cta: cta ?? "",
    };

    console.log(params, "PARAMS");
    const html = carouselMain(params);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mip.html";
    a.click();
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
      <Card className="xl:w-2/5 md:w-3/4   xs:w-80 ">
        <CardHeader>
          <CardTitle className="text-4xl text-center">MIP Generator</CardTitle>
          <Button onClick={clearAllInputs} variant="secondary">
            Clear All
          </Button>
          <CheckContainer
            toggleBox={toggleCheckBox}
            isHeaderVisible={isHeaderVisible ?? false}
            isCarouselVisible={isCarouselVisible ?? false}
            isContentVisible={isContentVisible ?? false}
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
                  type="file"
                  accept="image/*"
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
