<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function createEncounter() {
		console.log('createEncounter');
	}
</script>

<div class="flex flex-col items-center justify-between p-10">
	<h1 class="mb-5 text-2xl font-bold">Encounters</h1>

	<button class="mb-10 rounded-sm bg-red-500 p-2 text-white" on:click={createEncounter}>
		New Encounter
	</button>

	<ul class="flex flex-col gap-2">
		{#each data.encounters as encounter}
			<li class="flex justify-between">
				<span>{encounter.name}</span>
				<span>{encounter.created_at}</span>
				<span>{encounter.updated_at}</span>
			</li>
		{/each}
	</ul>
</div>
