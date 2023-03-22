import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlTodosResolver } from './graphql-todos.resolver';
import { GraphqlTodosService } from './graphql-todos.service';

describe('GraphqlTodosResolver', () => {
  let resolver: GraphqlTodosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlTodosResolver, GraphqlTodosService],
    }).compile();

    resolver = module.get<GraphqlTodosResolver>(GraphqlTodosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
