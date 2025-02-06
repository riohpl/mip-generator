const slides = [
  {
    id: 1,
    content: "Test",
  },
];

export const testHTML = () => {
  return `!DOCTYPE html>
<html>
<head>
    <title>Test</title>
    <style>
        body {
            background-color: #f0f0f0;
        }
        ${slides.map((slide) => `.slide${slide.id}{ content:url('${slide.content}')}`).join("")}
    </style>
</head>
<body>
    <h1>Test</h1>
    ${slides.map((slide) => `<div>${slide.content}</div>`).join("")}
</body>
</html>`;
};
