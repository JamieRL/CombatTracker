<div class="flex justify-between items-center flex-col p-10">
    <h1 class="text-2xl font-bold mb-5">Encounters</h1>
    <button
		class="bg-red-500 text-white p-2 rounded-sm mb-10"
		onclick={createEncounter}
	>
			New Encounter
	</button>
	<ul class="">
		{#each encounters as encounter}
			<li>{encounter.name}</li>
		{/each}
	</ul>
</div>



<script>
	const encounters = [
		{ name: 'Encounter 1' },
		{ name: 'Encounter 2' },
		{ name: 'Encounter 3' },
	];

    function createEncounter() {
        console.log('createEncounter');
    }
</script>