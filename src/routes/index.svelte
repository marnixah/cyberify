<script lang="ts">
	let normalText = '';
	let cyberifiedText = '';

	const updateCyberifiedText = () =>
    normalText ?
		fetch(`/cyberify/${normalText}`)
			.then((response) => response.text())
			.then((resText) => (cyberifiedText = resText))
      :
      cyberifiedText = '';
</script>

<input type="text" bind:value={normalText} on:input={updateCyberifiedText} />
<p>{cyberifiedText}</p>
