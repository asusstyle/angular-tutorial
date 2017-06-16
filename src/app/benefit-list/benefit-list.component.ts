import { Component, OnInit } from '@angular/core';

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

  constructor(private lifeStyleComponent: LifestyleComponent, private travelComponent: TravelComponent, private protectionComponent: ProtectionComponent) { }

  ngOnInit() {
		this.getbenefits();
		// this.travelComponent.getTravelBenefits().subscribe(
		// 	res => {
		//
		// 		for(let i = 0; i < res.length; i++) {
		// 			if(res[i].SiteSection === "Travel" && res[i].ItemType !== "" && res[i].ParentOffer === "Home") {
		// 				this.travelBenefits.push(res[i]);
		// 			}
		// 		}
		// 		console.log(this.travelBenefits);
		// 	}
		// );
		// this.protectionComponent.getProtectionBenefits().subscribe(
		// 	res => {
		//
		// 		for(let i = 0; i < res.length; i++) {
		// 			if(res[i].SiteSection === "Protection" && res[i].ItemType !== "" && res[i].ParentOffer === "Home") {
		// 				this.protectionBenefits.push(res[i]);
		// 			}
		// 		}
		// 		console.log(this.protectionBenefits);
		// 	}
		// );
  }

	getbenefits() {
		this.benefits.length = 0;

		this.lifeStyleComponent.getLifeStyleBenefits().subscribe(
			res => {

				for(let i = 0; i < res.length; i++) {
					if(res[i].SiteSection === "Lifestyle" && res[i].ItemType !== "" && res[i].ParentOffer === "Home") {
						this.benefits.push(res[i]);
					}
				}
			}
		);
	}

}
