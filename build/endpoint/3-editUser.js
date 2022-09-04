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
const _0_userExist_1 = __importDefault(require("../data/0-userExist"));
const _3_updateUser_1 = __importDefault(require("../data/3-updateUser"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield (0, _0_userExist_1.default)(id);
        if (!user.length) {
            res.status(200).send("Não foi encontrado usuário com esse ID!");
        }
        const name = req.body.name || user[0].name;
        const nickname = req.body.nickname || user[0].nickname;
        const email = req.body.email || user[0].email;
        (0, _3_updateUser_1.default)(Number(id), name, nickname, email);
        res.status(200).send("Dados atualizados com sucesso!");
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
//# sourceMappingURL=3-editUser.js.map