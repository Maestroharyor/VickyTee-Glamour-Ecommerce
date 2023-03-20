import { writable } from 'svelte/store';

interface StoreState {
	isDarkMode: boolean;
}

const initialState: StoreState = {
	isDarkMode: false
};

export const store = writable<StoreState>(initialState);
