import User from '$lib/types/user';
import user

export async function POST({ request }) {
	const { username, password } = await request.json();

	return new Response(JSON.stringify({ username, password }));
}

