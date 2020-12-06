import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotdogEntity } from './hotdog/hotdog.entity';
import { Connection } from 'typeorm';
import { HotdogController } from './hotdog/hotdog.controller';
import { HotdogService } from './hotdog/hotdog.service';
import { HotdogModule } from './hotdog/hotdog.module';
import { EasyconfigModule } from 'nestjs-easyconfig';

@Module({
  imports: [
    EasyconfigModule.register({ path: './.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DATABASE,
      entities: [HotdogEntity],
      synchronize: Boolean(process.env.NJS_SYNC),
      logging: Boolean(process.env.NJS_LOGGING),
    }),
    HotdogModule,
  ],
  controllers: [AppController, HotdogController],
  providers: [AppService, HotdogService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
