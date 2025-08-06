<script>
	import ImageUpload from "./ImageUpload.svelte";
</script>
<main>
	<h2>Add Game</h2>
  
    <div class="gameform my-5">
        <div class="text-center bold">Cover Image</div>
        <div class="text-center bold">Gameplay Screenshot/Clip</div>
        <ImageUpload altText="Cover Image Preview" imageName="cover" />
        <ImageUpload altText="Cover Image Preview" imageName="clip" />
    </div>
    

</main>
<style>
	.gameform {
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: auto 300px;
        gap: 10px;
    }
</style>
