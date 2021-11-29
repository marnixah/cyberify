import WordPOS from 'wordpos';
const wordpos = new WordPOS();

export async function get({ params }: { params: { text: string } }) {
	let { text } = params;
	// Prepend all proper nouns with 'cyber'
	try {
		(await wordpos.getNouns(text)).forEach((noun) => {
			text = text.replace(noun, `cyber${noun}`);
		});
	} catch (e) {
		// Catch read properties of undefined error
		if (e.message.includes('read properties of undefined')) {
			return { body: text };
		}
	}
	return { body: text };
}
