const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PolygonMesh Documentation',
  tagline: 'A design system by Polygon',
  url: 'https://maticnetwork.github.io/matic-design-system/',
  baseUrl: '/matic-design-system/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maticnetwork', // Usually your GitHub org/user name.
  projectName: 'matic-design-system', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PolygonMesh',
      logo: {
        alt: 'Polygon Mesh Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/maticnetwork/matic-design-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'CSS Library Tutorial',
              to: '/docs/css-library/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/0xPolygon',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/polygon',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/maticnetwork/matic-design-system',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polygon Technology.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            `https://github.com/maticnetwork/matic-design-system/edit/master/website/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
