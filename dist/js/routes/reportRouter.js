"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reportRouter = express_1.default.Router();
reportRouter.get('/', (req, res) => {
    const data = [
        ["States", "Popularity"],
        ["California", 200],
        ["Texas", 300],
        ["New York", 400],
        ["Arizona", 500],
        ["Georgia", 600],
        ["Washington", 700],
    ];
    return res.send(data);
});
exports.default = reportRouter;
