import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
	providers: [ApiServicesService]
})
export class TravelComponent implements OnInit {

  constructor(private apiServices: ApiServicesService) { }

  ngOnInit() { }

	getTravelBenefits(): Observable<any> {
		return this.apiServices.getBenefits().map(
			res => {
				return res;
			}
		);
	}

}
