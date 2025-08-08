<script>
	import ImageUpload from "./ImageUpload.svelte";
    import ColorSelector from "./ColorSelector.svelte";
</script>
<main>
	<h2>Add Game</h2>
  
    <form>
        <div class="gameform my-5 gap-4">
            <div class="flex items-center text-center text-md">
                <label for="title" >Title</label>
            </div>
            <div>
                <input type="text">
            </div>
            <div class="text-center bold">Cover Image</div>
            <div class="text-center bold">Gameplay Screenshot/Clip</div>
            <ImageUpload altText="Cover Image Preview" imageName="cover" />
            <ImageUpload altText="Cover Image Preview" imageName="clip" />
            <ColorSelector label="Disk color" field="diskColor" modifier="600" />

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
