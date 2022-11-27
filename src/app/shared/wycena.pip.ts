import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'wycena'
})
export class WycenaPipe implements PipeTransform {
    transform(cash: number) {
        return cash + ' zł';
    }
}