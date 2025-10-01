import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    listAllTasks() {
        return [
            { id: 1, tasks: "Comprar pao" },
        ]
    }

    findOneTask(id: string) {
        return "Buscar tarefa com ID " + id;
    }

    create(body: any) {
        console.log("Tarefa criada com sucesso!");
        return body;
    }
}