import { Task } from "./task.entity";
import { Repository } from "typeorm/repository/Repository";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/getTasks-Filter.dto";
export declare class TaskRepository extends Repository<Task> {
    getTask(filterDto: GetTasksFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
