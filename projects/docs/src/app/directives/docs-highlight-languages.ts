import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

const languages: [string, Parameters<typeof hljs.registerLanguage>[1]][] = [
	['html', xml],
	['xml', xml],
	['typescript', typescript],
	['javascript', javascript],
	['scss', scss],
	['bash', bash],
	['shell', bash],
];

for (const [name, language] of languages) {
	hljs.registerLanguage(name, language);
}

export { hljs };
