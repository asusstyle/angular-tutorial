import { Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { TravelComponent } from "./travel/travel.component";
import { LifestyleComponent } from "./lifestyle/lifestyle.component";
import { ProtectionComponent } from "./protection/protection.component";
import { BenefitDetailComponent } from "./benefit-detail/benefit-detail.component";

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'travel',
		pathMatch: 'full'
	},
	{
		path: 'travel',
		component: TravelComponent,
		data: { stateName: 'travel', index: 0 }
	},
	{
		path: 'lifestyle',
		component: LifestyleComponent,
		data: { stateName: 'lifestyle', index: 1 }
	},
	{
		path: 'protection',
		component: ProtectionComponent,
		data: { stateName: 'protection', index: 2 }
	},
	{
		path: 'benefit/:section/:id',
		component: BenefitDetailComponent,
		data: { stateName: 'benefit-details', index: 3 }
	}
];
