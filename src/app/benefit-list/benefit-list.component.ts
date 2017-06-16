import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TravelComponent } from "../travel/travel.component";
import { LifestyleComponent } from "../lifestyle/lifestyle.component";
import { ProtectionComponent } from "../protection/protection.component";

@Component({
  selector: 'app-benefit-list',
  templateUrl: './benefit-list.component.html',
  styleUrls: ['./benefit-list.component.scss'],
	providers: [TravelComponent, LifestyleComponent, ProtectionComponent]
})
export class BenefitListComponent implements OnInit {

	public benefits = new Array();
	public title;

  constructor(private lifeStyleComponent: LifestyleComponent, private travelComponent: TravelComponent, private protectionComponent: ProtectionComponent, private router: Router) {	}

  ngOnInit() {
		this.getbenefits();
  }

	getbenefits() {
		let state = this.router.url.replace("/", "");

		if(state === "travel") {
			this.title = "Travel";

			this.travelComponent.getTravelBenefits().subscribe(
				res => {

					res.map(x => {
						if(x.SiteSection === "Travel" && x.ItemType !== "" && x.ParentOffer === "Home")
							this.benefits.push(x);
					});
				}
			);
		}

		if(state === "lifestyle") {
			this.title = "Lifestyle";

			this.lifeStyleComponent.getLifeStyleBenefits().subscribe(
				res => {

					res.map(x => {
						if(x.SiteSection === "Lifestyle" && x.ItemType !== "" && x.ParentOffer === "Home")
							this.benefits.push(x);
					});

				}
			);
		}

		if(state === "protection") {
			this.title = "Protection";

			this.protectionComponent.getProtectionBenefits().subscribe(
				res => {

					res.map(x => {
						if(x.SiteSection === "Protection" && x.ItemType !== "" && x.ParentOffer === "Home")
							this.benefits.push(x);
					});

				}
			);
		}

	}

}
