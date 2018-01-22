import React from 'react';

const socials = [
  {
    name: 'FACEBOOK',
    url: 'https://www.facebook.com/WeWorkLabs/',
  },
  {
    name: 'TWITTER',
    url: 'https://twitter.com/weworklabs/',
  },
  {
    name: 'LINKEDIN',
    url: 'https://www.linkedin.com/company/wework-labs',
  },
]

export const SocialFooter = () => (
  <div className="flex-row flex-hc">
    <ul className="list-inline">
      <li className="list-inline-item">Follow Us:</li>
      {socials.map((social, i) => (
        <li className="list-inline-item" key={ i }>
          <a href={ social.url }>{social.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialFooter
