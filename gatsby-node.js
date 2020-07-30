/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  // Create product pages from strapi data
  return graphql(`
    {
      allStrapiMcallenproduct {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allStrapiMcallenproduct.edges.forEach(({node}) => {
      createPage({
        path: `/product/${node.name}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is avilable
          // in page queries as GraphQL variables
          id: node.id,
        },
      })
    })
  })
}
