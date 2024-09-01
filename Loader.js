import Solver from './Solver.js';
const solutions = (await (await fetch('./solutions.txt', { cache: "no-store" })).text())
    .split('\n')
    .filter(Boolean)
    .flatMap(line => line
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w.trim()));
const wordsAndRank = (await (await fetch('./words_ranked.txt')).text())
    .split('\n')
    .filter(Boolean)
    .map(line => line.split('\t'))
    .map(([word, rank]) => [word, parseInt(rank)]);
const max = wordsAndRank.map(p => p[1]).reduce((a, b) => Math.max(a, b)) + 1;
const rankedWords = new Map(wordsAndRank.map(pair => [pair[0], 1 - pair[1] / max]));
const solver = new Solver(rankedWords, solutions);
export default solver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFFakMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RGLEtBQUssQ0FBQyxJQUFJLENBQUM7S0FDWCxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ2YsSUFBSTtLQUNGLEtBQUssQ0FBQyxLQUFLLENBQUM7S0FDWixNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQ3BCLENBQUM7QUFFSCxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDckUsS0FBSyxDQUFDLElBQUksQ0FBQztLQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBcUIsQ0FBQztLQUNqRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFxQixDQUFDLENBQUM7QUFDcEUsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFbEQsZUFBZSxNQUFNLENBQUMifQ==