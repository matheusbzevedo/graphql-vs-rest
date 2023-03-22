import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ITodos } from 'src/interfaces/todos';
import { TodosService } from 'src/todos/todos.service';

@Controller('todos')
export class RestTodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Observable<AxiosResponse<ITodos[]>> {
    return this.todosService.getAll();
  }
}
