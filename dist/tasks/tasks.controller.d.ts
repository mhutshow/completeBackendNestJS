import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): any;
    deleteTask(id: string): any;
    createTask(createTaskDto: CreateTaskDto): Task;
}
