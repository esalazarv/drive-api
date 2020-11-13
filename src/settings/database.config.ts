import { TypeOrmModuleOptions } from '@nestjs/typeorm';

declare type DatabaseConnections = {
  [name: string]: () => TypeOrmModuleOptions;
};

export const database: DatabaseConnections = {
  mysql: () => ({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'feedma',
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_DATABSE || 'feedma',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: !!process.env.DB_SYNC || true,
    migrationsRun: true,
    logging: true,
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: './migrations',
    },
  }),
};

export default database.mysql();
