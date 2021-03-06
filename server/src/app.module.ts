import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { applyMiddleware } from 'graphql-middleware';
import { permissions } from './shild/permissions';
import { GraphQLSchema } from 'graphql';
import { Request } from 'express';

export interface IRequest {
    req: Request
}

@Module({
    imports: [
        UserModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            context: ({ req }: IRequest) => ({ req }),
            transformSchema: (schema: GraphQLSchema) => {
                return applyMiddleware(schema, permissions);
              }
            
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                name: 'default',
                type: 'postgres',
                host: 'ec2-54-195-252-243.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'qysbfrsvjdylty',
                password:
                    'c92fb10cff196dd2047db9af99ad740617d3967bc18ad46dfe45b0914036e6a2',
                database: 'de2nl0d2dtm5s3',
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
