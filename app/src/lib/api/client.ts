const API_PREFIX = '/api';

interface RequestOptions extends RequestInit {
	params?: Record<string, string>;
}

async function handleResponse(response: Response): Promise<unknown> {
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const contentType = response.headers.get('content-type');

	if (contentType && contentType.includes('application/json')) {
		return response.json();
	}

	return response.text();
}

export default {
	async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
		const { params, ...fetchOptions } = options;
		const url = new URL(`${API_PREFIX}${endpoint}`, window.location.origin);

		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				url.searchParams.append(key, value);
			});
		}

		const response = await fetch(url.toString(), {
			method: 'GET',
			...fetchOptions
		});

		return handleResponse(response) as Promise<T>;
	},

	async post<T, D = Record<string, unknown>>(
		endpoint: string,
		data?: D,
		options: RequestOptions = {}
	): Promise<T> {
		const response = await fetch(`${API_PREFIX}${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
			...options
		});

		return handleResponse(response) as Promise<T>;
	},

	async put<T, D = Record<string, unknown>>(
		endpoint: string,
		data?: D,
		options: RequestOptions = {}
	): Promise<T> {
		const response = await fetch(`${API_PREFIX}${endpoint}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
			...options
		});

		return handleResponse(response) as Promise<T>;
	},

	async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
		const response = await fetch(`${API_PREFIX}${endpoint}`, {
			method: 'DELETE',
			...options
		});

		return handleResponse(response) as Promise<T>;
	}
};
