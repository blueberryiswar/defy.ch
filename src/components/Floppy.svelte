<script>
    let { 
        cover = "https://trashmob.ch/template/octout.png",
        cart = "bg-gray-600",
        floppy = "bg-sky-500",
        darkFloppy = "bg-sky-600"
     } = $props();

     
    const disk = document.querySelector('.floppy');
    let bounds = {x:0,y:0};

    function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    disk.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)* 2}deg
        )
    `;
    
    disk.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
        circle at
        ${center.x * 2 + bounds.width/2}px
        ${center.y * 2 + bounds.height/2}px,
        #ffffff55,
        #0000000f
        )
    `;
    }

    disk.addEventListener('mouseenter', () => {
        bounds = disk.getBoundingClientRect();
        document.addEventListener('mousemove', rotateToMouse);
    });

    disk.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    disk.style.transform = '';
    disk.style.background = '';
    });
</script>

<div class="floppy aspect-90/94 w-80 drop-shadow-xs">
    <div class="leftside">
        <div class="row-1 col-span-full {floppy} rounded-tl-lg"></div>
        <div class="row-2 col-1 {floppy}"></div>
        <div class="row-2 col-2 inset-shadow-sm/30"></div>
        <div class="row-2 col-3 {floppy}"></div>
        <div class="row-3 col-span-full {floppy}"></div>
    </div>
    
        <img class="etiquette inset-shadow-sm/25 object-cover" src={cover} alt="Game Cover Artwork">
 
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
    <div class="glow"></div>
</div>


<style>
    

    div.floppy {
        display: grid;
        grid-template-columns: 9% auto 9%;
        grid-template-rows: 62% 5% 33%;
        grid-template-areas: 
            "l e r"
            "m m m"
            "b c b";
    }

    div.etiquette {
        grid-area: "e";
        background-color:white;
        object-fit: cover;
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

    .floppy .glow {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
    }
</style>