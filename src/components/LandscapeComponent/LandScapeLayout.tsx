import { templateMain } from "@/utils/template";
import { useEffect, useState } from "react";
import { generateCarousel, generateContent } from "./utils/generateUtils";

type LayoutType = {
  id: number;
  type: "column" | "row";
  content: any[];
  children?: ChildType[];
};

type ChildType = {
  id: number;
  content: any;
  rowOrder?: string;
  type?: "content" | "carousel";
  children?: GrandChildType[];
};

type GrandChildType = {
  id: number;
  content: any[];
};
const generateRow = (children, id) => {
  console.log("ROW", children);
  let idTemp = 0;
  const contentContainer: {}[] = [];
  const htmlContent = `
  <div class="grid grid-cols-${
    children.length
  } w-full max-w-[100%] justify-center items-center">
    ${children
      .map((first_child) => {
        return first_child.children
          ?.map((second_child, index) => {
            idTemp = index;
            return `
              <div>
                ${second_child.content
                  ?.map((third_child, index) => {
                    const contentClass = `content${second_child.id + index}`;
                    contentContainer.push({
                      contentName: contentClass,
                      content: third_child,
                    });
                    return `<img class="${contentClass}"/>`;
                  })
                  .join("")}
              </div>`;
          })
          .join("");
      })
      .join("")}
  </div>`;

  const htmlObj = {
    id: id + idTemp,
    htmlContent: htmlContent,
    contentContainer,
  };
  console.log(htmlObj, "ROW");

  return htmlObj;
};
const generateColumn = (children, id) => {
  console.log(children, "CHILDREEEn");
  console.log(children[0].type, "TYPEEEEEEE");
  const generator =
    children[0].type == "content"
      ? generateContent(children)
      : generateCarousel(children);
  console.log(generator, "WHATTYPE");
  const { htmlContent, idTemp, contentContainer } = generator;
  generateCarousel(children);
  const htmlObj = {
    id: id + idTemp,
    htmlContent: htmlContent,
    contentContainer,
  };
  console.log(htmlObj, "COLUMN");
  return htmlObj;
};

