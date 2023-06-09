import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [

    TypeOrmModule.forFeature(
      [UserRepository]
    ),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret : 'myTopSecret51',
      signOptions : {
        expiresIn: 3600
      }

    }),



  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
