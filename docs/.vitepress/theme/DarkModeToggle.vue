<template>
	<div class="ml-6 flex">
		<div class="mr-2 text-xs">
			<svg
				class="w-6 h-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		</div>
		<div
			class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
		>
			<input
				id="toggle"
				type="checkbox"
				name="toggle"
				:checked="darkMode"
				class="toggle-checkbox"
				@change="onHandleChangeDarkMode"
			/>
			<label for="toggle" class="toggle-label">toggle</label>
		</div>
		<div class="text-xs">
			<svg
				class="w-6 h-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		</div>
	</div>
</template>

<script setup>
import { watch, ref } from 'vue'
import mode from './darkMode'

const darkMode = ref(true)

watch(darkMode, () => {
	if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		mode.setMode('dark')
		darkMode.value = true
		const el = document.querySelector('body')
		el && el.classList.remove('light-theme')
	} else {
		mode.setMode('light')
		darkMode.value = false
		const el = document.querySelector('body')
		el && el.classList.add('light-theme')
	}
})

function onHandleChangeDarkMode() { // eslint-disable-line no-unused-vars
	if (darkMode.value) {
		localStorage.setItem('theme', 'light')
		darkMode.value = false
	} else {
		localStorage.setItem('theme', 'dark')
		darkMode.value = true
	}
}
</script>

<style scoped>
.toggle-checkbox {
	@apply absolute
    block w-6 h-6
    rounded-full appearance-none cursor-pointer focus:outline-none
    dark:bg-white border-4 dark:border-gray-400
    bg-gray-500 border-gray-100;
}

.toggle-checkbox:checked {
	@apply right-0 border-gray-400;
}

.toggle-label {
	@apply block h-6 align-middle overflow-hidden
    text-gray-100 bg-gray-100
    dark:text-gray-400 dark:bg-gray-400
    dark:border-gray-400 border-gray-100
    rounded-full cursor-pointer
    border-2;
}
</style>