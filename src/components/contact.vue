<template>
	<div
		class="flex flex-col lg:grid grid-cols-3 max-w-5xl mx-5 md:mx-10 lg:mx-auto py-24 md:px-10"
	>
		<div class="flex flex-col">
			<span class="text-4xl lg:text-6xl"
				>CON<span class="text-red">T</span>ACTO</span
			>
			<span class="my-2">¡Hagamos arte juntos!</span>
			<span class="my-2">
				Te atendemos con gusto de lunes a domingo de 11 am a 8 pm
			</span>
			<span class="my-2">
				T. 68 448 235 <br />
				WA. 55 6030 5026 <br />
				M. contacto@soyfelizstudio.com
			</span>
			<span class="my-2">
				Enrique Rébsamen 743, Narvarte Poniente, Benito Juárez,03020 Ciudad de
				México, CDMX
			</span>
			<div class="mt-10 lg:mt-52 flex justify-start">
				<a href="https://instagram.com/soyfelizstudio?igshid=NjZiMGI4OTY=">
					<img src="/src/assets/images/desktop/instagram.png" alt="instagram" />
				</a>
				<a href="https://m.facebook.com/soyfelizstudio/">
					<img src="/src/assets/images/desktop/facebook.png" alt="facebook" />
				</a>
				<a href="https://twitter.com/soyfelizstudio?s=21">
					<img src="/src/assets/images/desktop/twitter.png" alt="twitter" />
				</a>
				<a href="https://www.tiktok.com/@soyfelizstudio?_t=8WIHIQUzJ4A&_r=1">
					<img src="/src/assets/images/desktop/tiktok.png" alt="tiktok" />
				</a>
			</div>
		</div>
		<div class="h-96 col-span-2 lg:mx-5 mb-5 mt-10 lg:mt-0">
			<GMapMap :center="center" :zoom="18" map-type-id="terrain" class="h-full">
				<GMapCluster :zoomOnClick="true">
					<GMapMarker
						:key="index"
						v-for="(m, index) in markers"
						:position="m.position"
						:clickable="true"
						:draggable="true"
						@click="center = m.position"
					/>
				</GMapCluster>
			</GMapMap>
		</div>
	</div>
</template>

<script>
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
