import client from './client';

interface Encounter {
	id: string;
	// Add other encounter properties here
	// For example:
	name: string;
	date: string;
	notes?: string;
	// etc...
}

interface CreateEncounterData {
	name: string;
	date: string;
	notes?: string;
	// Add other required fields for creating an encounter
}

type UpdateEncounterData = Partial<CreateEncounterData>;

export function encounters() {
	// Get all encounters
	function list(): Promise<Encounter[]> {
		return client.get<Encounter[]>('/encounters');
	}

	// Get a single encounter by ID
	function show(id: string): Promise<Encounter> {
		return client.get<Encounter>(`/encounters/${id}`);
	}

	// Create a new encounter
	function create(data: CreateEncounterData): Promise<Encounter> {
		return client.post<Encounter, CreateEncounterData>('/encounters', data);
	}

	// Update an encounter
	function update(id: string, data: UpdateEncounterData): Promise<Encounter> {
		return client.put<Encounter, UpdateEncounterData>(`/encounters/${id}`, data);
	}

	// Delete an encounter
	function destroy(id: string): Promise<void> {
		return client.delete<void>(`/encounters/${id}`);
	}

	return {
		list,
		show,
		create,
		update,
		destroy,
	};
}