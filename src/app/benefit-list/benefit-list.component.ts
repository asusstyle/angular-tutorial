import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-benefit-list',
  templateUrl: './benefit-list.component.html',
  styleUrls: ['./benefit-list.component.scss'],
	providers: [ApiServicesService]
})
export class BenefitListComponent implements OnInit {

	public benefits = new Array();
	public title;

  constructor(private apiServices: ApiServicesService, private router: Router) {	}

  ngOnInit() {
		this.getbenefits();
  }

	getbenefits() {
		let routeState,
				state = this.router.url.replace("/", ""),
				ben = new Array();

		routeState = state.charAt(0).toUpperCase() + state.replace(state.charAt(0), "");
		this.title = routeState;

		this.apiServices.getBenefits().subscribe(
			res => {

				res.map(x => {
					if(x.SiteSection === routeState && x.ItemType !== "" && x.ParentOffer === "Home")
						ben.push(x);
				});
				this.benefits = ben;
				
			}
		);
	}

}
