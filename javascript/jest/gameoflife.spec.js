const GameOfLife = require('./gameoflife');

describe("Go", () => {
    it("should return true", function() {
        const gameoflife = new GameOfLife();

        const result = gameoflife.go();

        expect(result).toBe(true);
    });
});
