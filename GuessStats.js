var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _GuessStats_word, _GuessStats_hybridScore, _GuessStats_hybridScoreRanked, _GuessStats_letterScore, _GuessStats_letterScoreRanked, _GuessStats_positionScore, _GuessStats_positionScoreRanked, _GuessStats_rankedHybridScore, _GuessStats_rankedHybridScoreRanked, _GuessStats_rankedLetterScore, _GuessStats_rankedLetterScoreRanked, _GuessStats_rankedPositionScore, _GuessStats_rankedPositionScoreRanked, _GuessStats_rank;
class GuessStats {
    get word() {
        return __classPrivateFieldGet(this, _GuessStats_word, "f");
    }
    get hybridScore() {
        return __classPrivateFieldGet(this, _GuessStats_hybridScore, "f");
    }
    get hybridScoreRanked() {
        return __classPrivateFieldGet(this, _GuessStats_hybridScoreRanked, "f");
    }
    get letterScore() {
        return __classPrivateFieldGet(this, _GuessStats_letterScore, "f");
    }
    get letterScoreRanked() {
        return __classPrivateFieldGet(this, _GuessStats_letterScoreRanked, "f");
    }
    get positionScore() {
        return __classPrivateFieldGet(this, _GuessStats_positionScore, "f");
    }
    get positionScoreRanked() {
        return __classPrivateFieldGet(this, _GuessStats_positionScoreRanked, "f");
    }
    get rankedHybridScore() {
        return __classPrivateFieldGet(this, _GuessStats_rankedHybridScore, "f");
    }
    get rankedHybridScoreRanked() {
        return __classPrivateFieldGet(this, _GuessStats_rankedHybridScoreRanked, "f");
    }
    get rankedLetterScore() {
        return __classPrivateFieldGet(this, _GuessStats_rankedLetterScore, "f");
    }
    get rankedLetterScoreRanked() {
        return __classPrivateFieldGet(this, _GuessStats_rankedLetterScoreRanked, "f");
    }
    get rankedPositionScore() {
        return __classPrivateFieldGet(this, _GuessStats_rankedPositionScore, "f");
    }
    get rankedPositionScoreRanked() {
        return __classPrivateFieldGet(this, _GuessStats_rankedPositionScoreRanked, "f");
    }
    get rank() {
        return __classPrivateFieldGet(this, _GuessStats_rank, "f");
    }
    constructor(word, hybridScore, hybridScoreRanked, letterScore, letterScoreRanked, positionScore, positionScoreRanked, rankedHybridScore, rankedHybridScoreRanked, rankedLetterScore, rankedLetterScoreRanked, rankedPositionScore, rankedPositionScoreRanked, rank) {
        _GuessStats_word.set(this, void 0);
        _GuessStats_hybridScore.set(this, void 0);
        _GuessStats_hybridScoreRanked.set(this, void 0);
        _GuessStats_letterScore.set(this, void 0);
        _GuessStats_letterScoreRanked.set(this, void 0);
        _GuessStats_positionScore.set(this, void 0);
        _GuessStats_positionScoreRanked.set(this, void 0);
        _GuessStats_rankedHybridScore.set(this, void 0);
        _GuessStats_rankedHybridScoreRanked.set(this, void 0);
        _GuessStats_rankedLetterScore.set(this, void 0);
        _GuessStats_rankedLetterScoreRanked.set(this, void 0);
        _GuessStats_rankedPositionScore.set(this, void 0);
        _GuessStats_rankedPositionScoreRanked.set(this, void 0);
        _GuessStats_rank.set(this, void 0);
        __classPrivateFieldSet(this, _GuessStats_word, word, "f");
        __classPrivateFieldSet(this, _GuessStats_hybridScore, hybridScore, "f");
        __classPrivateFieldSet(this, _GuessStats_hybridScoreRanked, hybridScoreRanked, "f");
        __classPrivateFieldSet(this, _GuessStats_letterScore, letterScore, "f");
        __classPrivateFieldSet(this, _GuessStats_letterScoreRanked, letterScoreRanked, "f");
        __classPrivateFieldSet(this, _GuessStats_positionScore, positionScore, "f");
        __classPrivateFieldSet(this, _GuessStats_positionScoreRanked, positionScoreRanked, "f");
        __classPrivateFieldSet(this, _GuessStats_rankedHybridScore, rankedHybridScore, "f");
        __classPrivateFieldSet(this, _GuessStats_rankedHybridScoreRanked, rankedHybridScoreRanked, "f");
        __classPrivateFieldSet(this, _GuessStats_rankedLetterScore, rankedLetterScore, "f");
        __classPrivateFieldSet(this, _GuessStats_rankedLetterScoreRanked, rankedLetterScoreRanked, "f");
        __classPrivateFieldSet(this, _GuessStats_rankedPositionScore, rankedPositionScore, "f");
        __classPrivateFieldSet(this, _GuessStats_rankedPositionScoreRanked, rankedPositionScoreRanked, "f");
        __classPrivateFieldSet(this, _GuessStats_rank, rank, "f");
    }
    static Create(word, letterScore, positionScore, rankedLetterScore, rankedPositionScore, rank) {
        const hybridScore = letterScore + positionScore;
        const rankedHybridScore = rankedLetterScore + rankedPositionScore;
        return new GuessStats(word, hybridScore, hybridScore * rank, letterScore, letterScore * rank, positionScore, positionScore * rank, rankedHybridScore, rankedHybridScore * rank, rankedLetterScore, rankedLetterScore * rank, rankedPositionScore, rankedPositionScore * rank, rank);
    }
    setMax(other) {
        __classPrivateFieldSet(this, _GuessStats_hybridScore, Math.max(__classPrivateFieldGet(this, _GuessStats_hybridScore, "f"), other.hybridScore), "f");
        __classPrivateFieldSet(this, _GuessStats_hybridScoreRanked, Math.max(__classPrivateFieldGet(this, _GuessStats_hybridScoreRanked, "f"), other.hybridScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_letterScore, Math.max(__classPrivateFieldGet(this, _GuessStats_letterScore, "f"), other.letterScore), "f");
        __classPrivateFieldSet(this, _GuessStats_letterScoreRanked, Math.max(__classPrivateFieldGet(this, _GuessStats_letterScoreRanked, "f"), other.letterScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_positionScore, Math.max(__classPrivateFieldGet(this, _GuessStats_positionScore, "f"), other.positionScore), "f");
        __classPrivateFieldSet(this, _GuessStats_positionScoreRanked, Math.max(__classPrivateFieldGet(this, _GuessStats_positionScoreRanked, "f"), other.positionScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedHybridScore, Math.max(__classPrivateFieldGet(this, _GuessStats_rankedHybridScore, "f"), other.rankedHybridScore), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedHybridScoreRanked, Math.max(__classPrivateFieldGet(this, _GuessStats_rankedHybridScoreRanked, "f"), other.rankedHybridScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedLetterScore, Math.max(__classPrivateFieldGet(this, _GuessStats_rankedLetterScore, "f"), other.rankedLetterScore), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedLetterScoreRanked, Math.max(__classPrivateFieldGet(this, _GuessStats_rankedLetterScoreRanked, "f"), other.rankedLetterScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedPositionScore, Math.max(__classPrivateFieldGet(this, _GuessStats_rankedPositionScore, "f"), other.rankedPositionScore), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedPositionScoreRanked, Math.max(__classPrivateFieldGet(this, _GuessStats_rankedPositionScoreRanked, "f"), other.rankedPositionScoreRanked), "f");
    }
    setMin(other) {
        __classPrivateFieldSet(this, _GuessStats_hybridScore, Math.min(__classPrivateFieldGet(this, _GuessStats_hybridScore, "f"), other.hybridScore), "f");
        __classPrivateFieldSet(this, _GuessStats_hybridScoreRanked, Math.min(__classPrivateFieldGet(this, _GuessStats_hybridScoreRanked, "f"), other.hybridScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_letterScore, Math.min(__classPrivateFieldGet(this, _GuessStats_letterScore, "f"), other.letterScore), "f");
        __classPrivateFieldSet(this, _GuessStats_letterScoreRanked, Math.min(__classPrivateFieldGet(this, _GuessStats_letterScoreRanked, "f"), other.letterScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_positionScore, Math.min(__classPrivateFieldGet(this, _GuessStats_positionScore, "f"), other.positionScore), "f");
        __classPrivateFieldSet(this, _GuessStats_positionScoreRanked, Math.min(__classPrivateFieldGet(this, _GuessStats_positionScoreRanked, "f"), other.positionScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedHybridScore, Math.min(__classPrivateFieldGet(this, _GuessStats_rankedHybridScore, "f"), other.rankedHybridScore), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedHybridScoreRanked, Math.min(__classPrivateFieldGet(this, _GuessStats_rankedHybridScoreRanked, "f"), other.rankedHybridScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedLetterScore, Math.min(__classPrivateFieldGet(this, _GuessStats_rankedLetterScore, "f"), other.rankedLetterScore), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedLetterScoreRanked, Math.min(__classPrivateFieldGet(this, _GuessStats_rankedLetterScoreRanked, "f"), other.rankedLetterScoreRanked), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedPositionScore, Math.min(__classPrivateFieldGet(this, _GuessStats_rankedPositionScore, "f"), other.rankedPositionScore), "f");
        __classPrivateFieldSet(this, _GuessStats_rankedPositionScoreRanked, Math.min(__classPrivateFieldGet(this, _GuessStats_rankedPositionScoreRanked, "f"), other.rankedPositionScoreRanked), "f");
    }
}
_GuessStats_word = new WeakMap(), _GuessStats_hybridScore = new WeakMap(), _GuessStats_hybridScoreRanked = new WeakMap(), _GuessStats_letterScore = new WeakMap(), _GuessStats_letterScoreRanked = new WeakMap(), _GuessStats_positionScore = new WeakMap(), _GuessStats_positionScoreRanked = new WeakMap(), _GuessStats_rankedHybridScore = new WeakMap(), _GuessStats_rankedHybridScoreRanked = new WeakMap(), _GuessStats_rankedLetterScore = new WeakMap(), _GuessStats_rankedLetterScoreRanked = new WeakMap(), _GuessStats_rankedPositionScore = new WeakMap(), _GuessStats_rankedPositionScoreRanked = new WeakMap(), _GuessStats_rank = new WeakMap();
export default GuessStats;
//# sourceMappingURL=GuessStats.js.map