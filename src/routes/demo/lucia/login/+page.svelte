<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import Header from '../../../../components/Header.svelte';
	import Footer from '../../../../components/Footer.svelte';

	let { form }: { form: ActionData } = $props();
</script>

<Header />
<main>
	
	
	<form method="post" action="?/login" use:enhance>
		<div class="container mx-auto w-100">
			<h2 class="mb-4">Login/Register</h2>
			<div class="grid gap-4 items-center">
					<label class="text-xl" for="username">
						Username
					</label>
	
				

				<input
						name="username"
						class="mt-1 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				<label class="text-xl" for="password">
				Password
				</label>
				<input
					type="password"
					name="password"
					class="basis-64 mt-1 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			
				<div class="col-span-full justify-center flex justify-items-center gap-4">
					<button class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
					>Login</button
				>
					<button
						formaction="?/register"
						class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
						>Register</button
					>
				</div>
			</div>
			
			<p class="py-4 px-5" style="color: red">{form?.message ?? ''}</p>
		</div>
	</form>
	
</main>


<Footer />

<style>

	div.grid {
		display: grid;
		grid-template-columns: max-content max-content;
	}

</style>