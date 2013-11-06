require_relative 'gameoflife'

describe GameOfLife, "#go" do
  it "returns true" do
    game = GameOfLife.new
    game.go.should eq(true)
  end
end
