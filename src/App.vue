<template>
	<pop-up v-if="announceStatus === true" @closen="changeAnnounceStatus" />
	<navigation-bar />
	<iframe
		class="w-full h-screen"
		src="https://www.youtube.com/embed/yQstboNNj8w"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	/>
</template>
2

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavigationBar from './components/navigation-bar.vue'
import PopUp from './components/pop-up.vue'

export default defineComponent({
	components: { NavigationBar, PopUp },
	setup() {
		const announceStatus = ref(true)

		const changeAnnounceStatus = () => {
			announceStatus.value = !announceStatus.value
		}

		return { announceStatus, changeAnnounceStatus }
	},
})
</script>
