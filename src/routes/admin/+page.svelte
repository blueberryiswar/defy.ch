<script lang="ts">
	import { enhance } from '$app/forms';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { PageServerData } from './$types';
	import ImageUpload from '../../components/ImageUpload.svelte';
	import ColorSelector from '../../components/ColorSelector.svelte';

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


<main>
	<h2>Add Game</h2>
  
    <form method="post" enctype="multipart/form-data" action="?/insert">
        <div class="gameform my-5 gap-4">
            <div class="flex items-center text-center text-md">
                <label for="title" >Title</label>
            </div>
            <div>
                <input name="title" type="text">
            </div>
            <div class="text-center bold">Cover Image</div>
            <div class="text-center bold">Gameplay Screenshot/Clip</div>
            <ImageUpload altText="Cover Image Preview" imageName="cover" />
            <ImageUpload altText="Cover Image Preview" imageName="animation" />
            <ColorSelector label="Disk color" field="diskColor" modifier="600" />
			<input name="modifier" type="hidden" value="600">

            <button
						formaction="?/insert"
						class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
						>Insert</button
					>
        </div>
    </form>
    
    

</main>
<style>

	.gameform {
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: auto auto 300px;
    }

</style>



<Footer />