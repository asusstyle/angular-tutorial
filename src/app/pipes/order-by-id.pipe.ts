import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'orderById'
})
export class OrderByIdPipe implements PipeTransform {

  transform(value: Array<any>): any {
		let arr = new Array();

		arr = _.sortBy(value, "ID");
		return arr;
  }

}
