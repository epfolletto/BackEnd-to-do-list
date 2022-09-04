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
const _0_taskExist_1 = __importDefault(require("../data/0-taskExist"));
const _9_16_responsibleTask_1 = __importDefault(require("../data/9_16-responsibleTask"));
const _6_selectAllUsers_1 = __importDefault(require("../data/6-selectAllUsers"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task_id, responsible_user_id } = req.body;
        if (!task_id || !responsible_user_id) {
            res.statusCode = 400;
            throw new Error('Existem dados faltantes!');
        }
        const task = yield (0, _0_taskExist_1.default)(task_id);
        if (!task.length) {
            res.statusCode = 400;
            throw new Error("Não foi encontrada tarefa com esse ID!");
        }
        const users = yield (0, _6_selectAllUsers_1.default)();
        if (!users.length) {
            res.statusCode = 400;
            throw new Error("Não foram encontrados usuários cadastrados!");
        }
        for (let user_id of responsible_user_id) {
            let igual = false;
            for (let user_ref of users) {
                if (Number(user_id) === Number(user_ref.id))
                    igual = true;
            }
            if (!igual) {
                res.statusCode = 400;
                throw new Error(`O ID ${user_id} não está cadastrado!`);
            }
        }
        for (let user of responsible_user_id) {
            yield (0, _9_16_responsibleTask_1.default)(task_id, user);
        }
        res.status(200).send("Responsabilidade atribuída(as) com sucesso!");
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
//# sourceMappingURL=9_16-responsibleTask.js.map