<template>
	<div class="h-[90%] max-w-5xl mx-5 lg:mx-auto">
		<section class="flex pb-52 mt-10">
			<div class="max-w-sm">
				<img
					src="/src/assets/images/desktop/home/logo.png"
					alt="soy feliz studio logo"
				/>
			</div>
			<!-- <p class="text-6xl absolute bottom-[0%]">
			AR<span class="text-red">T</span>IS<span class="text-red">T</span>AS
			<br />
			INCREÍB<span class="text-red">L</span>ES <br />
			PIEZAS ÚN<span class="text-red">I</span>CAS <br />
			C<span class="text-red">L</span>IENTES
			<span class="text-red">F</span>ELICES
		</p> -->
			<div>
				<div class="text-6xl mb-4">NOSO<span class="text-red">T</span>ROS</div>
				<p class="text-6xl leading-none">
					¡EN SOY <span class="text-red">F</span>ELIZ
					<br />
					LLEVAMOS
					<br />
					EL AR<span class="text-red">TE</span> EN
					<br />
					LA PIE<span class="text-red">L</span> DESDE
					<br />
					HACE CERCA
					<br />
					DE 10 AÑOS!
					<br />
				</p>
				<p class="leading-none mt-5 font-light tracking-wider">
					Localizados en el corazón de la ciudad de méxico; <br />
					un espacio multidisciplinario que fomenta el <br />
					crecimiento artístico y creativo, mientras buscamos <br />la felicidad
					de nuestros clientes.
				</p>
			</div>
			<div class="flex flex-col w-72">
				<div class="">
					<img
						src="/src/assets/images/desktop/home/galery.png"
						alt="soy feliz studio tatto"
						class="mb-6"
					/>
					<div class="">
						<img
							src="/src/assets/images/desktop/home/tatto01.png"
							alt="soy feliz studio tatto"
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="my-10">
			<carousel>
				<slide v-for="slide in 10" :key="slide">
					<div class=".carousel__item flex px-20">
						<img
							class="w-1/2"
							src="/src/assets/images/desktop/home/tatto02.png"
							alt=""
						/>
						<div class="flex flex-col pt-20">
							<div class="flex items-center">
								<img
									class="scale-[.30]"
									src="/src/assets/images/desktop/menu/spark.png"
									alt="spark"
								/>
								<span class="text-left text-4xl">Prensa</span>
							</div>
							<div class="ml-16 mt-5">
								<p class="text-left">
									<p class="text-4xl">
									10 cuentas de instagram de tatuadores mexicanos para tu
									próxima sesión
									</p>
									En la actualidad, los tatuajes en México son un
									estilo de vida que refuerzan la identidad de una persona,
									población e incluso historia.
								</p>
								<div class="flex my-9">
									<button class="bg-black text-white py-2 px-3 rounded">
										VER MÁS
									</button>
								</div>
							</div>
						</div>
					</div>
				</slide>

				<template #addons>
					<navigation />
					<pagination />
				</template>
			</carousel>
		</section>
	</div>
</template>

<script>
// import comp from '@vue/composition-api'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
	components: {
		Pagination,
		Navigation,
		Carousel,
		Slide,
	},

	setup() {
		return {}
	},
}
</script>

<style>
.carousel__item {
	min-height: 200px;
	width: 100%;
	background-color: var(--vc-clr-primary);
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
