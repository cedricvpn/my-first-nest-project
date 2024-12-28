import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [UserModule, AuthModule, CommentsModule, DatabaseModule],
})
export class AppModule {}
