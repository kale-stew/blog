import React from 'react'
import { TwitterIcon } from './twitter-icon'
import { shareToTwitter } from '../../utils/share'

import './index.scss'

export const SocialShare = ({ title, author }) => {
  const text = `Recommend on "${title}" written by @${author}`

  const onClickTwitterIcon = e => {
    e.preventDefault()

    return shareToTwitter(window.location.href, text)
  }

  return (
    <div className="social-share">
      <TwitterIcon onClick={onClickTwitterIcon} />
    </div>
  )
}
