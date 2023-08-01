<template>
	<div class="my-5">
		<span class="text-6xl mx-10">
			AR<span class="text-red">T</span>IS<span class="text-red">T</span>AS
		</span>
		<carousel v-bind="settings" :breakpoints="breakpoints">
			<slide v-for="slide in 10" :key="slide">
				<artist-card />
			</slide>

			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import ArtistCard from './artist-card.vue'

import 'vue3-carousel/dist/carousel.css'

export default {
	components: {
		Pagination,
		Navigation,
		ArtistCard,
		Carousel,
		Slide,
	},

	setup() {
		const settings = {
			itemsToShow: 1,
			snapAlign: 'center',
		}
		// breakpoints are mobile first
		// any settings not specified will fallback to the carousel settings
		const breakpoints = {
			// 700px and up
			700: {
				itemsToShow: 3.5,
				snapAlign: 'center',
			},
			// 1024 and up
			1024: {
				itemsToShow: 3,
				snapAlign: 'start',
			},
		}

		return {
			breakpoints,
			settings,
		}
	},
}
</script>
