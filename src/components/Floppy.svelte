<script>
	import { Spring } from 'svelte/motion';
	import { clamp, round, adjust } from '../helpers/Math.js';

	let {
		cover = 'https://trashmob.ch/template/octout.png',
		cart = 'bg-gray-600',
		floppy = 'bg-sky-500',
		darkFloppy = 'bg-sky-600'
	} = $props();

	// Spring Setup derived from https://github.com/simeydotme/pokemon-cards-css
	const springInteractSettings = { stiffness: 0.066, damping: 0.25 };
	let springRotate = new Spring({ x: 0, y: 0 }, springInteractSettings);
	let springGlare = new Spring({ x: 50, y: 50, o: 0 }, springInteractSettings);
	let interacting = false;

	const interact = (e) => {
		interacting = true;

		if (e.type === 'touchmove') {
			e.clientX = e.touches[0].clientX;
			e.clientY = e.touches[0].clientY;
		}

		const element = e.target.closest(".floppy");
		const rect = element.getBoundingClientRect(); // get element's current size/position
		const absolute = {
			x: e.clientX - rect.left, // get mouse position from left
			y: e.clientY - rect.top // get mouse position from right
		};
		const percent = {
			x: clamp(round((100 / rect.width) * absolute.x)),
			y: clamp(round((100 / rect.height) * absolute.y))
		};
		const center = {
			x: percent.x - 50,
			y: percent.y - 50
		};

		updateSprings(
			{
				x: round(-(center.x / 3.5)),
				y: round(center.y / 2)
			},
			{
				x: round(percent.x),
				y: round(percent.y),
				o: 1
			}
		);
	};

	const interactEnd = (e, delay = 500) => {
		setTimeout(function () {
			const snapStiff = 0.01;
			const snapDamp = 0.06;
			interacting = false;

			springRotate.stiffness = snapStiff;
			springRotate.damping = snapDamp;
			springRotate.set({ x: 0, y: 0 }, { soft: 1 });

			springGlare.stiffness = snapStiff;
			springGlare.damping = snapDamp;
			springGlare.set({ x: 50, y: 50, o: 0 }, { soft: 1 });
		}, delay);
	};

	const updateSprings = (rotate, glare) => {
		springRotate.stiffness = springInteractSettings.stiffness;
		springRotate.damping = springInteractSettings.damping;
		springGlare.stiffness = springInteractSettings.stiffness;
		springGlare.damping = springInteractSettings.damping;

		springRotate.set(rotate);
		springGlare.set(glare);
	};

    

</script>

<div class="floppy aspect-90/94 w-80 drop-shadow-xs"
        onpointermove={interact}
        onmouseout={interactEnd}
        onblur={interactEnd}
        role="presentation"
        style="transform: perspective(600px) rotateX({springRotate.current.x}deg) rotateY({springRotate.current.y}deg);"
      >
	<div class="leftside">
		<div class="col-span-full row-1 {floppy} rounded-tl-lg"></div>
		<div class="col-1 row-2 {floppy}"></div>
		<div class="col-2 row-2 inset-shadow-sm/30"></div>
		<div class="col-3 row-2 {floppy}"></div>
		<div class="col-span-full row-3 {floppy}"></div>
	</div>

	<img class="etiquette object-cover inset-shadow-sm/25" src={cover} alt="Game Cover Artwork" />

	<div class="rightside">
		<div class="col-span-full row-1 {floppy} rounded-tr-lg"></div>
		<div class="col-1 row-2 {floppy}"></div>
		<div class="col-2 row-2 inset-shadow-sm/30 {darkFloppy}"></div>
		<div class="col-3 row-2 {floppy}"></div>
		<div class="col-span-full row-3 {floppy}"></div>
	</div>
	<div class="col-span-full row-2 {floppy}"></div>
	<div class="leftcorner col-1 row-3">
		<div class="col-1 row-1 {floppy}"></div>
		<div class="col-1 row-2 {floppy} cut"></div>
	</div>
	<div class="cart col-2 row-3 {floppy}">
		<div class="col-1 row-span-full {floppy}"></div>
		<div class="col-start-2 col-end-5 row-1 rounded-tl-lg {cart}"></div>
		<div class="col-2 row-2 {cart}"></div>
		<div class="col-3 row-2 inset-shadow-sm/50 {darkFloppy}"></div>
		<div class="col-4 row-2 {cart}"></div>
		<div class="col-start-2 col-end-5 row-3 {cart}"></div>
		<div class="col-5 row-span-full rounded-tr-lg inset-shadow-sm/30 {darkFloppy}"></div>
	</div>
	<div class="col-3 row-3 {floppy} rounded-br-lg"></div>
</div>

<style>
	div.floppy {
		display: grid;
		grid-template-columns: 9% auto 9%;
		grid-template-rows: 62% 5% 33%;
		grid-template-areas:
			'l e r'
			'm m m'
			'b c b';
	}

	div.etiquette {
		grid-area: 'e';
		background-color: white;
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
		grid-area: 'l';
		display: grid;
		grid-template-columns: 25% auto 14%;
		grid-template-rows: 10% 8% auto;
		grid-template-areas:
			'top top top'
			'left . right'
			'bot bot bot';
	}

	div.rightside {
		grid-area: 'r';
		display: grid;
		grid-template-columns: 14% auto 25%;
		grid-template-rows: 10% 8% auto;
		grid-template-areas:
			't t t'
			'l . r'
			'b b b';
	}
</style>
