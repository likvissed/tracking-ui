import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameForStatus"
})
export class NameForStatusPipe implements PipeTransform {
  transform(number: number): any {
    switch (number) {
      case 0:
        return "Не доставлено";
      case 1:
        return "Доставлено ";
    }

  }
}
