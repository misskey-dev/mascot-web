<script setup lang="ts">
import { markRaw, onMounted, ref } from 'vue';
import { load } from './live2d/index';

let live2d = null;
const canvas = ref<HTMLCanvasElement>();

const touched = (ev: MouseEvent) => {
	if (live2d) live2d.click(ev);
};

onMounted(() => {
	console.log(canvas.value);
	load(canvas.value!, {
		scale: 1.6,
		y: 1.1
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
	width: 100%;
	height: 100%;
}
</style>
