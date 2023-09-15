<template>
	<div class="mt-20 max-w-5xl md:mx-10 lg:mx-auto px-5 md:px-10">
		<span class="text-4xl lg:text-5xl font-grold-black">
			CO<span class="text-red">T</span>IZA TU TATUAJE
		</span>
		<form class="flex flex-col lg:grid grid-cols-2" onsubmit="return false">
			<div class="flex flex-col">
				<span class="mt-4">Nombre completo</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="Nombre completo"
					v-model="name"
				/>
				<span class="mt-4">E-mail</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="E-mail"
					v-model="email"
				/>
				<span class="mt-4">Celular</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="10 dígitos"
					v-model="phone"
				/>
				<span class="mt-4">Fecha de nacimiento</span>
				<input
					pattern="\d{1,2}/\d{1,2}/\d{4}"
					placeholder="dd/mm/yyyy"
					:class="inputStyle"
					v-model="birthday"
					type="text"
				/>
				<span class="mt-4">Dirección</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="Calle, Número, C.P., Ciudad"
					v-model="address"
				/>
			</div>
			<div class="flex flex-col lg:ml-5">
				<span class="mt-4">Zona del cuerpo donde quieres tu tatuaje</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="Espalda, brazo, muslo"
					v-model="zone"
				/>
				<span class="mt-4">Tamaño (cm x cm)</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="cm x cm"
					v-model="size"
				/>
				<span class="mt-4">Descríbenos tu idea</span>
				<input
					type="text"
					:class="inputStyle"
					placeholder="Incluye detalles com colores, elementos gráficos, estilos, etc."
					v-model="idea"
				/>
				<span class="mt-4">Adjunta imágenes de referencia</span>
				<input
					class="file:border-red file:bg-white file:px-3 file:py-2 file:text-red"
					@change="uploadFile"
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
						He leído aviso de privacidad
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
						He leído términos y condiciones
					</span>
				</div>
				<div class="flex mt-10">
					<button
						class="bg-black text-white px-10 py-1 flex items-center"
						@click="send"
					>
						ENVIAR
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	setup() {
		const inputStyle = 'border-[1px] border-red h-10 px-2'

		const file = ref(null)

		const birthday = ref('')
		const address = ref('')
		const email = ref('')
		const phone = ref('')
		const name = ref('')
		const zone = ref('')
		const size = ref('')
		const idea = ref('')

		const check = ref([])

		const uploadFile = (event) => {
			file.value = event.target.files[0]
		}

		const toBase64 = (f) =>
			new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(f)
				reader.onload = () => resolve(reader.result)
				reader.onerror = reject
			})

		const submitFile = async () => {
			const res = await useFetch(
				'https://www.soyfelizstudio.com/php/index.php',
				{
					body: {
						image: await toBase64(file.value),
						birthday: birthday.value,
						address: address.value,
						email: email.value,
						phone: phone.value,
						name: name.value,
						zone: zone.value,
						size: size.value,
						idea: idea.value,
					},
					method: 'POST',
				}
			)

			return res
		}

		const send = async () => {
			if (
				name.value.trim() === '' ||
				email.value.trim() === '' ||
				phone.value.trim() === '' ||
				birthday.value.trim() === '' ||
				address.value.trim() === '' ||
				zone.value.trim() === '' ||
				size.value.trim() === '' ||
				idea.value.trim() === '' ||
				check.value.length < 2 ||
				file.value === null
			) {
				alert('Se necesita llenar todos los campos')
			} else {
				try {
					const res = await submitFile()

					if (res.error.value || res.data.value.status === 'error') {
						alert('Error de envío')
					} else {
						birthday.value = ''
						address.value = ''
						email.value = ''
						phone.value = ''
						name.value = ''
						zone.value = ''
						size.value = ''
						idea.value = ''
						check.value = []

						alert('Se envió correctamente la información')
					}
				} catch (error) {
					alert('Error de envío')
					console.error(error)
				}
			}
		}

		return {
			submitFile,
			uploadFile,
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
