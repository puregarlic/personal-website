const GET_PROJECT_BUDGET = `
{
  getProjectList(filter: { match: { inBudget: true } }, size: 3) {
    items {
      title
      url
    }
  }
}
`

export default GET_PROJECT_BUDGET
