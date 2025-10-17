import { Body, Controller, Delete, Get, Param, Patch, Post, } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get("")
    findAllTasks() {
        console.log();
        return this.tasksService.listAllTasks();
    }

    @Get(":id")
    findOneTask(@Param("id") id: string) {
        console.log(id);
        return this.tasksService.findOneTask(id);
    }

    @Post()
    createTask(@Body() body: any) {
        console.log(body);
        return this.tasksService.create(body);
    }

    @Patch(":id")
    updateTask(@Param("id") id: string, @Body() body: any) {    
        return this.tasksService.update(id, body)
    }

    @Delete(":id")
    deleteTask(@Param("id") id: string) {
        console.log("ID ENVIADO: " + id);
        
        return "Deletando uma tarefa " + id;
    }


}
