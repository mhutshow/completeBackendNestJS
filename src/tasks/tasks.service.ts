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
