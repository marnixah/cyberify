import WordPOS from 'wordpos';
const wordpos = new WordPOS();

// On post request, send back the same text but with nouns prepended with 'cyber-
export async function post(req) {
	let {
		body: { text }
	} = req;

	let nouns;

	try {
		nouns = await wordpos.getNouns(text);
	} catch (err) {
		// Ignore TypeError
		if (err.name == 'TypeError') {
			return { body: text };
		}
		throw err;
	}
	const words = text.split(' ');
	const cyberWords = words.map((word: string, i) => (nouns.includes(word) ? 'cyber' + word : word));

	return {
		body: cyberWords.join(' ')
	};
}
