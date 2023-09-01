<template>
	<div
		class="bg-transparent-dark flex justify-center items-center w-screen h-screen fixed z-[100]"
	>
		<div
			class="flex flex-col justify-center items-end max-h-[50%] w-auto"
			v-if="data === 'home'"
		>
			<div class="text-white cursor-pointer" @click="$emit('closen')">
				<Icon name="ep:close" size="24" />
			</div>
			<div class="bg-white h-full w-full">
				<nuxt-img
					:src="`/images/announce/${announceData.popUp}`"
					class="object-fill max-h-[75vh]"
					alt="soy feliz studio announce"
					format="webp"
				/>
			</div>
		</div>
		<div
			v-else
			class="flex flex-col justify-center items-end sm:max-w-[50%] max-h-[75%]"
		>
			<div class="text-white cursor-pointer" @click="$emit('closen')">
				<Icon name="ep:close" size="24" />
			</div>
			<div
				v-if="data === 'conditions'"
				class="bg-white h-3/4 overflow-y-scroll overflow-auto"
			>
				<h3 class="pt-10 px-10">{{ conditions.title }}</h3>
				<p class="px-10 pt-5">{{ conditions.content }}</p>
			</div>
			<div
				v-else-if="data === 'privacy'"
				class="bg-white overflow-y-scroll overflow-auto"
			>
				<h3 class="pt-10 px-10">{{ privacy.title }}</h3>
				<p class="px-10 pt-5">{{ privacy.content }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import announceData from '../data.json'

export default {
	props: ['data'],

	setup() {
		const privacy = {
			title: 'Aviso de privacidad',
			content:
				'SOYFELIZSTUDIO, con domicilio en Enrique Rebsamen 743, col. Narvarte Poniente, Benito Juárez, CDMX, 02030, es el responsable del uso y protección de sus datos personales (nombre completo, teléfono, edad, dirección de correo electrónico y localidad), y al respecto le informa lo siguiente: El tratamiento de los datos personales recibidos en nuestro sitio electrónico, tiene como finalidad la de brindarle el servicio que nos solicita, conocer sus necesidades, preferencias o recomendaciones, estar en posibilidad de ofrecerle lo que más se adecúe a sus gustos y necesidades; así como comunicarle promociones, descuentos, beneficios de cliente y atender quejas y aclaraciones, a sabiendas de que dichos datos podrán ser tratados tanto por nosotros, como por las empresas controladoras y filiales de SOYFELIZSTUDIO, para brindarle un mejor servicio y pronta respuesta a sus solicitudes. Sus datos personales son tratados con toda discrecionalidad y de acuerdo a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la ”Ley”) y su Reglamento, por esto, le informamos que Usted en todo momento cuenta con el derecho de acceder, rectificar, cancelar, u oponerse (“Derechos ARCO”) respecto a su consentimiento respecto del tratamiento que le damos a sus datos personales. En todo momento, usted como titular, o en su caso, el representante legal podrá ejercer los derechos que les confiere la Ley, enviando un correo electrónico a contacto@soyfelizstudio.com . Todas las solicitudes que sean enviadas, deberán contener forzosamente y de conformidad con la Ley los siguientes requisitos: Nombre y apellido del titular o representante legal. Una descripción clara y precisa de los datos personales respecto de los cuales ejercitará los derechos que le confiere la Ley. La dirección de correo electrónico, para facilitar la localización de los datos personales de que se traten. Conforme a lo dispuesto por el artículo 32° de la Ley , comunicaremos al titular, en un plazo máximo de veinte días hábiles, contados desde la fecha en que se reciba la solicitud por medio de la cual pretenda ejercer los Derechos ARCO , la determinación adoptada, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los quince días siguientes a la fecha en que se comunica la respuesta al titular. Los plazos antes referidos podrán ser ampliados una sola vez por un periodo igual, siempre y cuando así lo justifiquen las circunstancias del caso. Así mismo, los datos personales que recabamos no afectan la esfera más intima del titular, y por ende no son considerados sensibles, por lo que al momento de ser proporcionados por el titular de los mismos, salvo manifestación expresa en sentido negativo, existe un consentimiento tácito para su tratamiento y transferencia, mismo que es suficiente de conformidad con la Ley. SOYFELIZSTUDIO, se reserva el derecho de cambiar, modificar, complementar y/o alterar el presente aviso, en cualquier momento, en cuyo caso se hará de su conocimiento a través de la página electrónica de www.soyfelizstudio.com o a través de cualquier otro medio que consideremos pertinente. De manera adicional, es importante hacerle saber, que al ser un sitio virtual, se recaban datos que no se perciben por los usuarios, utilizando herramientas como los cookies, web beacons o similares. Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro del equipo de cómputo del usuario al navegar en una página de Internet específica, que permiten recordar al servidor de Internet algunos datos sobre este usuario, entre ellos, sus preferencias para la visualización de las páginas en ese servidor, nombre y contraseña. Por su parte, las web beacons son imágenes insertadas en una página de Internet o correo electrónico, que puede ser utilizado para monitorear el comportamiento de un visitante, como almacenar información sobre la dirección IP del usuario, duración del tiempo de interacción en dicha página y el tipo de navegador utilizado, entre otros. Le informamos que utilizamos cookies y web beacons con objeto de obtener información personal acerca de usted, como la siguiente: Su tipo de navegador y sistema operativo. Las páginas de Internet que visita. Los vínculos que sigue. La dirección IP. El sitio que visitó antes de ingresar al nuestro. Si usted considera que su derecho a la protección de sus datos personales ha sido lesionado por alguna conducta u omisión de nuestra parte o presume alguna violación a las disposiciones previstas en la Ley, su Reglamento y demás ordenamientos aplicables, podrá interponer su inconformidad o denuncia ante el Instituto Federal de Acceso a la Información y Protección de Datos (IFAI). Para mayor información le sugerimos visitar su página oficial de Internet www.ifai.org.mx. Ultima actualización: Agosto 2023.',
		}

		const conditions = {
			title: 'Términos y condiciones',
			content:
				'Para poder agendar un tatuaje: En caso de que se acepte tu trabajo, se te otorgarán los datos para hacer realizar un anticipo, mismos que serán descontados del precio final de tu tatuaje. Antes de realizar el anticipo te daremos opción de elegir los tatuadores mas adecuados al estilo de tu tatuaje, una cotización aproximada y un rango de fechas disponibles de nuestros artistas. El anticipo es personal y se puede realizar vía deposito, transferencia o directamente en el estudio. Una vez efectuado el pago, envíanos el comprobante para confirmar fecha y hora de tu cita. Los depósitos no son reembolsables. Para cambiar la fecha o transferirla a otra persona, se debe notificar antes de 3 días hábiles de tu cita. Si no se avisa con el tiempo requerido, tu anticipo se perderá y no se podrá tomar para agendar una próxima fecha. En caso de cambiar el diseño o el tamaño deseado, es necesario revisarlo 3 días hábiles previos a tu cita, ya que esto puede alterar el tiempo de elaboración y el costo de tu tatuaje. De no hacerlo, se cobrará un porcentaje de tu anticipo. El pago del resto de tu tatuaje deberá realizarse en EFECTIVO. En caso de requerir pago con tarjeta o transferencia se cobrará una comisión del 5%. Es necesario traer tu identificación oficial con foto (credencial de elector, licencia de conducir o pasaporte). Favor de No presentarse bajo influencia de alcohol o cualquier otro estupefaciente; en caso de hacerlo, nos daremos el lujo de cancelar tu cita sin reembolso. Es necesario comer y descansar bien antes de tu cita, toma en cuenta que estarás causando un gran esfuerzo a tu cuerpo. El área que vas a tatuarte, tiene que estar LIMPIA y RASURADA (aunque el vello no sea visible hay que retirarlo). Por favor evita el uso de cremas, bloqueadores, maquillaje o repelentes. Para poder tatuarte debemos descubrir la zona, por favor traer ropa cómoda y de fácil acceso al área que deseas tatuarte. Una vez realizado el tatuaje no podrás usar ropa o accesorios que lo aprieten o puedan lastimar mientras esté en proceso de sanación. Toma en cuenta que tu piel debe de estar en su estado natural, por lo que debes de evitar broncear o lastimar el área deseada. Solo podrá acompañarte una persona. No se permite entrar con bebés o niños. Sólo se realizan tatuajes a mayores de 18 años. Si padezco alguna condición que pudiera afectar la cicatrización de mi tatuaje o la salud de mi tatuador como hemofilia, diabetes, hepatitis, VIH (SIDA), condiciones cardiacas o cualquier enfermedad transmisible, condiciones de la piel tales como acné, eczema o piel bronceada, pecas o verrugas, además de que no ingiero medicina que altere la condición natural de la sangre, deberá avisar a su tatuador. No presento ningún padecimiento físico o mental que afecte mi toma de decisiones tal como es realízame un tatuaje. Tengo conocimiento de que no es posible para mi tatuador el determinar si puedo tener reacciones alérgicas a los pigmentos o al procedimiento con los cuales se realizo mi tatuaje, por lo que acepto del riesgo de que tales reacciones se puedan presentar. Tengo conocimiento de que una infección puede surgir después de haber obtenido mi tatuaje , particularmente si no cumplo con los cuidados adecuados durante el tiempo de sanación del mismo. Acepto que he recibido las instrucciones de cuidado y estoy de acuerdo en seguirlas, también si llegase a ser necesario un retoque debido a negligencia de mi parte, éste será costeado completamente por mi cuenta bajo la tarifa estándar del estudio. Estoy enterado de que puede haber variaciones de color y diseño en mi piel acorde al diseño e imágenes de referencia que seleccioné, después de haber sido plasmadas en mi cuerpo. Entiendo que si tengo tratamientos de piel, depilación laser, cirugía plástica, o algún otro similar que altere el ciclo normal de la piel, puede resultar en cambios adversos que pudieran alterar mi tatuaje. Comprendo perfectamente que un tatuaje representa un cambio permanente en mi cuerpo y que dicho tatuaje no podrá ser removido. De querer realizar algún cambio este será con el costo que marque el estudio.',
		}

		return {
			announceData,
			conditions,
			privacy,
		}
	},
}
</script>
