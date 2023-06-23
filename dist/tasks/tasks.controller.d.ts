import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from "./dto/getTasks-Filter.dto";
import { UpdateTaskStatusDto } from "./dto/updateTaskStatus.dto";
import { Task } from "./task.entity";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: string): Promise<Task>;
    deleteTask(id: string): any;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTaskStatus(id: string, updateTaskDto: UpdateTaskStatusDto): Promise<Task>;
}
