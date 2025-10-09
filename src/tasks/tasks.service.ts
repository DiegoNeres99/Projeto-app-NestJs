import { Injectable } from '@nestjs/common';
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
        return this.tasks.find(task => task.id === Number(id))
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
}