import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RestTodosController } from './rest-todos/rest-todos.controller';
import { TodosService } from './todos/todos.service';
import { GraphqlTodosModule } from './graphql-todos/graphql-todos.module';
import variables from 'config/variables';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [variables],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true,
    }),
    GraphqlTodosModule,
    HttpModule,
  ],
  controllers: [RestTodosController],
  providers: [TodosService],
})
export class AppModule {}
