import { json } from '@sveltejs/kit';
import db from '$database/db';
import { encounters } from '$database/schema';

export const GET = async () => {
	try {
		const result = await db.select().from(encounters);
		return json(result);
	} catch (error) {
		console.error('Error fetching encounters:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
