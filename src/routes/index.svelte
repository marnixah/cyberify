<script lang="ts">
  import { autoresize } from 'svelte-textarea-autoresize'
  import SvelteSeo from "svelte-seo";

	let normalText = 'I am the one that is going to be cyberfied';
	let cyberifiedText = 'I am the cyberone that is cybergoing to be cyberfied';

	const updateCyberifiedText = () =>
		fetch("/cyberify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: normalText
      })
    })
    .then(response => response.text())
    .then(text => {
      cyberifiedText = text;
    });
</script>

<SvelteSeo
  title="Cyberify"
  description="Cyberify is a cybersimple cybertool to cyberfiy cybertext"
/>

<div class="min-h-screen">
	<div class="bg-white dark:bg-gray-800 max-w-4xl mx-auto px-4 py-6 my-10 rounded-md">
		<textarea use:autoresize class="w-full rounded-md py-0.5 px-1 resize-none outline-none" type="text" bind:value={normalText} on:input={updateCyberifiedText} />
		<pre class="text-white">{cyberifiedText}</pre>
	</div>
</div>
