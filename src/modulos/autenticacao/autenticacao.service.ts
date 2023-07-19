import { Injectable } from '@nestjs/common';

@Injectable()
export class AutenticacaoService {
  async login(email: string, senhaDigitada: string) {
    console.log(email, senhaDigitada);
  }
}
