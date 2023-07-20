import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AutenticacaoGuard implements CanActivate {
  canActivate(contexto: ExecutionContext): boolean {
    //1
    const requisicao = contexto.switchToHttp().getRequest();
    const token = this.extrairTokenDoCabecalho(requisicao);
    //3
    if (!token) {
      throw new UnauthorizedException('Erro de autenticação');
    }

    return true;
  }
  //2
  private extrairTokenDoCabecalho(requisicao: Request): string | undefined {
    //formato do cabeçalho authorizathon: "Bearer <valor_do_jwt>" -> protocolo HTTP
    const [tipo, token] = requisicao.headers.authorization?.split(' ') ?? [];
    return tipo === 'Bearer' ? token : undefined;
  }
}
