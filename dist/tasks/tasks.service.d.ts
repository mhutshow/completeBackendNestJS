import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from "./dto/getTasks-Filter.dto";
import { TaskRepository } from "./task.repository";
import { Task } from "./task.entity";
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getAllTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: string): Promise<Task>;
    deleteTask(id: string): Promise<import("typeorm").DeleteResult>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTaskStatus(id: string, status: any): Promise<Task>;
}
