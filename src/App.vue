<template>
	<pop-up
		v-if="announceStatus === true"
		@closen="changeAnnounceStatus"
		:data="popUpData"
	/>
	<navigation-bar />
	<iframe
		class="w-full h-screen"
		src="https://www.youtube.com/embed/yQstboNNj8w"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	/>
	<we />
	<artist />
	<budget @closen="changeAnnounceStatus" />
	<contact />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavigationBar from './components/navigation-bar.vue'
import Contact from './components/contact.vue'
import Artist from './components/artists.vue'
import Budget from './components/budget.vue'
import PopUp from './components/pop-up.vue'
import We from './components/we.vue'

export default defineComponent({
	components: { NavigationBar, Contact, Budget, Artist, PopUp, We },
	setup() {
		const announceStatus = ref(true)

		const popUpData = ref('home')
		const changeAnnounceStatus = (data: string) => {
			console.log('🚀 ~ file: App.vue:36 ~ changeAnnounceStatus ~ data:', data)
			announceStatus.value = !announceStatus.value
			if (data) popUpData.value = data
		}

		return { announceStatus, changeAnnounceStatus, popUpData }
	},
})
</script>
