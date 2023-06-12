import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TasksModule,
      TypeOrmModule.forRoot(
          {
            type : "postgres",
            host : "localhost",
            port : 5432,
            username: 'mahedi',
            password : "12345",
            database : "restapi",
            synchronize : true,
            autoLoadEntities : true,

          }
      )
  ],

})
export class AppModule {}
