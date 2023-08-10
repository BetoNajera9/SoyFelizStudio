<template>
	<nav class="bg-white z-[99] h-[10%] sticky top-0">
		<div class="max-w-5xl flex justify-around items-center pt-2">
			<nuxt-img
				src="/images/soyFelizStudio/happy-index.jpg"
				alt="soy feliz studio logo"
				format="webp"
				class="mx-2"
			/>
			<span class="tracking-wide text-sm sm:text-base"
				>LLEVAMOS EL AR<span class="text-red">T</span>E EN LA PIEL</span
			>
			<nuxt-img
				v-if="$viewport.isGreaterOrEquals('desktop')"
				src="/images/soyFelizStudio/spark.png"
				alt="soy feliz studio spark"
				format="webp"
			/>
			<div
				v-if="$viewport.isGreaterOrEquals('desktop')"
				class="flex justify-around basis-3/5"
			>
				<a href="#home">
					<span class="cursor-pointer tracking-wide">INICIO</span>
				</a>
				<a href="#we">
					<span class="cursor-pointer tracking-wide">NOSOTROS</span>
				</a>

				<a href="#galery">
					<span class="cursor-pointer tracking-wide">GALERIA</span>
				</a>

				<a href="#artists">
					<span class="cursor-pointer tracking-wide">ARTISTAS</span>
				</a>

				<a href="#budget">
					<span class="cursor-pointer tracking-wide">COTIZA</span>
				</a>

				<a href="#contact">
					<span class="cursor-pointer tracking-wide">CONTACTO</span>
				</a>
			</div>
			<div v-if="$viewport.isLessThan('desktop')">
				<div id="sidemenu">
					<button
						class="sidemenu__btn"
						@click="navOpen = !navOpen"
						:class="{ active: navOpen }"
					>
						<span class="top" />
						<span class="mid" />
						<span class="bottom" />
					</button>
					<transition name="translateX">
						<nav v-show="navOpen">
							<div class="sidemenu__wrapper">
								<ul class="sidemenu__list">
									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#home"> I<span class="text-red">N</span>ICIO </a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#we"> N<span class="text-red">O</span>SOTROS </a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#galery">
											G<span class="text-red">A</span>LERIA
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#artists">
											ARTIS<span class="text-red">T</span>AS
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#budget"> CO<span class="text-red">T</span>IZA </a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#contact">
											CONTAC<span class="text-red">T</span>O
										</a>
									</li>

									<li class="mt-10">
										<nuxt-img
											src="/images/soyFelizStudio/happy-face.png"
											alt="soy feliz studio logo"
											format="webp"
										/>
									</li>
								</ul>
							</div>
						</nav>
					</transition>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { VueScreenSizeMixin } from 'vue-screen-size'
import { defineComponent, ref } from 'vue'

export default defineComponent({
	mixins: [VueScreenSizeMixin],
	setup() {
		const navOpen = ref(false)

		return {
			navOpen,
		}
	},
})
</script>

<style lang="scss">
#sidemenu {
	nav {
		color: black;
		width: 100%;
		height: 100%;
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.sidemenu {
		&__btn {
			display: block;
			width: 50px;
			height: 50px;
			background: white;
			border: none;
			position: relative;
			z-index: 100;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 2px;
				margin: auto;
				background: white;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all 0.4s ease;

				&.top {
					background: red;
					transform: translateY(-8px);
				}

				&.mid {
					background: red;
				}

				&.bottom {
					background: red;
					transform: translateY(8px);
				}
			}
			&.active {
				.top {
					transform: rotate(-45deg);
				}
				.mid {
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}
		}

		&__wrapper {
			padding-top: 50px;
		}

		&__list {
			padding-top: 50px;
			list-style: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0;
			margin: 0;
		}

		&__item {
			a {
				text-decoration: none;
				line-height: 1.6em;
				font-size: 3em;
				display: block;
				color: black;
				transition: 0.4s ease;

				&:hover {
					background: lightgrey;
					color: dimgrey;
				}
			}
		}
	}
}

.translateX-enter {
	transform: translateX(-200px);
	opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
	transform-origin: top left 0;
	transition: 0.2s ease;
}

.translateX-leave-to {
	transform: translateX(-200px);
	opacity: 0;
}
</style>
