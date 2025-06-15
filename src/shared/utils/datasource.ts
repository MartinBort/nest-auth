import { DataSource } from 'typeorm';
import { join } from 'path';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nestjs',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true,
  migrations: [join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}')],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'typeorm_migrations',
});