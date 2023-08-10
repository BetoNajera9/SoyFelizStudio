<template>
	<div class="mt-20 max-w-5xl md:mx-5 lg:mx-auto">
		<transition name="translateX">
			<div
				class="flex flex-col w-screen h-screen top-0 left-0 fixed z-[100] bg-white"
				v-show="selectArtist"
			>
				<div class="w-full flex justify-end pt-5 px-5">
					<Icon
						class="text-black cursor-pointer"
						@click="selectArtist = false"
						name="ep:close"
						size="24"
					/>
				</div>
				<span class="text-left text-4xl h-auto px-5">{{
					artistSelected.name
				}}</span>
				<div class="px-5">
					<a
						:href="`https://www.instagram.com/${artistSelected?.profile?.replace(
							'@',
							''
						)}/`"
					>
						<span>{{ artistSelected.profile }}</span>
					</a>
				</div>
				<br />
				<p class="text-left leading-none px-5">
					{{ artistSelected.description }}
				</p>
				<div class="py-5">
					<nuxt-img
						:alt="`soy feliz studio ${artistSelected.image} ${artistSelected.profile}`"
						:src="`/images/artists/${artistSelected.image}`"
						format="webp"
					/>
				</div>
			</div>
		</transition>

		<span class="text-4xl lg:text-6xl mx-10 font-grold-black">
			AR<span class="text-red">T</span>IS<span class="text-red">T</span>AS
		</span>
		<carousel v-bind="settings" :breakpoints="breakpoints">
			<slide
				v-if="$viewport.isGreaterOrEquals('desktop')"
				v-for="artist in artists"
				:key="artist.name"
			>
				<artist-card
					:description="artist.description"
					:profile="artist.profile"
					:image="artist.image"
					:name="artist.name"
				/>
			</slide>

			<slide
				v-for="(artistArray, index) in mobileArtists"
				class="flex flex-col justify-start px-8"
				v-if="$viewport.isLessThan('desktop')"
				:key="index"
			>
				<div class="grid grid-cols-2">
					<artist-card
						:description="artist.description"
						@click="clickArtist(artist)"
						v-for="artist in artistArray"
						:profile="artist.profile"
						class="cursor-pointer"
						:image="artist.image"
						:name="artist.name"
						:key="index"
					/>
				</div>
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
import { VueScreenSizeMixin } from 'vue-screen-size'
import { ref } from 'vue'

import ArtistCard from './artist-card.vue'
import ArtistData from '../data.json'

import 'vue3-carousel/dist/carousel.css'

export default {
	components: {
		Pagination,
		Navigation,
		ArtistCard,
		Carousel,
		Slide,
	},

	mixins: [VueScreenSizeMixin],

	setup() {
		const artists = ArtistData.artists
		const mobileArtists = []

		for (let indexA = 0; indexA < Math.ceil(artists.length / 6); indexA++) {
			const x = []

			for (let index = 0; index < 6; index++)
				if (indexA * 6 + index < artists.length)
					x.push(artists[indexA * 6 + index])

			mobileArtists.push(x)
		}

		const settings = {
			itemsToShow: 1,
			snapAlign: 'center',
		}

		const breakpoints = {
			1024: {
				itemsToShow: 3,
				snapAlign: 'start',
			},
		}

		const selectArtist = ref(false)
		const artistSelected = ref({})

		const clickArtist = (artist) => {
			selectArtist.value = true
			artistSelected.value = artist
		}

		return {
			artistSelected,
			mobileArtists,
			selectArtist,
			breakpoints,
			clickArtist,
			settings,
			artists,
		}
	},
}
</script>

<style scoped>
.carousel__slide {
	display: flex;
	align-items: flex-start;
}
</style>
