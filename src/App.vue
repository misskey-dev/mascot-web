<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue';
import { load } from './live2d/index';

let live2d: any = null;
const canvas = ref<HTMLCanvasElement>();

const touched = (ev: MouseEvent) => {
	if (live2d) live2d.click(ev);
};

onMounted(() => {
	const url = new URL(window.location.href);

	load(canvas.value!, {
		scale: parseFloat(url.searchParams.get('scale') || '1'),
		x: parseFloat(url.searchParams.get('x') || '0'),
		y: parseFloat(url.searchParams.get('y') || '1'),
		eyeX: url.searchParams.has('eyeX') ? parseFloat(url.searchParams.get('eyeX')!) : undefined,
		eyeY: url.searchParams.has('eyeY') ? parseFloat(url.searchParams.get('eyeY')!) : undefined,
	})
	.then(_live2d => {
		live2d = markRaw(_live2d);
	});
});

defineExpose({
	canvas,
	touched
});
</script>

<template>
  <canvas id="canvas" ref="canvas" @click="touched"></canvas>
</template>

<style>
html, body, #app {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}

#canvas {
	display: block;
	width: 100%;
	height: 100%;
}
</style>
