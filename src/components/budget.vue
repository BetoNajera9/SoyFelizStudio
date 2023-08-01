<template>
	<div class="my-5 mx-10">
		<span class="text-6xl">
			CO<span class="text-red">T</span>IZA TU TATUAJE
		</span>
		<form class="grid grid-cols-2 mr-5" action="">
			<div class="flex flex-col">
				<span class="mt-4">Nombre completo</span>
				<input type="text" :class="inputStyle" />
				<span class="mt-4">E-mail</span>
				<input type="text" :class="inputStyle" />
				<span class="mt-4">Celular</span>
				<input type="text" :class="inputStyle" />
				<span>Fecha de nacimiento</span>
				<input type="text" :class="inputStyle" />
				<span class="mt-4">Dirección</span>
				<input type="text" :class="inputStyle" />
			</div>
			<div class="flex flex-col ml-5">
				<span class="mt-4">Zona del cuerpo donde quieres tu tatuaje</span>
				<input type="text" :class="inputStyle" />
				<span class="mt-4">Tamaño (cm x cm)</span>
				<input type="text" :class="inputStyle" />
				<span class="mt-4">Describenos tu idea</span>
				<input type="text" :class="inputStyle" />
				<span class="mt-4">Adjunta imagenes de referencia</span>
				<input
					type="file"
					class="file:border-red file:bg-white file:px-3 file:py-2"
				/>
				<div class="flex items-center mt-10">
					<input type="checkbox" class="outline-red otline-1" />
					<span class="text-red ml-2 hover:underline hover:cursor-pointer"
						>He leido aviso de privacidad</span
					>
				</div>
				<div class="flex items-center">
					<input type="checkbox" class="outline-red otline-1" />
					<span class="text-red ml-2 hover:underline hover:cursor-pointer"
						>He leido terminos y condiciones</span
					>
				</div>
				<div class="flex mt-10">
					<button class="bg-black text-white px-10 py-1">ENVIAR</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	setup() {
		const inputStyle = 'border-[1px] border-red h-10'

		return {
			inputStyle,
		}
	},
}
</script>
