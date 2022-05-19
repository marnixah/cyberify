<script lang="ts">
	let ssr = false;
	import { autoresize } from 'svelte-textarea-autoresize';
	import SvelteSeo from 'svelte-seo';
	import jq from 'jquery';
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import { onMount } from 'svelte';

	function MyApp() {
		return React.createElement('div', null, 'Hello world');
	}
	// Render react on client
	onMount(() => {
		if (typeof window !== 'undefined') {
			const root = ReactDOM.createRoot(document.getElementById('root'));
			root.render(React.createElement(MyApp));
		}
	});

	let normalText =
		'Welkom naar de cyberify official website where we kan alle text cyberifyen. </p>';
	let cyberifiedText =
		'cyberWelkom cybernaar de cyberify cyberofficial cyberwebsite where we cyberkan cyberalle cybertext cyberifyen. </p>';

	const updateCyberifiedText = () => {
		const popup = document.createElement('div');
		popup.className = 'absolute';
		// Give it random position
		popup.style.top = `${Math.random() * 100}%`;
		popup.style.left = `${Math.random() * 100}%`;
		popup.style.border = '3px solid yellow';
		popup.style.backgroundImage = 'url(https://cyber.equipment/tape.jpg)';
		popup.style.backgroundSize = 'tile';
		popup.style.backgroundRepeat = 'repeat';
		popup.style.backgroundPositionX = Math.random() * 100 + '%';
		popup.style.backgroundPositionY = Math.random() * 100 + '%';
		popup.style.width = 100 + Math.random() * 100 + 'px';
		popup.style.height = 100 + Math.random() * 100 + 'px';
		popup.style.opacity = Math.random().toString();
		// Append to body
		document.body.appendChild(popup);
		// Animate it
		popup.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
		setTimeout(() => {
			popup.remove();
		}, 10000);
		fetch('/cyberify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text: normalText
			})
		})
			.then((response) => response.text())
			.then((text) => {
				cyberifiedText = text;
			});
	};
</script>

<SvelteSeo
	title="Cyberify"
	description="Cyberify is a cybersimple cybertool to cyberfiy cybertext"
/>

<div class="min-h-screen">
	<div id="popup" class="absolute w-full h-full pointer-events-none" />
	<div class="bg-white dark:bg-gray-800 max-w-4xl mx-auto px-4 py-6 my-10 rounded-md">
		<textarea
			use:autoresize
			class="w-full rounded-md py-0.5 px-1 resize-none outline-none"
			type="text"
			bind:value={normalText}
			on:input={updateCyberifiedText}
		/>
		<p class="text-white max-w-full">{cyberifiedText}</p>
	</div>
</div>

<style>
	textarea {
		font-family: monospace;
		font-size: 1.2rem;
	}

	p {
		font-family: monospace;
		font-size: 1.2rem;
		white-space: pre-wrap;
		word-break: break-all;
	}
</style>
