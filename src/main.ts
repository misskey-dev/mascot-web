import { load } from './live2d/index';
import './style.css';

(async () => {
	const canvasEl = document.getElementById('canvas');
	if (canvasEl == null || !(canvasEl instanceof HTMLCanvasElement)) {
		throw new Error('Canvas element not found');
	}

	const url = new URL(window.location.href);

	const renderer = await load(canvasEl, {
		scale: parseFloat(url.searchParams.get('scale') || '1'),
		x: parseFloat(url.searchParams.get('x') || '0'),
		y: parseFloat(url.searchParams.get('y') || '1'),
		eyeX: parseFloat(url.searchParams.get('eyeX') || '0'),
		eyeY: parseFloat(url.searchParams.get('eyeY') || '0'),
	});

	if (renderer == null) {
		throw new Error('Failed to load Live2D renderer');
	}

	canvasEl.addEventListener('click', (ev) => {
		if (renderer != null) renderer.click(ev);
	});
})();
