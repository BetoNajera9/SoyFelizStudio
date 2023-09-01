<template>
	<div :class="divStyle">
		<section :class="sectionStyle">
			<div class="max-w-sm hidden lg:block">
				<div class="h-full">
					<nuxt-img
						src="/images/soyFelizStudio/logo.png"
						alt="soy feliz studio logo"
						class="px-2"
						format="webp"
					/>
				</div>
				<client-only>
					<p :class="`text-5xl absolute font-grold-black ${absolutePosition}`">
						AR<span class="text-red">T</span>IS<span class="text-red">T</span>AS
						<br />
						INCREÍB<span class="text-red">L</span>ES <br />
						PIEZAS ÚN<span class="text-red">I</span>CAS <br />
						C<span class="text-red">L</span>IENTES
						<span class="text-red">F</span>ELICES
					</p>
				</client-only>
			</div>
			<div class="flex flex-col lg:flex-row">
				<client-only>
					<div>
						<p class="text-4xl lg:text-5xl leading-none font-grold-black">
							¡EN SOY <span class="text-red">F</span>ELIZ
							<br />
							LLEVAMOS
							<br />
							EL AR<span class="text-red">T</span>E EN
							<br />
							LA PIE<span class="text-red">L</span> DESDE
							<br />
							HACE CERCA
							<br />
							DE 10 AÑOS!
							<br />
						</p>
						<p class="leading-none mt-5 font-grold max-w-sm ">
							Localizados en el corazón de la ciudad de méxico; somos un espacio multidisciplinario que fomenta el crecimiento artístico y creativo, mientras buscamos la felicidad de nuestros clientes.
						</p>
					</div>
				</client-only>
				<div class="max-w-sm block lg:hidden mt-5">
					<nuxt-img
						src="/images/soyFelizStudio/logo.png"
						alt="soy feliz studio logo"
						format="webp"
					/>
				</div>
				<div class="hidden lg:flex flex-col w-72 mx-2">
					<nuxt-img
						src="/images/soyFelizStudio/galery.png"
						alt="soy feliz studio tattoo"
						format="webp"
						class="mb-6"
					/>
					<nuxt-img
						src="/images/soyFelizStudio/tatto01.png"
						alt="soy feliz studio tattoo"
						format="webp"
					/>
				</div>
				<client-only>
					<p class="block lg:hidden text-4xl mt-5 font-grold-black">
						AR<span class="text-red">T</span>IS<span class="text-red">T</span>AS
						<br />
						INCREÍB<span class="text-red">L</span>ES <br />
						PIEZAS ÚN<span class="text-red">I</span>CAS <br />
						C<span class="text-red">L</span>IENTES
						<span class="text-red">F</span>ELICES
					</p>
				</client-only>
			</div>
		</section>

		<section>
			<carousel>
				<slide v-for="newData in newsData" :key="newData.title">
					<div class=".carousel__item flex px-0 md:px-20">
						<nuxt-img
							:alt="`soy feliz studio ${newData.title}`"
							:src="`/images/news/${newData.image}`"
							class="w-1/2 hidden lg:block"
							format="webp"
						/>
						<div class="flex flex-col">
							<div class="flex items-start md:ml-7">
								<nuxt-img
									src="/images/soyFelizStudio/spark.png"
									alt="soy feliz studio spark"
									format="webp"
									class="pt-1"
								/>
								<span class="text-left text-3xl lg:text-4xl ml-3">{{newData.title}}</span>
							</div>
							<div class="px-9 md:px-0 md:ml-16 mt-5 flex flex-col items-center lg:justify-start ">
								<client-only>
									<p class="text-left leading-none">
										<p class="text-3xl lg:text-4xl leading-none">
										{{newData.subtitle}}
										</p>
										<br/>
										{{newData.description}}
									</p>
									<div class="flex my-9">
										<a :href="newData.link">
											<button class="bg-black text-white py-2 px-3 rounded">
												VER MÁS
											</button>
										</a>
									</div>
								</client-only>
								<nuxt-img
									:alt="`soy feliz studio ${newData.title}`"
									:src="`/images/news/${newData.image}`"
									class="md-full md:w-1/2 block lg:hidden"
									format="webp"
								/>
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

<script lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import NewsData from '../data.json'

import 'vue3-carousel/dist/carousel.css'

export default {
	components: {
		Pagination,
		Navigation,
		Carousel,
		Slide,
	},

	setup() {
		const config = useRuntimeConfig()
		const newsData = NewsData.news

		const sectionStyle = ref('flex flex-col items-center lg:items-start  lg:flex-row pb-16  lg:pb-36 mt-10')
		const divStyle = ref('max-w-5xl mx-5 lg:mx-auto px-0 md:px-10 mt-20')

		const absolutePosition = ref('top-[1200px]')

		if(!config.public.VIDEO_URL){
			sectionStyle.value = sectionStyle.value.replace('mt-10', 'mt-5')
			divStyle.value = divStyle.value.replace('mt-20', '')
			absolutePosition.value = 'top-[500px]'
		}

		return {
			absolutePosition,
			sectionStyle,
			divStyle,
			newsData
		}
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
