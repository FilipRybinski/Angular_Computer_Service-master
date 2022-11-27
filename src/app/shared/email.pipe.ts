import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'user'
})
export class EmailPipe implements PipeTransform {
    transform(array: any[]) {
        return array.filter(element => element.email === localStorage.getItem('email'));
    }
}