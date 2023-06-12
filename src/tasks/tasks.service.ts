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
    // getAllTasks() : Task []{
    //
    //
    //
    //
    //
    //
    //     return this.tasks;
    //
    //
    //
    // }
    //


         async getTaskById(id: string) : Promise<Task>{

        const found = await  this.taskRepository.findOne(id);

             console.log(found)

        if(!found){
            throw new NotFoundException();
        } else {
            return found;
        }

         }



    // getTaskById(id:string){
    //
    // const found = this.tasks.find((task)=> id == task.id)
    //     if(!found) {
    //         throw new NotFoundException();
    //     }
    //
    //
    //
    //     return found ;
    //
    // }
    //
    // deleteTask(id:string){
    //
    //     this.tasks = this.tasks.filter((task)=> id != task.id);
    //
    //     return "Item Deleted : " + id
    //
    // }
    //
     createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    
     return this.taskRepository.createTask(createTaskDto);
    }
    //
    // updateTaskStatus(id: string , status)  {
    //     const task = this.getTaskById(id)
    //     console.log(task.status);
    //     console.log(status)
    //     task.status = status;
    //     return task;
    // }
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
