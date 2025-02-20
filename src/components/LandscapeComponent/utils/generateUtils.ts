export const generateContent = (children) => {
  console.log(children, "CHILDRENCONTENT");
  let idTemp = 0;
  const contentContainer: {}[] = [];
  const htmlContent = `
    ${children
      .map((item, index: number) => {
        idTemp = index;
        return `<div class="flex flex-col w-full max-w-[100%] justify-center items-center">
        ${item?.content
          ?.map((content, index) => {
            contentContainer.push({
              contentName: `content${item.id + index}`,
              content: content,
            });
            return `<img class="content${
              item.id + index
            } w-full" alt="header">`;
          })
          .join("")}
      </div>`;
      })
      .join("")} 
  `;
  return { htmlContent, idTemp, contentContainer };
};

export const generateCarousel = (children) => {
  console.log(children, "CHILDRENCAROUSEL");
  let idTemp = 0;
  const contentContainer: {}[] = [];
  const htmlContent = `
     ${children
       .map((item, index: number) => {
         idTemp = index;
         return `<div class="relative w-full overflow-hidden mx-auto">
          <div id="slider" class="flex w-full transition-transform duration-500 ease-out mx-auto owl-carousel">
        ${item?.content
          ?.map((content, index) => {
            contentContainer.push({
              contentName: `slide${item.id + index}`,
              content: content,
            });
            return `<img class="slide${item.id + index} w-full" alt="header">`;
          })
          .join("")}
          </div>
          <div class="custom-dots"></div>    
      </div>`;
       })
       .join("")} 
  `;
  return { htmlContent, idTemp, contentContainer };
};
