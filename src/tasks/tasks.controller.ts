import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import { TasksService } from './tasks.service';
import {Task, TaskStatus} from './tasks.model';
import {} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import {GetTasksFilterDto} from "./dto/getTasks-Filter.dto";
import {UpdateTaskStatusDto} from "./dto/updateTaskStatus.dto";

@Controller('tasks')
export class TasksController {
    constructor( private taskService : TasksService) { }

    @Get()
    getAllTasks(@Query() filterDto: GetTasksFilterDto) : Task []{
        if(Object.keys(filterDto).length){
            console.log(filterDto)
            return this.taskService.getTaskWithFilter(filterDto);
        } else{
            return this.taskService.getAllTasks();
        }
       // return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): any {



       return this.taskService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): any {
       return this.taskService.deleteTask(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {

       const task =  this.taskService.createTask(createTaskDto);
       return task ;

    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id' ) id : string , @Body() updateTaskDto: UpdateTaskStatusDto  ) : Task{

        const {status} = updateTaskDto;

        return this.taskService.updateTaskStatus(id , status);

    }
  


    


}
