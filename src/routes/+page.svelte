<script>
    import LightButton from "../components/LightButton.svelte"
    import Floppy from "../components/Floppy.svelte"
    import '../app.css'
</script>

<LightButton />

<header class="py-40 px-50">
    <h1>Defy Channel</h1>

    <p class="py-20">Welcome to our little page.</p>

</header>

<main>
    <h2>Games</h2>
    <div class="py-10 grid gap-4 grid-cols-3">
        <Floppy />
        <Floppy />
        <Floppy />
        <Floppy />
        <Floppy />
        <Floppy />
        <Floppy />
    </div>
    
</main>

<footer>
    <p class="text-right text-gray-400">Made with ❤️</p>
</footer>

<style>
    
</style>