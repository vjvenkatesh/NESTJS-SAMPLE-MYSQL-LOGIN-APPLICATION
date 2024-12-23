import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';


@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'sample',
    entities: [User],
    synchronize: true,
  }),  
  UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
