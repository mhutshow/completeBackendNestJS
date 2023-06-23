import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import * as bcrypt from 'bcrypt' 


@EntityRepository(User)
export class UserRepository extends Repository<User>{


    async createUser(authCredentialsDto: AuthCredentialsDto) {
        const { username, password } = authCredentialsDto;
      
        const saltRounds = 10; // Number of salt rounds
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        console.log(salt);
        console.log(hashedPassword);
        try {
         
      
          const user = this.create({ username, password: hashedPassword });
          await this.save(user);
        } catch (error) {
          console.log(error);
        }
        return { username, hashedPassword };
      }

}