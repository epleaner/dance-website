module.exports = {
  siteMetadata: {
    title: 'Dharma Action Network for Climate Engagement (DANCE)',
    author: 'Eli Pleaner',
    description:
      'A space for connecting to explore the breadth of possible Dharma responses to climate change and related issues.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dharma-action-network-for-climate-engagement',
        short_name: 'dance',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
