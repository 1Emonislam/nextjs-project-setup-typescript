"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = exports.useInterval = exports.useForm = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const useForm = (defaultValues) => (handler) => (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    event.persist();
    const form = event.target;
    const elements = Array.from(form.elements);
    const data = elements
        .filter((element) => element.hasAttribute('name'))
        .reduce((object, element) => (Object.assign(Object.assign({}, object), { [`${element.getAttribute('name')}`]: element.value })), defaultValues);
    yield handler(data);
    form.reset();
});
exports.useForm = useForm;
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback, delay) => {
    const savedCallback = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        savedCallback.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        const handler = (...args) => { var _a; return (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback, ...args); };
        if (delay !== null) {
            const id = setInterval(handler, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
exports.useInterval = useInterval;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;
//# sourceMappingURL=hooks.js.map