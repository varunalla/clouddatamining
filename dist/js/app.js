"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("./utils/config");
const cors_1 = __importDefault(require("cors"));
const reportRouter_1 = __importDefault(require("./routes/reportRouter"));
const app = (0, express_1.default)();
/*
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'script-src-elem'"],
    },
}));*/
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/', express_1.default.static('client/build'));
app.use('/reports', reportRouter_1.default);
app.listen(config_1.config.server.port, () => {
    console.log("Server connected! :: " + config_1.config.server.port + "!");
});
