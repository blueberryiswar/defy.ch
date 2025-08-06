<script lang="ts">
	import { enhance } from '$app/forms';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { PageServerData } from './$types';
	import NewEntry from '../../components/NewEntry.svelte';

	let { data }: { data: PageServerData } = $props();
	console.log(data.games)
	data.games.then((result) => {console.log(result)})
</script>

<Header />

<main>

	<h1>Hi, {data.user.username}!</h1>
	<p>Your user ID is {data.user.id}.</p>
	<form method="post" action="?/logout" use:enhance>
		<button>Sign out</button>
	</form>

</main>

<NewEntry />

<Footer />