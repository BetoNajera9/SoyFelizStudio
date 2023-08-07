<template>
	<pop-up
		v-if="announceStatus === true"
		@closen="changeAnnounceStatus"
		:data="popUpData"
	/>
	<navigation-bar />
	<div class="lg:mt-10 h-[90vh] max-w-5xl lg:mx-auto lg:h-[36rem]">
		<iframe
			class="w-full h-full"
			src="https://www.youtube.com/embed/nmIYXG8jlbw"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		/>
	</div>
	<we />
	<instagram-feed />
	<artist />
	<budget @closen="changeAnnounceStatus" />
	<contact />
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

		return { announceStatus, changeAnnounceStatus, popUpData }
	},
})
</script>
