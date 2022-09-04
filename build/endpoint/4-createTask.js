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
const _4_insertTask_1 = __importDefault(require("../data/4-insertTask"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;
        if (!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 400;
            throw new Error('Existem dados faltantes!');
        }
        const [day, month, year] = limitDate.split('/');
        const limitDateFormatted = new Date(`${year}-${month}-${day}`);
        const datasql = `${year}-${month}-${day}`;
        console.log('data 1:', datasql);
        (0, _4_insertTask_1.default)(title, description, datasql, creatorUserId);
        res.status(200).send("Tarefa cadastrada com sucesso!");
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
//# sourceMappingURL=4-createTask.js.map