<template>
	<div class="grid grid-cols-2 my-5 mx-20">
		<div class="flex flex-col mx-5">
			<span class="text-6xl">CON<span class="text-red">T</span>ACTO</span>
			<span class="my-2">¡Hagamos arte juntos!</span>
			<span class="my-2"
				>Te atendemos con gusto de lunes a domingo de 11 am a 8 pm</span
			>
			<span class="my-2"
				>T. 68 448 235 WA. 55 6030 5026 M. contacto@soyfelizstudio.com</span
			>
			<span class="my-2"
				>Enrique Rébsamen 743,  Narvarte Poniente, Benito Juárez, 03020 Ciudad
				de México, CDMX</span
			>
			<div class="mt-52 flex justify-start">
				<img src="/src/assets/images/desktop/instagram.png" alt="" />
				<img src="/src/assets/images/desktop/facebook.png" alt="" />
				<img src="/src/assets/images/desktop/twitter.png" alt="" />
				<img src="/src/assets/images/desktop/tiktok.png" alt="" />
			</div>
		</div>
		<div>
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
