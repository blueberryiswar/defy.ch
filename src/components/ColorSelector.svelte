<script>
    let selectedColor = $state("")
    const colors = ["gray", "amber", "emerald", "cyan", "indigo", "purple", "rose"]
    let {label = "Color", field="color", modifier="500"} = $props()

    function assignThis(e) {
        console.log("Color: ", e.target.dataset.color)
        selectedColor = e.target.dataset.color;
    }
</script>

<div>
    <label for={field}>{label}</label>
    <input name={field} type="hidden" value={selectedColor}>
</div>
<div class="flex items-center gap-1">
    {#each colors as color}
        <button class="bg-{color}-{modifier} w-1/8 h-6" data-color="bg-{color}-{modifier}" aria-label={color} onclick="{(e) => assignThis(e)}" ></button>
    {/each}
</div>

<div class="hidden">
    <div class="bg-emerald-600"></div>
    <div class="bg-cyan-600"></div>
    <div class="bg-indigo-600"></div>
    <div class="bg-purple-600"></div>
    <div class="bg-rose-600"></div>
</div>