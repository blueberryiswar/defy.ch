<div class="container aspect-90/94 w-80 rounded-sm">
    <div class="bt"></div>
</div>


<style>
    div.container {
        display: grid;
        grid-template-columns: 3% 4% 2% 10% 8% 15% auto 15% 2% 4% 3%;
        grid-template-rows: 6% 3% auto 7% 2% 23% 5%;
        grid-template-areas:
            "btl btl btl e e e e e btr btr btr"
            "blo . bli e e e e e bri . bro"
            "bl bl bl e e e e e bra bra bra"
            "bm bm bm bm bm bm bm bm bm bm bm"
            "bbl bbl bbl bbl ct ct ct bbi bbr bbr bbr"
            "bbl bbl bbl bbl ct bbo ct bbi bbr bbr bbr"
            "bbl bbl bbl bbl ct ct ct bbi bbr bbr bbr";
    }

    div.btr, div.btl, div.bli, div.blo {
        @apply bg-black;
    }
    
    div.btr {
        grid-area: "btr";
    }

    div.e {
        grid-area: "e";
        @apply bg-white;
    }
</style>