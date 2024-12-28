import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('signup')
    signup() {
        return "Hello World i'm signed up";
    }
    
    @Get('login')
    login() {
        return "Hello World i'm logged in";
    }
}
