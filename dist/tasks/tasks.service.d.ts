import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    deleteTask(id: string): string;
    createTask(createTaskDto: CreateTaskDto): Task;
}
