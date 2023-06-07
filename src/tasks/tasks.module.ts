import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
}) 
export class TasksModule {


  


}

//Dependency Injection
//SOLID - Single responsibility principle.
//Open Close Principal