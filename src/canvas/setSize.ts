export const setSize = (
  canvasElement: HTMLCanvasElement,
  width: number,
  height: number
) => {
  canvasElement.width = width;
  canvasElement.height = height;
  canvasElement.setAttribute("style", `width: ${width}; height: ${height};`);
};
