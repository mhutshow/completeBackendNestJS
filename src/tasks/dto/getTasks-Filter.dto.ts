import {TaskStatus} from "../task-status.enum";
import {IsEnum, IsNotEmpty, IsOptional, IsString} from "class-validator";

export  class GetTasksFilterDto{
    @IsOptional()
    @IsString()
    search? : string;
    @IsEnum(TaskStatus)
    @IsOptional()
    status? : TaskStatus;
}