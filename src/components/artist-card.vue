<template>
	<div class="flex flex-col lg:mx-10">
		<div>
			<img :src="`/src/assets/images/desktop/artists/${image}`" alt="" />
		</div>
		<div class="hidden lg:flex items-center mt-5">
			<span class="h-auto w-auto">
				<img src="/src/assets/images/desktop/menu/spark.png" alt="" />
			</span>
			<span class="text-4xl h-auto">{{ name }}</span>
		</div>
		<div class="hidden lg:block mr-auto pl-[25px]">
			<span>{{ profile }}</span>
		</div>
		<p class="hidden lg:block text-left mt-7 pl-[25px]">
			{{ description }}
		</p>
	</div>
</template>

<script lang="ts">
export default {
	props: ['image', 'name', 'profile', 'description'],
	setup() {},
}
</script>
