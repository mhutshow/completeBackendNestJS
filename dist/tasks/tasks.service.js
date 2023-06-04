"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_model_1 = require("./tasks.model");
const uuid_1 = require("uuid");
let TasksService = exports.TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find((task) => id == task.id);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => id != task.id);
        return "Item Deleted : " + id;
    }
    createTask(createTaskDto) {
        const { description, title } = createTaskDto;
        const task = {
            id: (0, uuid_1.v4)(),
            description: description,
            status: tasks_model_1.TaskStatus.OPEN,
            title: title
        };
        this.tasks.push(task);
        return task;
    }
};
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map