<script lang="ts">
	import { browser } from '$app/environment';
	import { store } from '../../store';
	import { getTheme, setDarkTheme, setLightTheme } from '../../utils/theme';
	let theme = getTheme();
	let isDarkTheme = theme === 'light' ? false : true;

	store.subscribe((data) => {
		isDarkTheme = data.isDarkMode;
	});

	const changeTheme = () => {
		if (isDarkTheme) {
			setLightTheme();
			store.update((currentState) => {
				return { ...currentState, isDarkMode: false };
			});
		} else {
			setDarkTheme();
			store.update((currentState) => {
				return { ...currentState, isDarkMode: true };
			});
		}
	};
</script>

<div class="flex items-center h-[25px] overflow-hidden">
	<input
		type="checkbox"
		id="toggle_checkbox"
		class="hidden"
		checked={isDarkTheme}
		on:click={changeTheme}
	/>

	<label
		for="toggle_checkbox"
		class="mt-[23px] block top-1/2 right-0 left-0 w-[60px] h-full bg-gray-700 dark:bg-gray-200 rounded-full transform -translate-y-1/2 cursor-pointer transition duration-300 ease-in-out overflow-hidden"
	>
		<div id="star">
			<div class="star" id="star-1">★</div>
			<div class="star" id="star-2">★</div>
		</div>
		<div id="moon" />
	</label>
</div>

<style>
	/* label {
		display: block;
		top: 50%;
		right: 0;
		left: 0;
		width: 60px;
		height: 100%;
		background-color: #77b5fe;
		border-radius: 56px;
		transform: translateY(-50%);
		cursor: pointer;
		transition: 0.3s ease background-color;
		overflow: hidden;
	} */

	#star {
		position: absolute;
		top: 4px;
		left: 8px;
		width: 15px;
		height: 15px;
		background-color: #fafd0f;
		transform: scale(0.8);
		border-radius: 50%;
		transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
		z-index: 1;
	}

	#star-1 {
		position: relative;
	}

	#star-2 {
		position: absolute;
		transform: rotateZ(36deg);
	}

	.star {
		top: -6px;
		left: -4px;
		font-size: 24px;
		line-height: 28px;
		color: #fafd0f;
		transition: 0.3s ease color;
	}

	#moon {
		position: absolute;
		bottom: -52px;
		right: 8px;
		width: 20px;
		height: 20px;
		background-color: #fff;
		border-radius: 50%;
		transition: 0.3s ease bottom;
	}

	#moon:before {
		content: '';
		position: absolute;
		top: -12px;
		left: -17px;
		width: 31px;
		height: 29px;
		background-color: #03a9f4;
		border-radius: 50%;
		transition: 0.3s ease background-color;
	}

	#toggle_checkbox:checked + label {
		background-color: #000;
	}

	#toggle_checkbox:checked + label #star {
		top: 2px;
		left: 29px;
		transform: scale(0.4);
		background-color: yellow;
	}

	#toggle_checkbox:checked + label .star {
		color: yellow;
	}

	#toggle_checkbox:checked + label #moon {
		bottom: 3px;
	}

	#toggle_checkbox:checked + label #moon:before {
		background-color: #000;
	}
</style>
