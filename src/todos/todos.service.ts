import { Injectable, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, catchError } from 'rxjs';
import { ITodos, TCreateTodo } from 'src/interfaces/todos';

@Injectable()
export class TodosService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getAll() {
    const url = this.configService.get('API_URL');

    return this.httpService
      .get<AxiosResponse<ITodos[]>>(url)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available.');
        }),
      );
  }

  create(args: TCreateTodo) {
    const url = this.configService.get('API_URL');

    return this.httpService
      .post<AxiosResponse<ITodos>>(url, {
        body: args.body,
        title: args.title,
        userId: args.userId,
      })
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available.');
        }),
      );
  }
}
