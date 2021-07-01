import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

const SocialMedia = ({ facebook, google, twitter, youtube, gitHub }) => (
  <div>
    {facebook && <a href={facebook}><FaFacebookF /></a>}
    {google && <a href={google}><FaGoogle /></a>}
    {twitter && <a href={twitter}><FaTwitter /></a>}
    {youtube && <a href={youtube}><FaYoutube /></a>}
    {gitHub && <a href={gitHub}><FaGithub /></a>}
  </div>
)

export default SocialMedia
