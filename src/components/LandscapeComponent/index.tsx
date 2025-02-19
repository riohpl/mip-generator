import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLandscapeLayout } from "./LandScapeLayout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

const LandscapeComponent = (props: Props) => {
  const {
    layouts,
    addSection,
    addChild,
    addRowChild,
    removeItem,
    handleSubmit,
    isSubmitting,
    handleChildChange,
    handleGrandChildren,
    handleContentTypeChange,
  } = useLandscapeLayout();
  const [contentType, setContentType] = React.useState<string>("content");
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        {" "}
        <Button
          onClick={() => addSection("column", "New Column Section")}
          variant={"outline"}
        >
          Add Column Section
        </Button>
        <Button onClick={() => addSection("row", "New Row Section")}>
          Add Row Section
        </Button>
      </div>

      {layouts.map((layout) => (
        <div key={layout.id} className="flex flex-col gap-4">
          <h2>{layout.content}</h2>
          <div className="flex gap-2">
            <Button
              onClick={() =>
                addChild(
                  layout.id,
                  "",
                  layout.type === "row" ? "1" : undefined,
                  contentType
                )
              }
            >
              Add Child
            </Button>{" "}
            <Button
              onClick={() => removeItem(layout.id)}
              variant={"destructive"}
            >
              Remove
            </Button>
            {layout.type === "column" && (
              <Select
                onValueChange={(value) =>
                  handleContentTypeChange(layout.id, value)
                }
                defaultValue="content"
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type of Content" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Type of Content</SelectLabel>
                    <SelectItem value="content">Content</SelectItem>
                    <SelectItem value="carousel">Carousel</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>

          {layout.children?.map((child) => (
            <div key={child.id} className="flex flex-col gap-2">
              <div>
                {" "}
                <div className="flex gap-2 ml-5">
                  {layout.type === "column" && (
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) =>
                        handleChildChange(child.id, e.target.files)
                      }
                    />
                  )}
                  <Button onClick={() => removeItem(child.id)}>Remove</Button>
                  {layout.type === "row" && (
                    <Button
                      onClick={() => addRowChild(layout.id, child.id, "")}
                    >
                      Add Row Child
                    </Button>
                  )}
                  {layout.type === "row" && (
                    <Select onValueChange={(value) => console.log(value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type of Content" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Type of Content</SelectLabel>
                          <SelectItem value="content">Content</SelectItem>
                          <SelectItem value="carousel">Carousel</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>

              {child.children?.map((grandChild) => (
                <div key={grandChild.id} className="flex gap-2 ml-10">
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                      handleGrandChildren(
                        child.id,
                        grandChild.id,
                        e.target.files
                      )
                    }
                  />
                  <Button onClick={() => removeItem(grandChild.id)}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className="mt-8 flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || layouts.length === 0}
          className="bg-primary text-white px-6 py-2 rounded-md"
        >
          {isSubmitting ? "Submitting..." : "Submit Layout"}
        </Button>
      </div>
    </div>
  );
};

export default LandscapeComponent;
