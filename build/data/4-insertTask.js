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
exports.default = (title, description, limitDate, creatorUserId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('data 2:', limitDate);
    yield (0, connection_1.default)("Tasks")
        .insert({
        taskId: new Date().getTime(),
        title,
        description,
        limitDate,
        status: "to_do",
        creatorUserId
    });
});
//# sourceMappingURL=4-insertTask.js.map