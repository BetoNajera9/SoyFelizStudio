<template>
	<pop-up
		v-if="announceStatus === true"
		@closen="changeAnnounceStatus"
		:data="popUpData"
	/>
	<div
		class="fixed bottom-0 right-0 z-[99] mx-5 md:mx-[4.5rem] my-5 md:my-16 xl:m-28 cursor-pointer"
	>
		<div class="sticky">
			<a href="#budget">
				<nuxt-img
					@mouseover="selectImage = happyFaceHover"
					@mouseleave="selectImage = happyFace"
					alt="soy feliz studio"
					:src="selectImage"
					format="webp"
				/>
			</a>
		</div>
	</div>
	<navigation-bar />
	<section
		class="lg:mt-10 h-[90vh] max-w-5xl lg:mx-auto lg:h-[36rem] scroll-mt-[110px]"
		id="home"
	>
		<iframe
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			src="https://www.youtube.com/embed/nmIYXG8jlbw"
			class="w-full h-full"
			frameborder="0"
		/>
	</section>

	<section class="scroll-mt-[70px]" id="we">
		<we />
	</section>

	<section class="scroll-mt-[70px]" id="galery">
		<instagram-feed />
	</section>

	<section class="scroll-mt-[70px]" id="artists">
		<artist />
	</section>

	<section class="scroll-mt-[70px]" id="budget">
		<budget @closen="changeAnnounceStatus" />
	</section>

	<section class="scroll-mt-[-20px]" id="contact">
		<contact />
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavigationBar from './components/navigation-bar.vue'
import InstagramFeed from './components/instagram-feed.vue'
import Contact from './components/contact.vue'
import Artist from './components/artists.vue'
import Budget from './components/budget.vue'
import PopUp from './components/pop-up.vue'
import We from './components/we.vue'

export default defineComponent({
	components: {
		InstagramFeed,
		NavigationBar,
		Contact,
		Budget,
		Artist,
		PopUp,
		We,
	},

	setup() {
		const announceStatus = ref(true)

		const popUpData = ref('home')
		const changeAnnounceStatus = (data: string) => {
			announceStatus.value = !announceStatus.value
			if (data) popUpData.value = data
		}

		const happyFaceHover = '/images/soyFelizStudio/happy-face-hover.png'
		const happyFace = '/images/soyFelizStudio/happy-face.png'

		const selectImage = ref(happyFace)

		return {
			changeAnnounceStatus,
			announceStatus,
			happyFaceHover,
			selectImage,
			happyFace,
			popUpData,
		}
	},
})
</script>
