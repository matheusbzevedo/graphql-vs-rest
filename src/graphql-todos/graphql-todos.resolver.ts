import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GraphqlTodo } from './entities/graphql-todo.entity';
import { TodosService } from 'src/todos/todos.service';
import { CreateGraphqlTodoInput } from './dto/create-graphql-todo.input';

@Resolver(() => GraphqlTodo)
export class GraphqlTodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation(() => GraphqlTodo, { name: 'createTodo' })
  createTodo(
    @Args('createGraphqlTodoInput', { type: () => CreateGraphqlTodoInput })
    createGraphqlTodoInput: CreateGraphqlTodoInput,
  ) {
    return this.todosService.create(createGraphqlTodoInput);
  }

  @Query(() => [GraphqlTodo], { name: 'todos' })
  findAll() {
    return this.todosService.getAll();
  }
}
