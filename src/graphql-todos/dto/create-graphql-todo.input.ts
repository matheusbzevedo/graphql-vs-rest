import { InputType, OmitType, Field, ID } from '@nestjs/graphql';
import { GraphqlTodo } from '../entities/graphql-todo.entity';

@InputType()
export class CreateGraphqlTodoInput extends OmitType(GraphqlTodo, [
  'id',
] as const) {
  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => ID, { nullable: true })
  userId?: number;
}
