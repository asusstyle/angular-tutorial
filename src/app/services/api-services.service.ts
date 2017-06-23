import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiServicesService {

	public url = 'http://apiuat.mc-mena.com/API/';

  constructor(private http: Http) { }

	getNav(): Observable<any> {
		const nav = "../assets/data/site-data.json";

		return this.http.get(nav).map(
			res => {
				const navItems = res.json();
				return navItems;
			}
		);
	}

  getBenefits(): Observable<any> {
		const apiName = this.url + 'MasterCardBenefitData.ashx?CountryCode=ae&CardType=worldElite';

		return this.http.get(apiName).map(
			res => {
				const benefits = res.json();
				return benefits;
			}
		);
  }

}
