<template>
	<div
		class="flex flex-col lg:grid grid-cols-3 max-w-5xl mx-5 md:mx-10 lg:mx-auto py-24 md:px-10"
	>
		<div class="flex flex-col">
			<span class="text-4xl lg:text-5xl font-grold-black">
				CON<span class="text-red">T</span>ACTO
			</span>
			<span class="my-2">¡Hagamos arte juntos!</span>
			<span class="my-2 leading-none">
				Te atendemos con gusto de lunes a domingo de 11 am a 8 pm
			</span>
			<span class="my-2 leading-none">
				T. 55 5682 4411 <br />
				WA. 55 6030 5026 <br />
				M.
				<a href="mailto:contacto@soyfelizstudio.com">
					contacto@soyfelizstudio.com
				</a>
			</span>
			<span class="my-2 leading-none">
				Enrique Rébsamen 743, Narvarte Poniente, Benito Juárez,03020 Ciudad de
				México, CDMX
			</span>
			<div class="mt-10 lg:mt-52 flex justify-start">
				<a
					class="mr-5 max-w-[40px]"
					href="https://instagram.com/soyfelizstudio?igshid=NjZiMGI4OTY="
				>
					<nuxt-img
						src="/images/socialNetworks/instagram.png"
						alt="soy feliz studio instagram"
						format="webp"
					/>
				</a>
				<a
					class="mr-5 max-w-[40px]"
					href="https://m.facebook.com/soyfelizstudio/"
				>
					<nuxt-img
						src="/images/socialNetworks/facebook.png"
						alt="soy feliz studio facebook"
						format="webp"
					/>
				</a>
				<a
					class="mr-5 max-w-[40px]"
					href="https://twitter.com/soyfelizstudio?s=21"
				>
					<nuxt-img
						src="/images/socialNetworks/twitter.png"
						alt="soy feliz studio twitter"
						format="webp"
					/>
				</a>
				<a
					class="mr-5 max-w-[40px]"
					href="https://www.tiktok.com/@soyfelizstudio?_t=8WIHIQUzJ4A&_r=1"
				>
					<nuxt-img
						src="/images/socialNetworks/tiktok.png"
						alt="soy feliz studio tiktok"
						format="webp"
					/>
				</a>
			</div>
		</div>
		<div class="h-96 col-span-2 lg:mx-5 mb-5 mt-10 lg:mt-0">
			<div style="width: 100%">
				<iframe
					width="100%"
					height="600"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=soy%20Feliz%20studio+(Your%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				>
					<a href="https://www.gps.ie/sport-gps/">fitness tracker</a>
				</iframe>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	setup() {
		return {
			center: { lat: 19.3886880693077, lng: -99.15996161774267 },
			markers: [
				{
					position: {
						lat: 51.093048,
						lng: 6.84212,
					},
				},
				{
					position: {
						lat: 51.198429,
						lng: 6.69529,
					},
				},
				{
					position: {
						lat: 51.165218,
						lng: 7.067116,
					},
				},
				{
					position: {
						lat: 51.09256,
						lng: 6.84074,
					},
				},
			],
		}
	},
}
</script>
