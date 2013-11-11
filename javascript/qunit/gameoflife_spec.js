test("Go should return true", function() {
	var gameoflife = new GameOfLife();
	var result = gameoflife.doit();
	ok(result == true);
});