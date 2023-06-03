import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import {} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor( private taskService : TasksService) { }

    @Get()
    getAllTasks() : Task []{

        return this.taskService.getAllTasks();

    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {



       const task =  this.taskService.createTask(createTaskDto);
       return task ;

    }

  


    


}
