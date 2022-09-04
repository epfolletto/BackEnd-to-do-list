"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const _1_createUser_1 = __importDefault(require("./endpoint/1-createUser"));
const _2_getUserById_1 = __importDefault(require("./endpoint/2-getUserById"));
const _3_editUser_1 = __importDefault(require("./endpoint/3-editUser"));
const _4_createTask_1 = __importDefault(require("./endpoint/4-createTask"));
const _5_getTaskById_1 = __importDefault(require("./endpoint/5-getTaskById"));
const _6_getAllUsers_1 = __importDefault(require("./endpoint/6-getAllUsers"));
const _7_getAllTasksByUser_1 = __importDefault(require("./endpoint/7-getAllTasksByUser"));
const _8_searchUser_1 = __importDefault(require("./endpoint/8-searchUser"));
const _9_16_responsibleTask_1 = __importDefault(require("./endpoint/9_16-responsibleTask"));
const _10_getUsersResponsibleTask_1 = __importDefault(require("./endpoint/10-getUsersResponsibleTask"));
const _11_getTaskByIdAndYourResponsibles_1 = __importDefault(require("./endpoint/11-getTaskByIdAndYourResponsibles"));
const _12_18_updateStatusById_1 = __importDefault(require("./endpoint/12_18-updateStatusById"));
const _13_getTasksByStatus_1 = __importDefault(require("./endpoint/13-getTasksByStatus"));
const _14_getTasksDelayed_1 = __importDefault(require("./endpoint/14-getTasksDelayed"));
const _15_deleteResponsibleTask_1 = __importDefault(require("./endpoint/15-deleteResponsibleTask"));
const _17_searchTaskByTerm_1 = __importDefault(require("./endpoint/17-searchTaskByTerm"));
const _19_deleteTask_1 = __importDefault(require("./endpoint/19-deleteTask"));
const _20_deleteUser_1 = __importDefault(require("./endpoint/20-deleteUser"));
app_1.default.get('/task/search', _13_getTasksByStatus_1.default);
app_1.default.get('/task/delayed', _14_getTasksDelayed_1.default);
app_1.default.get('/task/termo', _17_searchTaskByTerm_1.default);
app_1.default.post('/user', _1_createUser_1.default);
app_1.default.get('/user/all', _6_getAllUsers_1.default);
app_1.default.get('/user/:id', _2_getUserById_1.default);
app_1.default.put('/user/edit/:id', _3_editUser_1.default);
app_1.default.post('/task', _4_createTask_1.default);
app_1.default.get('/task/:id', _5_getTaskById_1.default);
app_1.default.get('/task', _7_getAllTasksByUser_1.default);
app_1.default.get('/user', _8_searchUser_1.default);
app_1.default.post('/task/responsible', _9_16_responsibleTask_1.default);
app_1.default.get('/task/:id/responsible', _10_getUsersResponsibleTask_1.default);
app_1.default.get('/task/:id/responsiblesTask', _11_getTaskByIdAndYourResponsibles_1.default);
app_1.default.put('/task/status/edit', _12_18_updateStatusById_1.default);
app_1.default.delete('/task/:taskId/responsible/:responsibleUserId', _15_deleteResponsibleTask_1.default);
app_1.default.delete('/task/:id', _19_deleteTask_1.default);
app_1.default.delete('/user/:id', _20_deleteUser_1.default);
//# sourceMappingURL=index.js.map