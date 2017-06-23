import { Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { TravelComponent } from "./travel/travel.component";
import { LifestyleComponent } from "./lifestyle/lifestyle.component";
import { ProtectionComponent } from "./protection/protection.component";
import { BenefitDetailComponent } from "./benefit-detail/benefit-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchComponent } from "./search/search.component";

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'travel',
		pathMatch: 'full'
	},
	{
		path: 'travel',
		component: TravelComponent,
		data: { stateName: 'travel', index: 1 }
	},
	{
		path: 'lifestyle',
		component: LifestyleComponent,
		data: { stateName: 'lifestyle', index: 2 }
	},
	{
		path: 'protection',
		component: ProtectionComponent,
		data: { stateName: 'protection', index: 3 }
	},
	{
		path: ':section/benefit/:id',
		component: BenefitDetailComponent,
		data: { stateName: 'benefit-details', index: 4 }
	},
	{
		path: 'search/:query',
		component: SearchComponent,
		data: { stateName: 'search', index: 5 }
	},
	{
		path: '**',
		redirectTo: 'not-found',
		pathMatch: 'full',
	},
	{
		path: 'not-found',
		component: PageNotFoundComponent,
		data: { stateName: 'not-found', index: 0 }
	}
];
