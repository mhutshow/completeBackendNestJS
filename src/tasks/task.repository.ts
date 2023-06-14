import {EntityRepository} from "typeorm";
import {Task} from "./task.entity";
import { Repository } from "typeorm/repository/Repository";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enum";
import { GetTasksFilterDto } from "./dto/getTasks-Filter.dto";


@EntityRepository(Task)
export class TaskRepository extends  Repository <Task>{


    async getTask (filterDto: GetTasksFilterDto){

        const {status , search } = filterDto;


        const query  = this.createQueryBuilder('task');

        if(status){

           query.andWhere('task.status = :status' , {status});
  
        }
        if(search){

            query.andWhere('LOWER (task.title) LIKE LOWER (:search) OR LOWER (task.description) LIKE LOWER (:search)' , {search :`%${search}%`});

        }

        //Linter will be added here.

        const tasks = await query.getMany();
        return tasks;

    }



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