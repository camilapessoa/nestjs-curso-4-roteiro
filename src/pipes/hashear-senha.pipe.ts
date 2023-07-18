import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class HashearSenhaPipe implements PipeTransform {
  transform(senha: string): string {
    return senha + 'abc';
  }
}