export function useLandscapeLayout() {
  const [layouts, setLayouts] = useState<LayoutType[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedHtml, setGeneratedHtml] = useState([]);
  useEffect(() => {
    console.log(generatedHtml, "GENENEN");
  }, [generatedHtml, layouts]);

  let downloadUrl = null; // Store the generated URL

  const handleSubmit = async () => {
    console.log(layouts);
    const newHtmlContents = [];

    layouts.forEach((layout) => {
      if (layout.type === "column") {
        const htmlObj = generateColumn(layout.children, layout.id);
        if (!generatedHtml?.some((item) => item.id === htmlObj.id)) {
          newHtmlContents.push(htmlObj);
        }
      }
      if (layout.type === "row") {
        const htmlObj = generateRow(layout.children, layout.id);
        if (!generatedHtml?.some((item) => item.id === htmlObj.id)) {
          newHtmlContents.push(htmlObj);
        }
      }
    });

    const html = templateMain(newHtmlContents);
    const blob = new Blob([html], { type: "text/html" });
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }
    downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toLocaleDateString("en-CA");
    a.href = downloadUrl;
    a.download = `test_colanot_mip_${date}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleContentTypeChange = (layoutId: number, value: string) => {
    console.log(layoutId, value);
    setLayouts((prevLayouts) => {
      console.log("Previous Layouts:", prevLayouts);
      const updatedLayouts = prevLayouts.map((layout) => {
        if (layout.id === layoutId) {
          return {
            ...layout,
            children: layout.children.map((child) => ({
              ...child,
              type: value,
            })),
          };
        }
        return layout;
      });
      console.log("Updated Layouts:", updatedLayouts);
      return updatedLayouts;
    });
  };
  const handleChildChange = (childId: number, newContent: File[]) => {
    const fileArray = Array.from(newContent);
    convertFilesToBase64(fileArray)
      .then((base64Files) => {
        console.log("Base64 Files:", base64Files);
        updateChildContent(childId, base64Files);
      })
      .catch((error) => {
        console.error("Error converting files:", error);
      });
  };

  const handleGrandChildren = (
    childId: number,
    grandChildId: number,
    newContent: File[]
  ) => {
    console.log(childId, grandChildId, newContent);
    const fileArray = Array.from(newContent);

    convertFilesToBase64(fileArray)
      .then((base64Files) => {
        console.log("Base64 Files:", base64Files);
        updateGrandChildContent(childId, grandChildId, base64Files);
      })
      .catch((error) => {
        console.error("Error converting files:", error);
      });
  };

  const addSection = (type: "column" | "row", content: any[]) => {
    const newSection: LayoutType = {
      id: Date.now(),
      type,
      content,
      children: [],
    };
    setLayouts((prev) => [...prev, newSection]);
  };

  const addChild = (
    parentId: number,
    content: any,
    rowOrder?: string,
    contentType?: string
  ) => {
    console.log(contentType, "SSJHSHHSHSh");
    setLayouts((prevLayouts) =>
      prevLayouts.map((layout) =>
        layout.id === parentId
          ? {
              ...layout,
              children: [
                ...(layout.children || []),
                {
                  id: Date.now(),
                  content,
                  ...(rowOrder && { rowOrder }),
                  ...(layout.type === "row" && { children: [] }),
                  type: contentType as "content" | "carousel",
                },
              ],
            }
          : layout
      )
    );
  };

  const addRowChild = (parentId: number, childId: number, content: any) => {
    setLayouts((prevLayouts) =>
      prevLayouts.map((layout) =>
        layout.children
          ? {
              ...layout,
              children: layout.children.map((child) =>
                child.id === childId
                  ? {
                      ...child,
                      children: [
                        ...(child.children || []),
                        {
                          id: Date.now(),
                          content,
                        },
                      ],
                    }
                  : child
              ),
            }
          : layout
      )
    );
  };

  const removeItem = (id: number) => {
    setLayouts((prevLayouts) => {
      const filteredLayouts = prevLayouts.filter((layout) => layout.id !== id);
      if (filteredLayouts.length === prevLayouts.length) {
        return prevLayouts.map((layout) =>
          layout.children
            ? {
                ...layout,
                children: layout.children.filter((child) => {
                  if (child.id === id) return false;
                  if (child.children) {
                    return {
                      ...child,
                      children: child.children.filter(
                        (grandChild) => grandChild.id !== id
                      ),
                    };
                  }
                  return true;
                }),
              }
            : layout
        );
      }
      return filteredLayouts;
    });
  };

  const convertFilesToBase64 = (fileArray: File[]) => {
    return Promise.all(
      fileArray.map(
        (file) =>
          new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          })
      )
    );
  };

  const updateChildContent = (
    childId: number,
    base64Files: (string | ArrayBuffer | null)[]
  ) => {
    setLayouts((prevLayouts) =>
      prevLayouts.map((layout) =>
        layout.children
          ? {
              ...layout,
              children: layout.children.map((child) =>
                child.id === childId
                  ? { ...child, content: base64Files }
                  : child.children
                  ? {
                      ...child,
                      children: child.children.map((grandChild) =>
                        grandChild.id === childId
                          ? { ...grandChild, content: base64Files }
                          : grandChild
                      ),
                    }
                  : child
              ),
            }
          : layout
      )
    );
  };

  const updateGrandChildContent = (
    childId: number,
    grandChildId: number,
    base64Files: (string | ArrayBuffer | null)[]
  ) => {
    setLayouts((prevLayouts) =>
      prevLayouts.map((layout) =>
        layout.children
          ? {
              ...layout,
              children: layout.children.map((child) =>
                child.id === childId
                  ? {
                      ...child,
                      children: child.children?.map((grandChild) =>
                        grandChild.id === grandChildId
                          ? { ...grandChild, content: base64Files }
                          : grandChild
                      ),
                    }
                  : child
              ),
            }
          : layout
      )
    );
  };

  return {
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
  };
}
