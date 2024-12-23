import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class SecretKeyGuard implements CanActivate {
  private readonly SECRET_KEY = 'abracatabra'; 

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const secretKey = request.headers['x-secret-key']; 

    if (secretKey !== this.SECRET_KEY) {
      throw new UnauthorizedException('Access denied: Invalid secret key');
    }

    return true; 
  }
}
