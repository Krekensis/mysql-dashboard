<script lang="ts">
	import {
		SvelteFlow,
		Controls,
		Background,
		NodeResizeControl
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';

	let nodes = $state.raw([
		{
			id: '1',
			data: { label: 'users' },
			position: { x: 0, y: 0 }
		},
		{
			id: '2',
			data: { label: 'orders' },
			position: { x: 250, y: 0 }
		}
	]);

	let edges = $state.raw([
		{
			id: '1-2',
			source: '2',
			target: '1'
		}
	]);
</script>

<div class="flex h-screen bg-[#0f111a] text-gray-200">

	<!-- Sidebar -->
	<aside class="mt-5 ml-4 mb-5 w-64 rounded-xl bg-[#191c29] border-r border-[#1f2333] flex flex-col">

		<div class="px-5 py-4 text-sm font-semibold border-b border-gray-800">
			DATABASE
		</div>

		<div class="flex-1 p-3 space-y-1">
			<div class="px-3 py-2 text-sm rounded-md hover:bg-[#2f354f] cursor-pointer">
				users
			</div>
			<div class="px-3 py-2 text-sm rounded-md hover:bg-[#2f354f] cursor-pointer">
				orders
			</div>
		</div>
	</aside>

	<!-- Canvas -->
	<main class="flex-1">
		<SvelteFlow
			bind:nodes
			bind:edges
			fitView
			class="w-full h-full"
		>
			<Background bgColor="#0f111a" patternColor="#282d4a" gap={30} size={2} />
			<Controls />

		</SvelteFlow>
	</main>

</div>


<style>
	/* Controls panel */
	:global(.svelte-flow__controls) {
		background: #191c29;
		border: 1px solid #2a2f45;
		border-radius: 6px;
	}

	:global(.svelte-flow__controls button) {
		background: #191c29;
		color: #c0caf5;
		border: none;
	}

	:global(.svelte-flow__controls button:hover) {
		background: #2f354f;
	}
</style>