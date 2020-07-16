/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  // todo: remove fixture data
  const result = {
    data: {
      allStrapiMcallenproduct: {
        edges: [
          {
            node: {
              id: 1,
              name: 'food',
              UID: '1',
              product: {
                description: 'product 1',
                images: [
                  {
                    formats: {
                      thumbnail: {
                        url: 'https://picsum.photos/id/1043/200/200.jpg',
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  }

  return result.data.allStrapiMcallenproduct.edges.forEach(({node}) => {
    createPage({
      path: `/product/${node.name}/`,
      component: path.resolve(`./src/templates/ProductPage/index.js`),
      context: {
        // Data passed to context is avilable
        // in page queries as GraphQL variables
        UID: node.UID,
      },
    })
  })

  // Create product pages from strapi data
  // return graphql(`
  //   {
  //     allStrapiMcallenproduct {
  //       edges {
  //         node {
  //           name
  //           UID
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   result.data.allStrapiMcallenproduct.edges.forEach(({node}) => {
  //     createPage({
  //       path: `/product/${node.name}/`,
  //       component: path.resolve(`./src/templates/ProductPage/index.js`),
  //       context: {
  //         // Data passed to context is avilable
  //         // in page queries as GraphQL variables
  //         UID: node.UID,
  //       },
  //     })
  //   })
  // })
}
