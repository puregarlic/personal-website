/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Image } from '@rebass/emotion'

import profile from '../images/profile.jpg'

const ProfilePicture = () => <Image width={300} src={profile} borderRadius="50%" />

export default ProfilePicture
