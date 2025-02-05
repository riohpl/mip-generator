import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
type Props = {
  toggleBox: (params: toggleCheckType) => void;
};
export type toggleCheckType = {
  isChecked: boolean;
  type: "header" | "carousel" | "content";
};

const CheckContainer = (props: Props) => {
  const toggleCheckBox = (params: toggleCheckType) => {
    props.toggleBox(params);
  };
  return (
    <div className="rounded-md border-2 border-solid border-inherit w-full flex p-5 justify-center gap-6 ">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="header"
          onCheckedChange={(e: boolean) =>
            toggleCheckBox({ isChecked: e, type: "header" })
          }
        />
        <Label htmlFor="terms">Header</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="carousel"
          onCheckedChange={(e: boolean) =>
            toggleCheckBox({ isChecked: e, type: "carousel" })
          }
        />
        <Label htmlFor="terms">Carousel</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="content"
          onCheckedChange={(e: boolean) =>
            toggleCheckBox({ isChecked: e, type: "content" })
          }
        />
        <Label htmlFor="terms">Content</Label>
      </div>
    </div>
  );
};

export default CheckContainer;
