test("Go should return true", function() {
	var gameoflife = new GameOfLife();
	var result = gameoflife.go();
	ok(result == true);
});