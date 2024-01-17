import type { GatsbyNode } from "gatsby"

type Project = {
  title: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    title: "Game of Life",
    description: "A playful implementation of Conway's game of life using processing",
    url: "https://github.com/ZanderSparrow/GoL"
  },
  {
    title: "Recipe API",
    description: "An API build in django to store recipes",
    url: "https://github.com/ZanderSparrow/django-recipe-api"
  },
  {
    title: "Pavise",
    description: "A short text-based game written in python",
    url: "https://gist.github.com/ZanderSparrow/069e6b5749c4225352e23375947699e1"
  }
]

export const sourceNodes: GatsbyNode["sourceNodes"] = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  projects.forEach(project => {
    createNode({
      ...project,
      id: createNodeId(`Project-${project.title}`),
      internal: {
        type: `Project`,
        contentDigest: createContentDigest(project),
      }
    })
  })
}
