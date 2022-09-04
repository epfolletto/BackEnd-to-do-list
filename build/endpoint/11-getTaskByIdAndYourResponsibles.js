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
const _11_a_selectTaskAndYourResponsibles_1 = __importDefault(require("../data/11.a-selectTaskAndYourResponsibles"));
const _11_b_selectResponsiblesById_1 = __importDefault(require("../data/11.b-selectResponsiblesById"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield (0, _11_a_selectTaskAndYourResponsibles_1.default)(id);
        const responsibles = yield (0, _11_b_selectResponsiblesById_1.default)(id);
        if (!task.length) {
            res.statusCode = 400;
            throw new Error('Não foi encontrada tarefa com este ID!');
        }
        task[0].limitDate = `${task[0].limitDate.getDate()}/${task[0].limitDate.getMonth() + 1}/${task[0].limitDate.getFullYear()}`;
        task[0].responsibleUsers = responsibles;
        res.status(200).send(task[0]);
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
//# sourceMappingURL=11-getTaskByIdAndYourResponsibles.js.map