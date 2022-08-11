"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const counterSlice_1 = __importDefault(require("src/features/counter/counterSlice"));
function makeStore() {
    return (0, toolkit_1.configureStore)({
        reducer: { counter: counterSlice_1.default },
    });
}
exports.makeStore = makeStore;
const store = makeStore();
exports.default = store;
//# sourceMappingURL=store.js.map