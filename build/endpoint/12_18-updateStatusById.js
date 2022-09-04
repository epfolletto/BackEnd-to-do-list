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
const _12_18_a_selectAllTasks_1 = __importDefault(require("../data/12_18.a-selectAllTasks"));
const _12_18_b_updateStatusTasks_1 = __importDefault(require("../data/12_18.b-updateStatusTasks"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task_ids, status } = req.body;
        if (!task_ids || !status) {
            res.statusCode = 400;
            throw new Error('Existe dados faltantes!');
        }
        const tasks = yield (0, _12_18_a_selectAllTasks_1.default)();
        if (!tasks.length) {
            res.statusCode = 400;
            throw new Error("Não foram encontradas tarefas cadastrados!");
        }
        for (let task of task_ids) {
            let igual = false;
            for (let task_ref of tasks) {
                if (Number(task) === Number(task_ref.TaskId))
                    igual = true;
            }
            if (!igual) {
                res.statusCode = 400;
                throw new Error(`A tarefa de ID ${task} não está cadastrada!`);
            }
        }
        for (let task of task_ids) {
            yield (0, _12_18_b_updateStatusTasks_1.default)(task, status);
        }
        res.status(200).send("Status atualizado(s) com sucesso!");
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
//# sourceMappingURL=12_18-updateStatusById.js.map