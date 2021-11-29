import WordPOS from 'wordpos';
const wordpos = new WordPOS();

export async function get({ params }: { params: { text: string } }) {
	let { text } = params;
	// Prepend all proper nouns with 'cyber'
	(await wordpos.getNouns(text)).forEach((noun) => {
		text = text.replace(noun, `cyber${noun}`);
	});
	return { body: text };
}
