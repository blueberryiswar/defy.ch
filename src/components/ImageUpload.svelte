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

<div class="wrap"> 
    {#if preview}
        <img class="preview" src="{preview}" alt="{altText}" />
        {:else}
        <div role="button" class="fakebutton px-3 py-2 rounded bg-sky-500 dark:bg-sky-800 text-black dark:text-white transition" 
            onclick={()=>{fileinput.click();}}
        >Choose Image</div>
    {/if}
    <input name={imageName} style="display:none" type="file" accept=".jpg, .jpeg, .gif, .png" onchange={(e)=>onFileSelected(e)} bind:this={fileinput} >
    <!-- <input name={imageName + '_base'} type="hidden" value={preview} > -->
</div>

<style>
	div.wrap {
	    display:flex;
        width: 100%;
        height: 100%;
		align-items:center;
		justify-content:center;
		flex-flow:column;
    }

    div.fakebutton {
        cursor: pointer;
    }
 
	.preview{
		display:flex;
		max-height: 100%;
        max-width: 100%;
	}
</style>
