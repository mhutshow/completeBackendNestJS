import {EntityRepository} from "typeorm";
import {Task} from "./task.entity";
import { Repository } from "typeorm/repository/Repository";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";


@EntityRepository(Task)
export class TaskRepository extends  Repository <Task>{



    async createTask(createTaskDto : CreateTaskDto) : Promise<Task>{

        const {description , title} = createTaskDto;

        const task = this.create({
            title,
            description,
            status : TaskStatus.OPEN
        });

        await this.save(task);


     return task;


    }



}