# Text Summarizer AI :rocket:

![Node Build](https://github.com/LaurentiuGabriel/text-summarizer-ai/actions/workflows/node.js.yml/badge.svg)

A JavaScript library for summarizing text using the TextRank algorithm.

## Installation

To install the package, run the following command in your project directory:
```sh
npm install text-summarizer-ai
```
or
```sh
yarn add text-summarizer-ai
```
## Usage
```javascript
import TextSummarizer from 'text-summarizer';

const textSummarizer = new TextSummarizer();
const text = "This is the text that you want to summarize. It can be a long article or a short paragraph. The function will take the text and condense it into a summary using the TextRank algorithm.";
const numSentences = 3;
const summary = textSummarizer.summarizeText(text, numSentences);
console.log(summary);
```

This will output an array containing the top 3 sentences from the text, based on the TextRank algorithm's analysis of the text.

## API
`summarizeText(text: string, numSentences: number): string[]`
This function takes a text and a number of sentences as arguments, and returns an array of sentences that summarize the text.

## Contributing
If you find any bugs or have suggestions for improvements, please open an issue or a pull request.

## Licensing
This project is licensed under the MIT License.


