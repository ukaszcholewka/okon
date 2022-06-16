"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSize = void 0;
const setSize = (canvasElement, width, height) => {
    canvasElement.width = width;
    canvasElement.height = height;
    canvasElement.setAttribute("style", `width: ${width}; height: ${height};`);
};
exports.setSize = setSize;
