import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
	providers: [ApiServicesService]
})
export class HeaderComponent implements OnInit {

	public sections = new Array();
	public param = "Travel";

  constructor(private apiServices: ApiServicesService, private router: Router) { }

  ngOnInit() {
		this.getNavs();

		// if(!!location.pathname) {
		// 	let charAtOne, path;
		//
		// 	path = location.pathname.replace("/", "");
		// 	charAtOne = path.charAt(0);
		//
		// 	this.param = charAtOne.toUpperCase() + path.replace(charAtOne, "");
		// }
  }

	getNavs() {
		this.apiServices.getBenefits().subscribe(
			res => {

				for(let i = 0; i < res.length; i++) {
					if(this.sections.indexOf(res[i].SiteSection) === -1) {
						this.sections.push(res[i].SiteSection);
					}
				}

			}
		);
	}

	// navigateTo(event) {
	// 	let targetEl = event.target,
	// 			parentUl = targetEl.parentNode.parentNode,
	// 			alink = targetEl.getAttribute("target");
	//
	// 	parentUl.querySelectorAll("li").forEach(function(el) {
	// 	  el.classList.remove("active");
	// 	});
	//
	// 	this.router.navigate(["/"+ alink]);
	// 	targetEl.parentNode.classList.add("active");
	//
	// 	return false;
	// }

}
