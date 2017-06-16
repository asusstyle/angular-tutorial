import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-benefit-detail',
  templateUrl: './benefit-detail.component.html',
  styleUrls: ['./benefit-detail.component.scss'],
	providers: [ApiServicesService]
})
export class BenefitDetailComponent implements OnInit {

	public benDetail;

	private id: number;
	private section: string;

  constructor(private apiServices: ApiServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
		this.route.params.subscribe(params => {
			this.id = Number(params['id']);
			this.section = params['section'];
		});

		this.getBenefitDetails();
  }

	getBenefitDetails() {
		this.apiServices.getBenefits().subscribe(
			res => {
				res.map(x => {
					if(x.SiteSection.toLowerCase() === this.section && x.ID === this.id) {
						this.benDetail = x;
						console.log(this.benDetail);
					}
				});
			}
		);
	}
}
