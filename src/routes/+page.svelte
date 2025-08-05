<script>
    import LightButton from "../components/LightButton.svelte"
    import Floppy from "../components/Floppy.svelte"
    import '../app.css'
</script>

<div class="container w-360 mx-auto shadow-md relative bg-gray-200 dark:bg-gray-800 dark:shadow-cyan-500/50">
    <LightButton />
    <header class="py-20 px-50">
        
        <h1>Defy Channel</h1>

        <p class="py-20">Welcome to our little page.</p>

    </header>

    <main class="py-10">
        <h2>Games</h2>
        <div class="py-10 grid gap-4 grid-cols-3">
            <Floppy cart="bg-gray-300" floppy="bg-gray-900" darkFloppy="bg-black" cover="https://trashmob.ch/template/bernemup.png" />
            <Floppy cover="https://trashmob.ch/template/lastGif.gif" />
            <Floppy cart="bg-gray-300" floppy="bg-red-500" darkFloppy="bg-red-600"/>
            <Floppy cover="https://cdn.mobygames.com/covers/6676712-the-legend-of-zelda-nes-front-cover.jpg"/>
            <Floppy />
            <Floppy />
            <Floppy />
        </div>
        
    </main>

    <footer>
        <p class="text-right text-gray-400">Made with ❤️</p>
    </footer>
</div>

<style>
    
</style>