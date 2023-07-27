<template>
	<nav class="max-w-5xl mx-auto h-[10%] flex justify-around items-center pt-2">
		<img
			src="/src/assets/images/desktop/menu/happy-index.png"
			alt="soy feliz studio"
		/>
		<span>LLEVAMOS EL ARTE EN LA PIEL</span>
		<img
			class="scale-[.30]"
			src="/src/assets/images/desktop/menu/spark.png"
			alt="spark"
		/>
		<div class="flex justify-around basis-3/5">
			<span class="cursor-pointer">INICIO</span>
			<span class="cursor-pointer">NOSOTROS</span>
			<span class="cursor-pointer">GALERIA</span>
			<span class="cursor-pointer">ARTISTAS</span>
			<span class="cursor-pointer">COTIZA</span>
			<span class="cursor-pointer">CONTACTO</span>
		</div>
	</nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {},
})
</script>
