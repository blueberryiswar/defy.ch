<script>
    let floppy = "bg-sky-500"
    let cart = "bg-gray-600"
</script>

<div class="floppy aspect-90/94 w-80 rounded-md shadow-lg">
    <div class="leftside">
        <div class="row-1 col-span-full {floppy}"></div>
        <div class="row-2 col-1 {floppy}"></div>
        <div class="row-2 col-3 {floppy}"></div>
        <div class="row-3 col-span-full {floppy}"></div>
    </div>
    <div class="etiquette"></div>
    <div class="rightside">
        <div class="row-1 col-span-full {floppy}"></div>
        <div class="row-2 col-1 {floppy}"></div>
        <div class="row-2 col-3 {floppy}"></div>
        <div class="row-3 col-span-full {floppy}"></div>
    </div>
    <div class="row-2 col-span-full {floppy}"></div>
    <div class="row-3 col-1 {floppy}"></div>
    <div class="row-3 col-2 cart">
        <div class="row-span-full col-1 {floppy}"></div>
        <div class="row-1 col-start-2 col-end-5 {cart}"></div>
        <div class="row-2 col-2 {cart}"></div>
        <div class="row-2 col-3 {floppy}"></div>
        <div class="row-2 col-4 {cart}"></div>
        <div class="row-3 col-start-2 col-end-5 {cart}"></div>
        <div class="row-span-full col-5 {floppy}"></div>
    </div>
    <div class="row-3 col-3 {floppy}"></div>
</div>


<style>
    

    div.floppy {
        display: grid;
        grid-template-columns: 9% auto 9%;
        grid-template-rows: auto 5% 33%;
        grid-template-areas: 
            "l e r"
            "m m m"
            "b c b";
    }

    div.etiquette {
        grid-area: "e";
        background-color:white;
    }

    div.cart {
        display: grid;
        grid-template-columns: 20% 10% 18% auto 18%; 
        grid-template-rows: 8% auto 10%;
    }

    div.leftside {
        grid-area: "l";
        display: grid;
        grid-template-columns: 25% auto 14%;
        grid-template-rows: 10% 8% auto;
        grid-template-areas: 
            "top top top"
            "left . right"
            "bot bot bot";
    }

    div.rightside {
        grid-area: "r";
        display: grid;
        grid-template-columns: 14% auto 25%;
        grid-template-rows: 10% 8% auto;
        grid-template-areas: 
            "t t t"
            "l . r"
            "b b b";
    }
</style>