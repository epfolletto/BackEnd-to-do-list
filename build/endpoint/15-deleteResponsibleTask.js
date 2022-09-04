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
const _0_userExist_1 = __importDefault(require("../data/0-userExist"));
const _15_a_userIsResponsible_1 = __importDefault(require("../data/15.a-userIsResponsible"));
const _15_b_deleteResponsibleTask_1 = __importDefault(require("../data/15.b-deleteResponsibleTask"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.taskId;
        const responsibleUserId = req.params.responsibleUserId;
        const task = yield (0, _0_taskExist_1.default)(taskId);
        if (!task.length) {
            res.status(200).send("Não foi encontrada tarefa com esse ID!");
        }
        const user = yield (0, _0_userExist_1.default)(responsibleUserId);
        if (!user.length) {
            res.status(200).send("Não foi encontrado usuário com esse ID!");
        }
        const userAndResponsible = yield (0, _15_a_userIsResponsible_1.default)(taskId, responsibleUserId);
        if (!userAndResponsible.length) {
            res.status(200).send("Este usuário não é responsável por esta tarefa!");
        }
        yield (0, _15_b_deleteResponsibleTask_1.default)(taskId, responsibleUserId);
        res.status(200).send("Responsabilidade deletada com sucesso!");
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
//# sourceMappingURL=15-deleteResponsibleTask.js.map