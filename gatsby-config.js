/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Mickael Araujo`,
    description: `Desenvolvedor web full-stack focado nas tecnologias ao redor do ecossistema Javascript. Desenvolvo soluções completas e com interfaces amigáveis para o usuário.`,
    author: `Mickael Araujo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Ubuntu:300,400,500,700']
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#59CEB9`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/projects"],
        height: 3,
        prependToBody: false,
        color: `#59CEB9`,
        footerHeight: 500,
      }
    }
  ],
}
