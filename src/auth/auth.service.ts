import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jaw-payload.interface';

@Injectable()
export class AuthService {

    constructor (
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ){ }

    async signUp(authCredentialsDto : AuthCredentialsDto){

      return  await this.userRepository.createUser(authCredentialsDto);

    }

    async signIn(authCredentialsDto : AuthCredentialsDto) : Promise<any>{

        const {username, password} =authCredentialsDto;
        const user = await this.userRepository.findOne({username :username});

        if(user && (await bcrypt.compare(password, user.password))){

            const payload:JwtPayload = {username};

            const accessToken = await this.jwtService.sign(payload);

           return {accessToken}
        } else{

            return " not correct"
        }


     

        
    }

}
