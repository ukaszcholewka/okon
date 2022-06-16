"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
exports.random = {
    int: (min, max) => randomBetween(min, max)
};
