<template>
	<div class="my-5 max-w-5xl mx-5 lg:mx-auto">
		<transition name="translateX">
			<div
				class="flex flex-col w-screen h-screen top-0 left-0 fixed z-[100] bg-white p-5"
				v-show="selectArtist"
			>
				<div class="w-full flex justify-end">
					<mdicon
						@click="selectArtist = false"
						class="text-black cursor-pointer"
						id="btn-close"
						name="close"
					/>
				</div>
				<span class="text-4xl h-auto">{{ artistSelected.name }}</span>
				<div class="">
					<span>{{ artistSelected.profile }}</span>
				</div>
				<br />
				<p class="text-left">
					{{ artistSelected.description }}
				</p>
				<div class="px-20 py-5">
					<img
						:src="`/src/assets/images/desktop/artists/${artistSelected.image}`"
						alt=""
					/>
				</div>
			</div>
		</transition>
		<span class="text-4xl lg:text-6xl mx-10">
			AR<span class="text-red">T</span>IS<span class="text-red">T</span>AS
		</span>

		<carousel v-bind="settings" :breakpoints="breakpoints">
			<slide
				class="flex flex-col justify-start"
				v-if="this.$vssWidth >= 1024"
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
				v-if="this.$vssWidth < 1024"
				:key="index"
			>
				<div class="grid grid-cols-2">
					<artist-card
						:description="artist.description"
						@click="clickArtist(artist)"
						v-for="artist in artistArray"
						:profile="artist.profile"
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
import ArtistData from '../../data.json'

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
