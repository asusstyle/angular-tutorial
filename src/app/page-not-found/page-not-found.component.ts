import { Component, OnInit } from '@angular/core';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
	providers: [ApiServicesService]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
