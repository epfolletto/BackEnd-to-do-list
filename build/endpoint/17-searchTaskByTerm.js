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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _17_selectTaskByTerm_1 = __importDefault(require("../data/17-selectTaskByTerm"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.query;
        if (!query) {
            res.statusCode = 400;
            throw new Error('É necessário enviar o campo de busca!');
        }
        const tasks = yield (0, _17_selectTaskByTerm_1.default)(query);
        if (!tasks.length) {
            res.send([]);
            res.status(200).send({ tasks: [] });
        }
        else {
            res.status(200).send({ tasks: tasks });
        }
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send(error.message);
        }
        else {
            res.status(res.statusCode).send(error.message);
        }
    }
});
//# sourceMappingURL=17-searchTaskByTerm.js.map