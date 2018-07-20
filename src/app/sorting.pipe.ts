import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'sorting'})
export class SortingPipe implements PipeTransform {
  transform(values: any, exponent: string): any {
    // let exp = parseFloat(exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
    // return values.filter(item=>(item.id % 2));
    let temp= values.sort(function(a, b){return b.id - a.id});
    console.log(values,"--------------value-----",temp);

    return temp;
  }
}