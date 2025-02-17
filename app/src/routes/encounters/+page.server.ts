import db from '$database/db';
import { encounters } from '$database/schema/encounters';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('loading encounters');
	const encounterList = await db.select().from(encounters);
	console.log(encounterList);
	return {
		encounters: encounterList
	};
};
