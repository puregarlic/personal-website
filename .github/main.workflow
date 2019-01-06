workflow "Test on push" {
  on = "push"
  resolves = ["Install dependencies"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install"
  resolves = ["Run test command"]
}

action "Run test command" {
  uses = "actions/npm@e7aaefe"
  args = "test"
}
