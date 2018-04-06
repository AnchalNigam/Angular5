import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<object>, args?: any): any {
    if(array==null){
    return null;
    }
    
  
if(args=='views') {
  array.sort((a: any, b: any) => {
    let A = a[args];
    let B = b[args];
  return (A > B) ? -1 : (A < B) ? 1 : 0;
});
return array;

}
if(args=='lastModified') {
  array.sort((a : any ,b :any):any => {
    let c = new Date(a[args]);
    let d = new Date(b[args]);
    return (c  > d) ? -1 : (c < d) ? 1 : 0;
  });
  return array;

}
return array;
 
  
  }

}
