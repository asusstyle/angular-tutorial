import { Component, OnInit } from '@angular/core';

import { LifestyleComponent } from "../lifestyle/lifestyle.component";

@Component({
  selector: 'app-benefit-list',
  templateUrl: './benefit-list.component.html',
  styleUrls: ['./benefit-list.component.scss']
})
export class BenefitListComponent implements OnInit {

	public benefits = new Array();

  constructor(private lifeStyleComponent: LifestyleComponent) { }

  ngOnInit() {
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
