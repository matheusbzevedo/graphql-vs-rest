import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class GraphqlTodo {
  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => ID)
  id: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => ID, { nullable: true })
  userId?: number;
}
