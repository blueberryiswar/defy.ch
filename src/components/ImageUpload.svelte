<script>
	let preview = $state(false);
    let fileinput = {};
    let { altText = "Image preview", imageName = "image" } = $props();
	
    const onFileSelected =(e)=>{
        let upload = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(upload);
        reader.onload = e => {
            if(e.target && e.target.result) preview = e.target.result
        };
    }
</script>

<div> 
    {#if preview}
        <img class="preview" src="{preview}" alt="{altText}" />
        {:else}
        <button class="px-3 py-2 rounded bg-sky-500 dark:bg-sky-800 text-black dark:text-white transition" 
            onclick={()=>{fileinput.click();}}
        >Choose Image</button>
    {/if}
    <input name={imageName} style="display:none" type="file" accept=".jpg, .jpeg, .gif, .png" onchange={(e)=>onFileSelected(e)} bind:this={fileinput} >
</div>

<style>
	div{
	    display:flex;
        width: 100%;
        height: 100%;
		align-items:center;
		justify-content:center;
		flex-flow:column;
    }
 
	.preview{
		display:flex;
		max-height: 100%;
        max-width: 100%;
	}
</style>
