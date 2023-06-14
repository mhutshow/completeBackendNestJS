import {Injectable, NotFoundException} from '@nestjs/common';
import { TaskStatus } from './task-status.enum';

import { CreateTaskDto } from './dto/create-task.dto';
import {GetTasksFilterDto} from "./dto/getTasks-Filter.dto";
import {TaskRepository} from "./task.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./task.entity";

@Injectable()
export class TasksService {

    constructor(

        @InjectRepository(TaskRepository)
        private taskRepository : TaskRepository) {}




    //
    getAllTasks(filterDto :GetTasksFilterDto) : Promise<Task[]>{
    
        return  this.taskRepository.getTask(filterDto);

    
    
    }
    


         async getTaskById(id: string) : Promise<Task>{

        const found = await  this.taskRepository.findOne(id);

             console.log(found)

        if(!found){
            throw new NotFoundException();
        } else {
            return found;
        }

         }




    async deleteTask(id:string){
    
         return await this.taskRepository.delete(id);
    
    }
    //
     createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    
     return this.taskRepository.createTask(createTaskDto);
    }
    //
    async updateTaskStatus(id: string , status)  {
        const task = await this.getTaskById(id);
        task.status = status;

        await this.taskRepository.save(task)
        
        return task;
    }
    //
    // getTaskWithFilter(filterDto: GetTasksFilterDto) : Task []{
    //
    //     const {status , search } = filterDto;
    //
    //     let tasks= this.getAllTasks();
    //
    //     if(status){
    //         tasks= tasks.filter((t) => t.status ==status);
    //
    //     }
    //
    //     if(search){
    //         tasks = tasks.filter(t => {
    //             if(t.title.toLowerCase().includes(search.toLowerCase()) || t.description.includes(search)){
    //               return true;
    //             };
    //         })
    //
    //         console.log(tasks.length)
    //
    //         return  tasks;
    //
    //     }

   // }

}
