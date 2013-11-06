require_relative 'gameoflife'
require 'test/unit'

class TestGameOfLife < Test::Unit::TestCase
	def test_go
		game = GameOfLife.new
		assert(game.go)
	end
end