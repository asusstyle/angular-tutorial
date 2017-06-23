import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
	providers: [SearchComponent]
})
export class SearchBoxComponent implements OnInit {

  constructor(private router: Router, private search: SearchComponent) { }

  ngOnInit() {
  }

	onSubmit(event) {
		let q = event.target.querySelector("input").value;

		this.router.navigate(["search", q]);
		event.target.querySelector("input").value = "";
		this.search.getSearchResults(q);
	}

}
