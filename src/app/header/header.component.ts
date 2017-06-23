import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
	providers: [ApiServicesService]
})
export class HeaderComponent implements OnInit {

	public sections = new Array();
	private language = "en";

  constructor(private apiServices: ApiServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
		// this.getNavs();
		this.getNavJson();

		this.route.queryParams.subscribe(params => {
			this.language = String(params['lang']);
		});
  }

	getNavJson() {
		this.apiServices.getNav().subscribe(
			res => {
				if(this.language === "ar") {
					this.sections = res["top-navigation"]["ar"];
				} else {
					this.sections = res["top-navigation"]["en"];
				}
			}
		);
	}

	getNavs() {
		this.apiServices.getBenefits().subscribe(

			res => {
				res.map(x => {
					if(this.sections.indexOf(x.SiteSection) === -1) {
						this.sections.push(x.SiteSection);
					}
				});
			}

		);
	}

}
