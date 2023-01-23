export class TextSummarizer {
    summarizeText = (text, numSentences) => {
        // Import the natural language processing library
        const natural = require('natural');
      
        // Tokenize the text into sentences
        const sentences = natural.SentenceTokenizer.tokenize(text);
      
        // Create an array to hold the scores for each sentence
        const scores = new Array(sentences.length).fill(0);
      
        // Create a TextRank object
        const textrank = new natural.TextRank();
      
        // Build a graph of the sentences, with edges between sentences that have similar words
        textrank.buildGraph(sentences);
      
        // Calculate the scores for each sentence
        textrank.rank();
      
        // Sort the sentences by score
        const sortedSentences = sentences.sort((a, b) => textrank.ranks[sentences.indexOf(a)] - textrank.ranks[sentences.indexOf(b)]);
      
        // Return the top numSentences sentences
        return sortedSentences.slice(0, numSentences);
      }
}

export default TextSummarizer;