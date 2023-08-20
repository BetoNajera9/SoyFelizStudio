<template>
	<div class="flex flex-col">
		<div class="mx-7">
			<nuxt-img
				:alt="`soy feliz studio ${name} ${profile}`"
				:src="`/images/artists/${image}`"
				format="webp"
			/>
		</div>
		<div class="hidden lg:flex items-start mt-5">
			<nuxt-img
				src="/images/soyFelizStudio/spark.png"
				alt="soy feliz studio spark"
				class="pt-1"
				format="webp"
			/>
			<span class="text-left text-4xl my-auto leading-none align-middle">{{
				name
			}}</span>
		</div>
		<div class="hidden lg:block mr-auto mx-7 leading-none">
			<a :href="`https://www.instagram.com/${profile.replace('@', '')}/`">
				<span>{{ profile }}</span>
			</a>
		</div>
		<p class="hidden lg:block text-left mt-7 mx-7 leading-none">
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
