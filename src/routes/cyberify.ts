import WordPOS from 'wordpos';
const wordpos = new WordPOS();

// On post request, send back the same text but with nouns prepended with 'cyber-
export async function post(req) {
	let {
		body: { text }
	} = req;

	let nouns;
	try {
		const pos = await wordpos.getPOS(text);
		nouns = [...pos.nouns, ...pos.rest];
		nouns = nouns.filter((noun) => noun.length >= 3);
		nouns = nouns.filter((noun) => !noun.includes('cyber'));
	} catch (err) {
		return { body: text };
	}
	const words = text.split(' ');
	const cyberWords = words.map((word: string, i) => (nouns.includes(word) ? 'cyber' + word : word));

	return {
		body: cyberWords.join(' ')
	};
}
