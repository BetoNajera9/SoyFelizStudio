<template>
	<div class="mt-20 max-w-5xl md:mx-10 lg:mx-auto px-5 md:px-10">
		<span class="text-4xl lg:text-6xl">
			CO<span class="text-red">T</span>IZA TU TATUAJE
		</span>
		<form class="flex flex-col lg:grid grid-cols-2" onsubmit="return false">
			<div class="flex flex-col">
				<span class="mt-4">Nombre completo</span>
				<input type="text" :class="inputStyle" v-model="name" />
				<span class="mt-4">E-mail</span>
				<input type="text" :class="inputStyle" v-model="email" />
				<span class="mt-4">Celular</span>
				<input type="text" :class="inputStyle" v-model="phone" />
				<span>Fecha de nacimiento</span>
				<input type="text" :class="inputStyle" v-model="birthday" />
				<span class="mt-4">Dirección</span>
				<input type="text" :class="inputStyle" v-model="address" />
			</div>
			<div class="flex flex-col lg:ml-5">
				<span class="mt-4">Zona del cuerpo donde quieres tu tatuaje</span>
				<input type="text" :class="inputStyle" v-model="zone" />
				<span class="mt-4">Tamaño (cm x cm)</span>
				<input type="text" :class="inputStyle" v-model="size" />
				<span class="mt-4">Describenos tu idea</span>
				<input type="text" :class="inputStyle" v-model="idea" />
				<span class="mt-4">Adjunta imagenes de referencia</span>
				<input
					class="file:border-red file:bg-white file:px-3 file:py-2"
					type="file"
				/>
				<div class="flex items-center mt-10">
					<input
						class="outline-red otline-1"
						type="checkbox"
						v-model="check"
						value="privacy"
					/>
					<span
						@click="$emit('closen', 'privacy')"
						class="text-red ml-2 hover:underline hover:cursor-pointer"
					>
						He leido aviso de privacidad
					</span>
				</div>
				<div class="flex items-center">
					<input
						class="outline-red otline-1"
						type="checkbox"
						v-model="check"
						value="conditions"
					/>
					<span
						@click="$emit('closen', 'conditions')"
						class="text-red ml-2 hover:underline hover:cursor-pointer"
					>
						He leido terminos y condiciones
					</span>
				</div>
				<div class="flex mt-10">
					<button class="bg-black text-white px-10 py-1" @click="send">
						ENVIAR
					</button>
				</div>
			</div>
		</form>
		<div
			class="relative top-[50px] sm:top-[-100px] left-[19px] sm:left-[79px] lg:left-[40px] flex justify-end"
		>
			<img src="/src/assets/images/desktop/menu/dedirow.png" alt="" />
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
	setup() {
		const inputStyle = 'border-[1px] border-red h-10'

		const birthday = ref('')
		const address = ref('')
		const email = ref('')
		const phone = ref('')
		const name = ref('')
		const zone = ref('')
		const size = ref('')
		const idea = ref('')

		const check = ref([])

		const send = () => {
			if (
				name.value.trim() === '' ||
				email.value.trim() === '' ||
				phone.value.trim() === '' ||
				birthday.value.trim() === '' ||
				address.value.trim() === '' ||
				zone.value.trim() === '' ||
				size.value.trim() === '' ||
				idea.value.trim() === '' ||
				check.value.length < 2
			) {
				alert('Se necesita llenar todos los campos')
			} else alert('Send email')
		}

		return {
			inputStyle,
			birthday,
			address,
			email,
			phone,
			check,
			name,
			zone,
			size,
			idea,
			send,
		}
	},
}
</script>
