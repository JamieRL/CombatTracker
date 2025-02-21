import db from '$database/db';
import { encounters as encountersTable } from '$database/schema/encounters';
import { eq } from 'drizzle-orm';
import type { Encounter } from '$lib/types/encounter';

export async function load(): Promise<{ encounters: Encounter[] }> {
	const encounters = await db.select().from(encountersTable).where(eq(encountersTable.user_id, 1));

	return {
		encounters
	};
}
