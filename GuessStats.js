export default class GuessStats {
    #word;
    #hybridScore;
    #hybridScoreRanked;
    #letterScore;
    #letterScoreRanked;
    #positionScore;
    #positionScoreRanked;
    #rankedHybridScore;
    #rankedHybridScoreRanked;
    #rankedLetterScore;
    #rankedLetterScoreRanked;
    #rankedPositionScore;
    #rankedPositionScoreRanked;
    #rank;
    get word() {
        return this.#word;
    }
    get hybridScore() {
        return this.#hybridScore;
    }
    get hybridScoreRanked() {
        return this.#hybridScoreRanked;
    }
    get letterScore() {
        return this.#letterScore;
    }
    get letterScoreRanked() {
        return this.#letterScoreRanked;
    }
    get positionScore() {
        return this.#positionScore;
    }
    get positionScoreRanked() {
        return this.#positionScoreRanked;
    }
    get rankedHybridScore() {
        return this.#rankedHybridScore;
    }
    get rankedHybridScoreRanked() {
        return this.#rankedHybridScoreRanked;
    }
    get rankedLetterScore() {
        return this.#rankedLetterScore;
    }
    get rankedLetterScoreRanked() {
        return this.#rankedLetterScoreRanked;
    }
    get rankedPositionScore() {
        return this.#rankedPositionScore;
    }
    get rankedPositionScoreRanked() {
        return this.#rankedPositionScoreRanked;
    }
    get rank() {
        return this.#rank;
    }
    constructor(word, hybridScore, hybridScoreRanked, letterScore, letterScoreRanked, positionScore, positionScoreRanked, rankedHybridScore, rankedHybridScoreRanked, rankedLetterScore, rankedLetterScoreRanked, rankedPositionScore, rankedPositionScoreRanked, rank) {
        this.#word = word;
        this.#hybridScore = hybridScore;
        this.#hybridScoreRanked = hybridScoreRanked;
        this.#letterScore = letterScore;
        this.#letterScoreRanked = letterScoreRanked;
        this.#positionScore = positionScore;
        this.#positionScoreRanked = positionScoreRanked;
        this.#rankedHybridScore = rankedHybridScore;
        this.#rankedHybridScoreRanked = rankedHybridScoreRanked;
        this.#rankedLetterScore = rankedLetterScore;
        this.#rankedLetterScoreRanked = rankedLetterScoreRanked;
        this.#rankedPositionScore = rankedPositionScore;
        this.#rankedPositionScoreRanked = rankedPositionScoreRanked;
        this.#rank = rank;
    }
    static Create(word, letterScore, positionScore, rankedLetterScore, rankedPositionScore, rank) {
        const hybridScore = letterScore + positionScore;
        const rankedHybridScore = rankedLetterScore + rankedPositionScore;
        return new GuessStats(word, hybridScore, hybridScore * rank, letterScore, letterScore * rank, positionScore, positionScore * rank, rankedHybridScore, rankedHybridScore * rank, rankedLetterScore, rankedLetterScore * rank, rankedPositionScore, rankedPositionScore * rank, rank);
    }
    setMax(other) {
        this.#hybridScore = Math.max(this.#hybridScore, other.hybridScore);
        this.#hybridScoreRanked = Math.max(this.#hybridScoreRanked, other.hybridScoreRanked);
        this.#letterScore = Math.max(this.#letterScore, other.letterScore);
        this.#letterScoreRanked = Math.max(this.#letterScoreRanked, other.letterScoreRanked);
        this.#positionScore = Math.max(this.#positionScore, other.positionScore);
        this.#positionScoreRanked = Math.max(this.#positionScoreRanked, other.positionScoreRanked);
        this.#rankedHybridScore = Math.max(this.#rankedHybridScore, other.rankedHybridScore);
        this.#rankedHybridScoreRanked = Math.max(this.#rankedHybridScoreRanked, other.rankedHybridScoreRanked);
        this.#rankedLetterScore = Math.max(this.#rankedLetterScore, other.rankedLetterScore);
        this.#rankedLetterScoreRanked = Math.max(this.#rankedLetterScoreRanked, other.rankedLetterScoreRanked);
        this.#rankedPositionScore = Math.max(this.#rankedPositionScore, other.rankedPositionScore);
        this.#rankedPositionScoreRanked = Math.max(this.#rankedPositionScoreRanked, other.rankedPositionScoreRanked);
    }
    setMin(other) {
        this.#hybridScore = Math.min(this.#hybridScore, other.hybridScore);
        this.#hybridScoreRanked = Math.min(this.#hybridScoreRanked, other.hybridScoreRanked);
        this.#letterScore = Math.min(this.#letterScore, other.letterScore);
        this.#letterScoreRanked = Math.min(this.#letterScoreRanked, other.letterScoreRanked);
        this.#positionScore = Math.min(this.#positionScore, other.positionScore);
        this.#positionScoreRanked = Math.min(this.#positionScoreRanked, other.positionScoreRanked);
        this.#rankedHybridScore = Math.min(this.#rankedHybridScore, other.rankedHybridScore);
        this.#rankedHybridScoreRanked = Math.min(this.#rankedHybridScoreRanked, other.rankedHybridScoreRanked);
        this.#rankedLetterScore = Math.min(this.#rankedLetterScore, other.rankedLetterScore);
        this.#rankedLetterScoreRanked = Math.min(this.#rankedLetterScoreRanked, other.rankedLetterScoreRanked);
        this.#rankedPositionScore = Math.min(this.#rankedPositionScore, other.rankedPositionScore);
        this.#rankedPositionScoreRanked = Math.min(this.#rankedPositionScoreRanked, other.rankedPositionScoreRanked);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3Vlc3NTdGF0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HdWVzc1N0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sVUFBVTtJQUM5QixLQUFLLENBQVM7SUFDZCxZQUFZLENBQVM7SUFDckIsa0JBQWtCLENBQVM7SUFDM0IsWUFBWSxDQUFTO0lBQ3JCLGtCQUFrQixDQUFTO0lBQzNCLGNBQWMsQ0FBUztJQUN2QixvQkFBb0IsQ0FBUztJQUM3QixrQkFBa0IsQ0FBUztJQUMzQix3QkFBd0IsQ0FBUztJQUNqQyxrQkFBa0IsQ0FBUztJQUMzQix3QkFBd0IsQ0FBUztJQUNqQyxvQkFBb0IsQ0FBUztJQUM3QiwwQkFBMEIsQ0FBUztJQUNuQyxLQUFLLENBQVM7SUFFZCxJQUFXLElBQUk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQVcsV0FBVztRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQVcsaUJBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFXLFdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFXLGlCQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsSUFBVyxhQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBVyxtQkFBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQVcsaUJBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFXLHVCQUF1QjtRQUNqQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FB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