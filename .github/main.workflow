workflow "Test on push" {
  on = "push"
  resolves = ["Run test command"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Run test command" {
  uses = "actions/npm@e7aaefe"
  args = "test"
  needs = "Install dependencies"
}
