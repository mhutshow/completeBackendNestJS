import {Injectable, NotFoundException} from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

import {v4 as uuid} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import {GetTasksFilterDto} from "./dto/getTasks-Filter.dto";

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getAllTasks() : Task []{






        return this.tasks;



    }

    getTaskById(id:string){

    const found = this.tasks.find((task)=> id == task.id)
        if(!found) {
            throw new NotFoundException();
        }



        return found ;

    }

    deleteTask(id:string){

        this.tasks = this.tasks.filter((task)=> id != task.id);

        return "Item Deleted : " + id

    }

    createTask(createTaskDto: CreateTaskDto): Task {

        const {description , title} = createTaskDto

     const task : Task = {

        id : uuid(),
        description : description,
        status: TaskStatus.OPEN,
        title : title
     }

     this.tasks.push(task);
     return task;
    }

    updateTaskStatus(id: string , status)  {
        const task = this.getTaskById(id)
        console.log(task.status);
        console.log(status)
        task.status = status;
        return task;
    }

    getTaskWithFilter(filterDto: GetTasksFilterDto) : Task []{

        const {status , search } = filterDto;

        let tasks= this.getAllTasks();

        if(status){
            tasks= tasks.filter((t) => t.status ==status);

        }

        if(search){
            tasks = tasks.filter(t => {
                if(t.title.toLowerCase().includes(search.toLowerCase()) || t.description.includes(search)){
                  return true;
                };
            })

            console.log(tasks.length)

            return  tasks;

        }





    }

}
