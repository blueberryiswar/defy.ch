<script>
    let floppy = "bg-sky-500"
    let darkFloppy = "bg-sky-600"
    let cart = "bg-gray-600"
</script>

<div class="floppy aspect-90/94 w-80">
    <div class="leftside">
        <div class="row-1 col-span-full {floppy} rounded-tl-lg"></div>
        <div class="row-2 col-1 {floppy}"></div>
        <div class="row-2 col-3 {floppy}"></div>
        <div class="row-3 col-span-full {floppy}"></div>
    </div>
    <div class="etiquette inset-shadow-sm/25"></div>
    <div class="rightside">
        <div class="row-1 col-span-full {floppy} rounded-tr-lg"></div>
        <div class="row-2 col-1 {floppy}"></div>
        <div class="row-2 col-2 inset-shadow-sm/30 {darkFloppy}"></div>
        <div class="row-2 col-3 {floppy}"></div>
        <div class="row-3 col-span-full {floppy}"></div>
    </div>
    <div class="row-2 col-span-full {floppy}"></div>
    <div class="row-3 col-1 leftcorner">
        <div class="row-1 col-1 {floppy}"></div>
        <div class="row-2 col-1 {floppy} cut"></div>
    </div>
    <div class="row-3 col-2 cart {floppy}">
        <div class="row-span-full col-1 {floppy}"></div>
        <div class="row-1 col-start-2 col-end-5 rounded-tl-lg {cart}"></div>
        <div class="row-2 col-2 {cart}"></div>
        <div class="row-2 col-3 inset-shadow-sm/50 {darkFloppy}"></div>
        <div class="row-2 col-4 {cart}"></div>
        <div class="row-3 col-start-2 col-end-5 {cart}"></div>
        <div class="row-span-full inset-shadow-sm/30 rounded-tr-lg col-5 {darkFloppy}"></div>
    </div>
    <div class="row-3 col-3 {floppy} rounded-br-lg"></div>
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

    div.cut {
        /* to create / play around with polygon: https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/polygon */
        /*clip-path: polygon(0% 0%, 100% 100%, 100% 0%); 45 degree cut */
        clip-path: polygon(0% 30%, 0% 0%, 100% 0%, 100% 100%, 70% 100%);
    }

    div.cart {
        display: grid;
        grid-template-columns: 15% 10% 18% auto 25%; 
        grid-template-rows: 8% auto 10%;
    }

    div.leftcorner {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto 30%;
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