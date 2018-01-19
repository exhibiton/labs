import React from "react";

const socials = [
  {
    name: 'FACEBOOK',
    url: 'https://www.facebook.com/WeWorkLabs/'
  },
  {
    name: 'TWITTER',
    url: 'https://twitter.com/weworklabs/'
  },
  {
    name: 'LINKEDIN',
    url: 'https://www.linkedin.com/company/wework-labs'
  }
]

export const SocialFooter = (props) => (
  <div class="flex-row flex-hc">
    <ul class="list-inline">
      <li class="list-inline-item">Follow Us:</li>
      {socials.map((social) => (
        <li class="list-inline-item">
          <a href={social.url}>{social.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialFooter
