import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss'],
	providers: [ApiServicesService]
})
export class LifestyleComponent implements OnInit {

  constructor(private apiServices: ApiServicesService) { }

  ngOnInit() { }

	getLifeStyleBenefits(): Observable<any> {
		return this.apiServices.getBenefits().map(
			res => {
				return res;
			}
		);
	}
}
