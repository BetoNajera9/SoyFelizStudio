<template>
	<div class="flex flex-col lg:mx-10">
		<div>
			<nuxt-img
				:alt="`soy feliz studio ${name} ${profile}`"
				:src="`/images/artists/${image}`"
				format="webp"
			/>
		</div>
		<div class="hidden lg:flex items-center mt-5">
			<span class="h-auto w-auto">
				<nuxt-img
					src="/images/soyFelizStudio/spark.png"
					alt="soy feliz studio spark"
					format="webp"
				/>
			</span>
			<span class="text-left text-4xl h-auto">{{ name }}</span>
		</div>
		<div class="hidden lg:block mr-auto pl-[25px] leading-none">
			<a :href="`https://www.instagram.com/${profile.replace('@', '')}/`">
				<span>{{ profile }}</span>
			</a>
		</div>
		<p class="hidden lg:block text-left mt-7 pl-[25px] leading-none">
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
