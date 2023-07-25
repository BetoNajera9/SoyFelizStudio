<template>
	<div
		class="bg-transparent-dark flex justify-center items-center w-screen h-screen fixed z-[100]"
	>
		<div class="flex flex-col items-end w-5/12">
			<mdicon
				@click="$emit('closen')"
				class="text-white cursor-pointer"
				id="btn-close"
				name="close"
			/>
			<div class="bg-white h-auto">
				<img src="/src/assets/images/desktop/home/announce.png" alt="" />
			</div>
		</div>
	</div>
</template>
