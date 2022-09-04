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
const _1_insertUser_1 = __importDefault(require("../data/1-insertUser"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, nickname, email } = req.body;
        if (!name || !nickname || !email) {
            res.statusCode = 400;
            throw new Error('Existem dados faltantes!');
        }
        (0, _1_insertUser_1.default)(name, nickname, email);
        res.status(200).send("Usuário cadastrado com sucesso!");
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
//# sourceMappingURL=1-createUser.js.map