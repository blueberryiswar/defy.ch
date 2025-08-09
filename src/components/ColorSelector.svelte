<script>
    const colors = ["gray", "amber", "emerald", "cyan", "indigo", "purple", "rose"]
    let selected = $state(colors[0])

    
    let {label = "Color", field="color", modifier="500"} = $props()

</script>

<div>
    <label for={field}>{label}</label>
    <input name={field} type="hidden" value={selected}>
</div>
<div class="flex items-center gap-1">
    {#each colors as color}
        <div class="{selected === color ? 'active' : ''} color-select bg-{color}-{modifier} w-1/8 h-6" data-color="{color}" data-modifier={modifier} role="button" aria-label={color} onclick="{() => selected = color}" ></div>
    {/each}
</div>

<div class="hidden">
    <div class="bg-emerald-600"></div>
    <div class="bg-cyan-600"></div>
    <div class="bg-indigo-600"></div>
    <div class="bg-purple-600"></div>
    <div class="bg-rose-600"></div>
</div>

<style>

    .color-select {
        cursor: pointer;
    }
    .active {
        border: 2px white solid;
        
    }
</style>