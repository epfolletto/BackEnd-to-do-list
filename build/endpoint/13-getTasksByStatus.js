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
const _13_selectTasksByStatus_1 = __importDefault(require("../data/13-selectTasksByStatus"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status = req.query.status;
        if (!status) {
            res.statusCode = 400;
            throw new Error('Existe dados faltantes!');
        }
        const tasks = yield (0, _13_selectTasksByStatus_1.default)(status);
        tasks.map((task) => {
            return task.limitDate = `${task.limitDate.getDate()}/${task.limitDate.getMonth() + 1}/${task.limitDate.getFullYear()}`;
        });
        res.status(200).send({ tasks: tasks });
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
//# sourceMappingURL=13-getTasksByStatus.js.map