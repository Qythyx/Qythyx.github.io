import GuessStats from './GuessStats.js';
import GuessStrategy from './GuessStrategy.js';
export default class Solver {
    constructor(rankedWords, solutions) {
        this._vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        this._patternWords = [];
        this._knownPositioned = new Array(5).fill('');
        this._rankedWords = rankedWords;
        this._allWords = [...rankedWords.keys()];
        this._pastSolutions = new Set(solutions);
        this._remainingWords = this._allWords.filter(word => !this._pastSolutions.has(word));
    }
    get WordCount() {
        return this._remainingWords.length;
    }
    get RemainingWords() {
        return this.AnnotateWords(this._remainingWords);
    }
    SetExcludedLetters(letters) {
        this._remainingWords = this._remainingWords
            .filter(word => !this.hasLetterNotInPosition(letters, word))
            .sort();
    }
    hasLetterNotInPosition(letters, word) {
        for (let i = 0; i < word.length; i++) {
            if (letters.includes(word[i]) && this._knownPositioned[i] !== word[i]) {
                return true;
            }
        }
        return false;
    }
    SetIncorrectlyPositionedLetters(letters) {
        this._remainingWords = this._remainingWords
            .filter(word => {
            for (let i = 0; i < Math.min(letters.length, 5); i++) {
                if (letters[i] !== '.') {
                    const knownCount = this._knownPositioned.filter(c => c === letters[i]).length;
                    const wordCount = word.split('').filter(c => c === letters[i]).length;
                    if (wordCount <= knownCount || word[i] === letters[i]) {
                        return false;
                    }
                }
            }
            return true;
        })
            .sort();
    }
    SetPositionedLetters(letters) {
        this._remainingWords = this._remainingWords
            .filter(word => {
            for (let i = 0; i < Math.min(letters.length, 5); i++) {
                if (letters[i] !== '.') {
                    this._knownPositioned[i] = letters[i];
                    if (word[i] !== letters[i]) {
                        return false;
                    }
                }
            }
            return true;
        })
            .sort();
    }
    AddRequiredPattern(patterns) {
        const expanded = patterns.flatMap(([pattern, requiredCount]) => {
            const parsed = pattern.split('').map(ch => (isNaN(parseInt(ch)) ? -1 : parseInt(ch) - 1));
            return Array.from({ length: requiredCount }, () => parsed).sort((a, b) => b.filter(x => x === -1).length - a.filter(x => x === -1).length);
        });
        // Todo: optimize this, it is quite slow.
        const matchedWords = new Set(this._allWords.filter(w => this.matchesAll(w, new Set([w]), expanded)));
        this._patternWords.push(matchedWords);
        const matching = this._patternWords
            .slice(1)
            .reduce((intersection, list) => new Set([...intersection].filter(word => list.has(word))), this._patternWords[0]);
        this._remainingWords = this._remainingWords.filter(word => matching.has(word)).sort();
    }
    matchesAll(sourceWord, found, patterns) {
        const pattern = patterns[0];
        const notMatchedLetters = new Set(pattern.flatMap((index, i) => (index < 0 ? sourceWord[i] : [])));
        for (const word of this._allWords) {
            if (!found.has(word) && this.patternMatches(sourceWord, notMatchedLetters, word, pattern)) {
                if (patterns.length === 1) {
                    return true;
                }
                else {
                    found.add(word);
                    for (let i = 0; i < pattern.length; i++) {
                        if (pattern[i] < 0) {
                            notMatchedLetters.add(word[i]);
                        }
                    }
                    if (this.matchesAll(sourceWord, found, patterns.slice(1))) {
                        return true;
                    }
                    else {
                        found.delete(word);
                        for (let i = 0; i < pattern.length; i++) {
                            if (pattern[i] < 0) {
                                notMatchedLetters.delete(word[i]);
                            }
                        }
                    }
                }
            }
        }
        return true && false;
    }
    patternMatches(sourceWord, notMatchedLetters, toMatch, pattern) {
        for (let i = 0; i < pattern.length; i++) {
            if ((pattern[i] >= 0 && toMatch[i] !== sourceWord[pattern[i]])
                || (pattern[i] < 0 && notMatchedLetters.has(toMatch[i]))) {
                return false;
            }
        }
        return true;
    }
    getIndex(ch, i) {
        return (ch.charCodeAt(0) - 'a'.charCodeAt(0)) * 5 + i;
    }
    isExcludedWord(word) {
        return word.endsWith('s') || word.endsWith('ed');
    }
    GetBestGuesses(vowelWeight, pluralWeight, count = 10) {
        const letterCounts = new Array(26).fill(0);
        const rankedLetterCounts = new Array(26).fill(0);
        const letterCountsPerPos = new Array(26 * 5).fill(0);
        const rankedLetterCountsPerPos = new Array(26 * 5).fill(0);
        for (const word of this._remainingWords.filter(w => !this.isExcludedWord(w))) {
            for (let i = 0; i < word.length; i++) {
                const ch = word[i];
                const points = this._vowels.has(ch) ? vowelWeight : 1.0;
                if (!this._knownPositioned.includes(ch) && !word.slice(0, i).includes(ch)) {
                    letterCounts[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += points;
                    rankedLetterCounts[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += this._rankedWords.get(word) * points;
                }
                letterCountsPerPos[this.getIndex(ch, i)] += points;
                rankedLetterCountsPerPos[this.getIndex(ch, i)] += this._rankedWords.get(word) * points;
            }
        }
        const guesses = [];
        for (const word of this._remainingWords) {
            let letterScore = 0.0;
            let positionScore = 0.0;
            let rankedLetterScore = 0.0;
            let rankedPositionScore = 0.0;
            for (let i = 0; i < word.length; i++) {
                const ch = word[i];
                if (!this._knownPositioned.includes(ch) && !word.slice(0, i).includes(ch)) {
                    letterScore += letterCounts[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
                    rankedLetterScore += rankedLetterCounts[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
                    positionScore += letterCountsPerPos[this.getIndex(ch, i)];
                    rankedPositionScore += rankedLetterCountsPerPos[this.getIndex(ch, i)];
                }
            }
            const pluralFactor = word.endsWith('s') ? pluralWeight : 1;
            guesses.push(GuessStats.Create(word, letterScore * pluralFactor, positionScore * pluralFactor, rankedLetterScore * pluralFactor, rankedPositionScore * pluralFactor, this._rankedWords.get(word)));
        }
        let bestNewLetters = ['', 0];
        for (const word of this._remainingWords) {
            let score = 0.0;
            for (let i = 0; i < word.length; i++) {
                const ch = word[i];
                if (!this._knownPositioned.includes(ch) && !word.slice(0, i).includes(ch)) {
                    score += letterCounts[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
                }
            }
            if (score > bestNewLetters[1]) {
                bestNewLetters = [word, score];
            }
        }
        const scoreMax = new GuessStats('', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const scoreMin = new GuessStats('', Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        for (const guess of guesses) {
            scoreMax.setMax(guess);
            scoreMin.setMin(guess);
        }
        // eslint-disable-next-line no-unused-vars
        const top10 = (list, scorer) => list
            .sort((a, b) => scorer(a) - scorer(b))
            .slice(-count)
            .reverse()
            .map(guess => new GuessStats(guess.word, (guess.hybridScore - scoreMin.hybridScore) / (scoreMax.hybridScore - scoreMin.hybridScore), (guess.hybridScoreRanked - scoreMin.hybridScoreRanked)
            / (scoreMax.hybridScoreRanked - scoreMin.hybridScoreRanked), (guess.letterScore - scoreMin.letterScore) / (scoreMax.letterScore - scoreMin.letterScore), (guess.letterScoreRanked - scoreMin.letterScoreRanked)
            / (scoreMax.letterScoreRanked - scoreMin.letterScoreRanked), (guess.positionScore - scoreMin.positionScore)
            / (scoreMax.positionScore - scoreMin.positionScore), (guess.positionScoreRanked - scoreMin.positionScoreRanked)
            / (scoreMax.positionScoreRanked - scoreMin.positionScoreRanked), (guess.rankedHybridScore - scoreMin.rankedHybridScore)
            / (scoreMax.rankedHybridScore - scoreMin.rankedHybridScore), (guess.rankedHybridScoreRanked - scoreMin.rankedHybridScoreRanked)
            / (scoreMax.rankedHybridScoreRanked - scoreMin.rankedHybridScoreRanked), (guess.rankedLetterScore - scoreMin.rankedLetterScore)
            / (scoreMax.rankedLetterScore - scoreMin.rankedLetterScore), (guess.rankedLetterScoreRanked - scoreMin.rankedLetterScoreRanked)
            / (scoreMax.rankedLetterScoreRanked - scoreMin.rankedLetterScoreRanked), (guess.rankedPositionScore - scoreMin.rankedPositionScore)
            / (scoreMax.rankedPositionScore - scoreMin.rankedPositionScore), (guess.rankedPositionScoreRanked - scoreMin.rankedPositionScoreRanked)
            / (scoreMax.rankedPositionScoreRanked - scoreMin.rankedPositionScoreRanked), guess.rank))
            .map(s => {
            const score = (isNaN(scorer(s)) ? 100 : scorer(s) * 100).toFixed(1);
            return {
                Score: score === '100.0' ? '100' : score,
                Word: this.Annotate(s.word),
            };
        });
        return {
            guessLists: [
                new GuessStrategy('Letters', top10(guesses, g => g.letterScore)),
                new GuessStrategy('Letters Ranked', top10(guesses, g => g.letterScoreRanked)),
                new GuessStrategy('Position', top10(guesses, g => g.positionScore)),
                new GuessStrategy('Position Ranked', top10(guesses, g => g.positionScoreRanked)),
                new GuessStrategy('Hybrid', top10(guesses, g => g.hybridScore)),
                new GuessStrategy('Hybrid Ranked', top10(guesses, g => g.hybridScoreRanked)),
                new GuessStrategy('RLetters', top10(guesses, g => g.rankedLetterScore)),
                new GuessStrategy('RLetters Ranked', top10(guesses, g => g.rankedLetterScoreRanked)),
                new GuessStrategy('RPosition', top10(guesses, g => g.rankedPositionScore)),
                new GuessStrategy('RPosition Ranked', top10(guesses, g => g.rankedPositionScoreRanked)),
                new GuessStrategy('RHybrid', top10(guesses, g => g.rankedHybridScore)),
                new GuessStrategy('RHybrid Ranked', top10(guesses, g => g.rankedHybridScoreRanked)),
            ],
            newLetters: bestNewLetters[0],
        };
    }
    AnnotateWords(words) {
        return words.map(w => this.Annotate(w));
    }
    Annotate(word) {
        return word + (this._pastSolutions.has(word) ? '*' : '');
    }
}
//# sourceMappingURL=Solver.js.map