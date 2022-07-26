import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameForStatus"
})
export class NameForStatusPipe implements PipeTransform {
  transform(number: number, statuses: any): any {
    let object = statuses.find((obj: any) => obj.id === number);

    return object.name;
  }
}
