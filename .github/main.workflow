workflow "Test on push" {
  on = "push"
  resolves = ["Run test command"]
}

action "Install dependencies" {
  uses = "docker://culturehq/actions-yarn:latest"
  args = "install"
}

action "Run test command" {
  uses = "docker://culturehq/actions-yarn:latest"
  args = "test"
  needs = "Install dependencies"
}
