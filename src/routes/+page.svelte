<script lang="ts">
	import { onMount } from 'svelte';

	let tables: string[] = [];

	onMount(async () => {
		const res = await fetch('http://localhost:3001/api/tables');
		tables = await res.json();
	});
</script>

<h1>Database Tables</h1>

<ul>
	{#each tables as table}
		<li>{table}</li>
	{/each}
</ul>
