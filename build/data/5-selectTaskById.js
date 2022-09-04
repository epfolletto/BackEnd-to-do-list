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
const connection_1 = __importDefault(require("./../connection"));
exports.default = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield (0, connection_1.default)("Tasks")
        .select('*')
        .where({
        taskId: id,
    });
    if (task) {
        const user = yield (0, connection_1.default)("Users")
            .select('*')
            .where({
            id: task[0].creatorUserId,
        });
        task[0].creatorUserNickname = user[0].name;
    }
    return task;
});
//# sourceMappingURL=5-selectTaskById.js.map