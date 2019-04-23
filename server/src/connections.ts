export const connectionToRemoteServer = {
    name: 'default',
    type: 'postgres',
    // paste
    // paste
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/*.schema.ts`],
    extra: {
        ssl: true,
    },
}

export const connectionToLocalServer = {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres_admin',
    password: '1907',
    database: 'testing-app',
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/*.schema.ts`],

}
