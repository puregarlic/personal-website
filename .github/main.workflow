workflow "Test on push" {
  on = "push"
  resolves = ["Run test command"]
}

action "Run test command" {
  uses = "actions/npm@e7aaefe"
  args = "test"
}
