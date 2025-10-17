import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { tasks } from './entities/task.entity';

@Injectable()
export class TasksService {

    private tasks: tasks[] = [
        {
            id: 1,
            name: "Diego Neres Miotta",
            description: "Estudar NestJS",
            completed: false
        }
    ]

    listAllTasks() {
        return this.tasks;
    }

    findOneTask(id: string) {
        const task = this.tasks.find(task => task.id === Number(id))

        if (task) return task;

        throw new HttpException("essa tarefa não existe", HttpStatus.NOT_FOUND);
        //throw new NotFoundException("essa tarefa não existe");
    }

    create(body: any) {
        const newid = this.tasks.length + 1;

        const newTask = {
            id: newid,
            ...body
        }

        this.tasks.push(newTask)

        return body;
    }

    update(id: string, body: any) {
        const taskIndex = this.tasks.findIndex(task => task.id === Number(id));

        if (taskIndex < 0) {
            throw new HttpException("essa tarefa não existe", HttpStatus.NOT_FOUND);
        }

        const taskItem = this.tasks[taskIndex];

        this.tasks[taskIndex] = {
            ...taskItem,
            ...body


        }

        return taskItem;
    }



}