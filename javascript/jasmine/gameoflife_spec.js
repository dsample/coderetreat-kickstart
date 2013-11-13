describe("Game Of Life", function() {

	var gameoflife = new GameOfLife();

	describe("Go", function(){
		it("should return true", function() {
			var result = gameoflife.go();
			expect(result).toBeTruthy();
		});
	});
});