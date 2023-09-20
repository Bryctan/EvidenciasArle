import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private TasksService:TasksService) {
        
    }

    @Get()
    getAllTasks () {
        return this.TasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTaks:CreateTaskDto) {
        return this.TasksService.createTask(newTaks.title,newTaks.description)
    }

    @Delete(':id')
    deleteTask (@Param('id') id: string) {
        this.TasksService.deleteTask(id)
    }

    @Patch(':id') 
    updateTask (@Param('id') id:string,@Body() updatedFields: UpdateTaskDto) {
        return this.TasksService.updateTask(id,updatedFields)
    }
}
