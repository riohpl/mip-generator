"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  isVissible?: boolean;
  setContent: (content: content[]) => void;
  content: content[];
};


type content = {
  id: number;
  type: string;
  content: string;
};
const CardContainer = (props: Props) => {
  const { setContent, content, title } = props;
  const addContent = () => {
    setContent([
      ...content,
      { id: content.length + 1, type: title, content: "" },
    ]);
  };

  const removeContent = (id: number) => {
    setContent(content.filter((item) => item.id !== id));
  };
  const handleContentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    console.log(e.target.files?.[0]);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setContent(
          content.map((item) =>
            item.id === id ? { ...item, content: base64 } : item
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };
  const contentList = content.map((item) => {
    return (
      <div key={item.id} className="flex gap-3">
        <Input
          type="file"
          placeholder="Enter your prompt"
          accept="image/*"
          onChange={(e) => handleContentChange(e, item.id)}
        />
        <Button onClick={() => removeContent(item.id)}>Remove</Button>
      </div>
    );
  });

  return props.isVissible ? (
    <div className="mt-7 flex flex-col gap-3">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <Button onClick={addContent}>Add {props.title}</Button>
      {contentList}
    </div>
  ) : null;
};

export default CardContainer;
