import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss'],
	providers: [ApiServicesService]
})
export class ProtectionComponent implements OnInit {

  constructor(private apiServices: ApiServicesService) { }

  ngOnInit() { }

	getProtectionBenefits(): Observable<any> {
		return this.apiServices.getBenefits().map(
			res => {
				return res;
			}
		);
	}

}
