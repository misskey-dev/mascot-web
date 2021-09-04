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
		scale: parseInt(url.searchParams.get('scale') || '1', 10),
		x: parseInt(url.searchParams.get('x') || '0', 10),
		y: parseInt(url.searchParams.get('y') || '1', 10),
		eyeX: url.searchParams.has('eyeX') ? parseInt(url.searchParams.get('eyeX')!, 10) : undefined,
		eyeY: url.searchParams.has('eyeY') ? parseInt(url.searchParams.get('eyeY')!, 10) : undefined,
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
