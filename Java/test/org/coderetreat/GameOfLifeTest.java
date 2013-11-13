package org.coderetreat;

import org.junit.*;
import static org.junit.Assert.*;


public class GameOfLifeTest {

	private GameOfLife gameOfLife;

	@Before
    public void setUp() {
		gameOfLife = new GameOfLife();
	}

	@Test
	public void testGoFunctionReturnsFalse() {
		assertFalse(gameOfLife.go());
	}
}