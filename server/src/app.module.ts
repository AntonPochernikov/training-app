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
                host: 'ec2-54-195-252-243.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'qysbfrsvjdylty',
                password:
                    'c92fb10cff196dd2047db9af99ad740617d3967bc18ad46dfe45b0914036e6a2',
                database: 'de2nl0d2dtm5s3',
                // paste
                synchronize: true,
                logging: false,
                entities: [`${__dirname}/**/*.schema.ts`],
                extra: {
                    ssl: true,
                },
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
