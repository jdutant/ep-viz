/**
 * Class representing one Condorcet-style election.
 * 
 */
/**
 * @typedef {Object} condorcetElection
 * @property {number} numElectors - Number of electors.
 * @property {number} indCompetence - The probability that a given elector votes correctly.
 * @property {[boolean]} votes - Array of votes cast.
 * @property {[number,number]} count - Counts of correct and incorrect votes. 
 * @property {number} percent - Result in percent for the correct answer.
 * @property {boolean} outcome - Result of the majority vote (coin toss for ties).
 */
export class CondorcetElection {

    /**
     * Create an election.
     * @param {number} numElectors 
     * @param {number} indCompetence 
     */
    constructor(numElectors, indCompetence) {
        console.assert(numElectors > 1, "There must be at least one elector.");
        console.assert(0 <= indCompetence && indCompetence <=1, 
            "Individual elector competence must be between 0 and 1");
        this.size = numElectors;
        this.indCompetence = indCompetence;
        this.vote() // vote and count
    }

    /**
     * Generate votes, store outcome.
     */
    vote () {
        let votes = [];
        for (let i = 0; i < this.size; i++) {
            votes.push(this.indCompetence >= Math.random());
        }

        let correct_count = votes.filter(vote => vote).length;
        let incorrect_count = this.size - correct_count;

        // Determine the majority vote. Ties decided by coin toss.
        let majority = correct_count !== incorrect_count ? 
            correct_count > incorrect_count : Math.random() >= 0.5;
        
        this.votes = votes;
        this.count = {
            correct: correct_count,
            incorrect: incorrect_count
        };
        this.outcome = majority;
        this.percent = correct_count / this.size;
    }

}