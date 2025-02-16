import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import db from '$database/db';
import { sql } from 'drizzle-orm';

export const GET: RequestHandler = async () => {
    try {
        const encounters = await db.execute(sql`SELECT * FROM encounters`);
        
        return json(encounters);
    } catch (error) {
        console.error('Error fetching encounters:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
};
