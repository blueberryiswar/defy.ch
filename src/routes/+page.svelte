<script>
    import Floppy from "../components/Floppy.svelte"
    import Header from "../components/Header.svelte"
    import Footer from "../components/Footer.svelte"
    import '../app.css'
    const floppies = [
        {cart:"bg-gray-300", floppy:"bg-gray-900", darkFloppy:"bg-black", cover:"https://trashmob.ch/template/bernemup.png"},
        {cover:"https://trashmob.ch/template/lastGif.gif"},
        {cart:"bg-gray-300", floppy:"bg-red-500", darkFloppy:"bg-red-600", cover:"https://trashmob.ch/template/bernemup.png"},
        {cover:"https://trashmob.ch/template/bernemup.png"},
        {cart:"bg-gray-300", floppy:"bg-amber-500", darkFloppy:"bg-amber-600", cover:"https://cdn.mobygames.com/covers/6676712-the-legend-of-zelda-nes-front-cover.jpg"},
        {floppy:"bg-yellow-500", darkFloppy:"bg-yellow-600", cover:"https://sm.ign.com/t/ign_nordic/cover/d/donkey-kon/donkey-kong_t3hw.1200.jpg"},
        {floppy:"bg-purple-500", darkFloppy:"bg-purple-600", cover:"https://trashmob.ch/template/bernemup.png"},
        ]
</script>

    
    <Header />

    <main class="py-10">
        <h2>Games</h2>
        <div class="py-10 grid gap-5 grid-cols-3">
            {#each floppies as floppy}
            <Floppy {...floppy} />
            {/each}
        </div>
        
    </main>

    <Footer />

<style>
    
</style>