<template>
	<nav class="bg-white z-[99] h-[10%] sticky top-0">
		<div class="max-w-5xl mx-auto flex justify-around items-center pt-2">
			<img
				src="/src/assets/images/desktop/menu/happy-index.png"
				alt="soy feliz studio"
			/>
			<span>LLEVAMOS EL ARTE EN LA PIEL</span>
			<span class="hidden">{{ this.$vssWidth }}</span>
			<img
				src="/src/assets/images/desktop/menu/spark.png"
				v-if="this.$vssWidth >= 1024"
				alt="spark"
			/>
			<div v-if="this.$vssWidth >= 1024" class="flex justify-around basis-3/5">
				<a href="#home" v-smooth-scroll
					><span class="cursor-pointer">INICIO</span></a
				>
				<a href="#we" v-smooth-scroll>
					<span class="cursor-pointer">NOSOTROS</span>
				</a>

				<a href="#galery" v-smooth-scroll>
					<span class="cursor-pointer">GALERIA</span>
				</a>

				<a href="#artists" v-smooth-scroll>
					<span class="cursor-pointer">ARTISTAS</span>
				</a>

				<a href="#budget" v-smooth-scroll>
					<span class="cursor-pointer">COTIZA</span>
				</a>

				<a href="#contact" v-smooth-scroll>
					<span class="cursor-pointer">CONTACTO</span>
				</a>
			</div>
			<div v-if="this.$vssWidth < 1024">
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
										<a href="#home" v-smooth-scrol>
											I<span class="text-red">N</span>ICIO
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#we" v-smooth-scroll>
											N<span class="text-red">O</span>SOTROS
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#galery" v-smooth-scroll>
											G<span class="text-red">A</span>LERIA
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#artists" v-smooth-scroll>
											ARTIS<span class="text-red">T</span>AS
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#budget" v-smooth-scroll>
											CO<span class="text-red">T</span>IZA
										</a>
									</li>

									<li class="sidemenu__item" @click="navOpen = !navOpen">
										<a href="#contact" v-smooth-scroll>
											CONTAC<span class="text-red">T</span>O
										</a>
									</li>

									<li class="mt-10">
										<img
											src="/src/assets/images/desktop/menu/happy-face.png"
											alt=""
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
					background: black;
					transform: translateY(-8px);
				}

				&.mid {
					background: black;
				}

				&.bottom {
					background: black;
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
				font-size: 1.6em;
				padding: 0.5em;
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
