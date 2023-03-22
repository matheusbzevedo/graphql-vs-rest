import { Test, TestingModule } from '@nestjs/testing';
import { RestTodosController } from './rest-todos.controller';

describe('RestTodosController', () => {
  let controller: RestTodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestTodosController],
    }).compile();

    controller = module.get<RestTodosController>(RestTodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
