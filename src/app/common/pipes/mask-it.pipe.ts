import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskIt'
})
export class MaskItPipe implements PipeTransform {

  transform(value: string, maskFromStart: number = 2, maskFromEnd: number = 4) : string {
    if(!value)
      return null

    let content = value
    let maskedContent = content.slice(0, maskFromStart) + content.slice(maskFromStart, -maskFromEnd).replace(/./g, '*') + content.slice(-maskFromEnd)
    return maskedContent
  }

}
