import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(authCredentialsDto: AuthCredentialsDto): Promise<{
        username: string;
        hashedPassword: any;
    }>;
}
