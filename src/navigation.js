import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
  {
          text: 'Portfolio',
          href: getPermalink('#Portfolio'),
        },
        {
          text: 'About',
          href: getPermalink('#About'),
        },
        {
          text: 'Contact',
          href: getPermalink('#Contact'),
        },
  ],
//  actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
socialLinks: [

    //{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    //{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },

    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/lizziefen1' },
  ],
  footNote: `
   
    Made by Lizzie</a> · All rights reserved.
  `,
};
