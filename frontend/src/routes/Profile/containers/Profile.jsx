import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfile, updateProfile } from '../modules/ProfileApi'
import { ProfileImg } from './StyledComponents/ProfileImage';
import ProfileForm from './ProfileForm'

class Profile extends React.Component {
  componentDidMount() {
    const { getProfile, userId } = this.props

    getProfile(userId)
  }

  render() {
    const { user, updateProfile } = this.props

    return (
      <div>
        <div className="my-5 text-center">
          <ProfileImg src={ user.avatar } />
        </div>
        <ProfileForm onSubmit={ updateProfile } user={ user } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  user: state.profile.user,
})

const mapDispatchToProps = {
  getProfile,
  updateProfile,
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  user: PropTypes.object,
  updateProfile: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
