import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

const SocialMedia = ({ facebook, google, twitter, youtube, gitHub }) => (
  <div>
    {facebook && <a href={facebook} target='_blank' rel="noreferrer"><FaFacebookF /></a>}
    {google && <a href={google} target='_blank' rel="noreferrer"><FaGoogle /></a>}
    {twitter && <a href={twitter} target='_blank' rel="noreferrer"><FaTwitter /></a>}
    {youtube && <a href={youtube} target='_blank' rel="noreferrer"><FaYoutube /></a>}
    {gitHub && <a href={gitHub} target='_blank' rel="noreferrer"><FaGithub /></a>}
  </div>
)

export default SocialMedia
