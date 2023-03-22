import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { GraphqlTodosResolver } from './graphql-todos.resolver';
import { TodosService } from 'src/todos/todos.service';

@Module({
  imports: [HttpModule],
  providers: [GraphqlTodosResolver, TodosService],
})
export class GraphqlTodosModule {}
