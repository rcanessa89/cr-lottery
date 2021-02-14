import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TransformBodyPipe implements PipeTransform {
  transform(value) {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (e) {
      return value;
    }
  }
}
