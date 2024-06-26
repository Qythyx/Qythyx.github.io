import Solver from './Solver.js';
const solutions = (await (await fetch('./solutions.txt')).text())
    .split('\n')
    .filter(Boolean)
    .flatMap(line => line.split('\t').filter(Boolean));
const wordsAndRank = (await (await fetch('./words_ranked.txt')).text())
    .split('\n')
    .filter(Boolean)
    .map(line => line.split('\t'))
    .map(([word, rank]) => [word, parseInt(rank)]);
const max = wordsAndRank.map(p => p[1]).reduce((a, b) => Math.max(a, b)) + 1;
const rankedWords = new Map(wordsAndRank.map(pair => [pair[0], 1 - pair[1] / max]));
const solver = new Solver(rankedWords, solutions);
export default solver;
//# sourceMappingURL=Loader.js.map