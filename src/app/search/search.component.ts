import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
	providers: [ApiServicesService]
})
export class SearchComponent implements OnInit {
	public title: string;
	public noSearch: boolean;
	public searchResults = new Array();

  constructor(private apiServices: ApiServicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
		let q;

		this.route.params.subscribe(params => {
			q = params['query'];
		});

		this.getSearchResults(q);
  }

	getSearchResults(query) {
		let search = new Array();

		this.title = "Search results for: "+ query;

		this.apiServices.getBenefits().subscribe(
			res => {
				res.map(x => {
					if((x.OfferHead.toLowerCase().indexOf(query.toLowerCase()) !== -1 || x.DetailOfferHead.toLowerCase().indexOf(query.toLowerCase()) !== -1 || x.OfferDescription.toLowerCase().indexOf(query.toLowerCase()) !== -1 || x.OfferBriefDescription.toLowerCase().indexOf(query.toLowerCase()) !== -1) && x.ItemType !== "" && x.ParentOffer === "Home") {
						search.push(x);
					}
				});
				this.searchResults = search;

				if(this.searchResults.length < 1) {
					// this.noSearch = true;
					this.router.navigate(["not-found"]);

				}

			}
		);
	}

}
