import client from '$lib/api/client';

export default {
	async login(username: string, password: string) {
		return client.post('/api/login', { username, password });
	}
};
