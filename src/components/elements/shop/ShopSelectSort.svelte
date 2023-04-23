<script lang="ts">
	const options = ['Popular', 'Featured', 'Newest', 'Lowest Price', 'Highest Price'];
	let selectedOption = 'Popular';
	let showOptions = false;

	const setShowOption = (value: boolean) => {
		showOptions = value;
	};

	const setSelectedOption = (option: string) => {
		selectedOption = option;
		showOptions = false;
	};

	const onClick = (e: any) => {
		if (
			showOptions &&
			!e.target.matches(
				'.sort_select, .sort_select_container, .sort_select_container svg, .sort_select_container span'
			)
		) {
			showOptions = false;
		}
	};
</script>

<svelte:window on:click={onClick} />
<button class="sort_select relative text-sm focus:outline-none group mt-4 sm:mt-0">
	<div
		class="sort_select_container flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300"
		on:click={() => setShowOption(!showOptions)}
		on:keypress={() => setShowOption(!showOptions)}
	>
		<span class="font-medium"> {selectedOption} </span>
		<svg
			class={`${showOptions ? 'rotate-180' : ''} w-4 h-4 transition duration-300 ease-in-out`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
	<div
		class={`${
			showOptions ? 'flex' : 'hidden'
		} group-focus:flex absolute  z-20 flex-col items-start  w-full pb-1 bg-white shadow-lg rounded"`}
	>
		{#each options as option}
			<button
				class="shop_select_option w-full px-4 py-2 text-left hover:bg-gray-200"
				on:click={() => setSelectedOption(option)}>{option}</button
			>
		{/each}
	</div>
</button>
