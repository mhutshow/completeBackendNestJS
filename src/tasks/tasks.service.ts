import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

import {v4 as uuid} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getAllTasks() : Task []{
        return this.tasks;
    }

    getTaskById(id:string){

        return this.tasks.find((task)=> id == task.id);

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

}
