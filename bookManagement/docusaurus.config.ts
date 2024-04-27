import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import configProxy from "@site/configProxy/configProxy";

const config: Config = {
  title: 'Book Management',
  tagline: 'Get Your Book',
  favicon: 'img/cat.ico',


  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // aws static page
  url: configProxy.NEED_DEPLOY_TO_AWS ? configProxy.AWS_URL : configProxy.GITHUB_PAGE_URL,
  baseUrl: configProxy.NEED_DEPLOY_TO_AWS ? '/' : '/bookManagementFrontend',
  // githubPage
  // url: 'https://quennelorg.github.io',
  // baseUrl: '/bookManagementFrontend',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quennelOrg', // Usually your GitHub org/user name.
  projectName: 'bookManagement', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Book',
      logo: {
        alt: 'Book',
        src: 'img/cat.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/book', label: 'Book', position: 'left'},
        {
          href: 'https://github.com/Quennel-coder',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Feature',
          items: [
            {
              label: 'Book',
              href: '/book',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://quennelorg.github.io/quennelBlog/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Quennel-coder',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quennel-Coder, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
