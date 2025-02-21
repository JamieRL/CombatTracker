<script>
	import loginApi from '$lib/api/login';

	let username = '';
	let password = '';
	let errors = false;

	async function login() {
		errors = false;
		try {
			const response = await loginApi.login(username, password);
		} catch (error) {
			errors = true;
		}
	}
</script>

<div class="flex h-screen flex-col items-center justify-center space-y-5">
	<h1>Welcome to Combat Tracker</h1>

	<input
		type="text"
		placeholder="Username"
		bind:value={username}
		class="border-2 border-gray-300 p-2"
	/>

	<input
		type="password"
		placeholder="Password"
		bind:value={password}
		class="border-2 border-gray-300 p-2"
	/>

	{#if errors}
		<p class="text-red-500">Invalid username or password</p>
	{/if}

	<button on:click={login}>Login</button>
</div>
