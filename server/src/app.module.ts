import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Request } from 'express'
import { GraphQLSchema } from 'graphql'
import { applyMiddleware } from 'graphql-middleware'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { permissions } from './shild/permissions'
import { UserModule } from './user/user.module'
import { QuestionModule } from './question/question.module'

export interface IRequest {
    req: Request
}

@Module({
    imports: [
        UserModule,
        QuestionModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            context: ({ req }: IRequest) => ({ req }),
            transformSchema: (schema: GraphQLSchema) => {
                return applyMiddleware(schema, permissions)
            },
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                name: 'default',
                type: 'postgres',
                // paste
                host: 'localhost',
                port: 5432,
                username: 'postgres_admin',
                password: '1907',
                database: 'testing-app',
                // paste
                synchronize: true,
                logging: false,
                entities: [`${__dirname}/**/*.schema.ts`],
                // extra: {
                //     ssl: true,
                // },
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
