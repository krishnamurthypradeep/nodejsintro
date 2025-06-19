import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forRoot('mongodb+srv://deepumurthy10:ldGlEnLt5grGSQcY@mernstack.aulxrmv.mongodb.net/productsdb?retryWrites=true&w=majority&appName=mernstack')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
