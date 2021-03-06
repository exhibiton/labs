import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { show as showModal } from 'redux-modal'
import Fa from 'react-fontawesome'
import { getProfile, updateProfile } from '../modules/ProfileApi'
import { ProfileImgHolder } from './StyledComponents'
import ProfileForm from './ProfileForm'
import ProfileUploadImageForm from './ProfileUploadImageForm'

class Profile extends React.Component {
  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }),
    user: PropTypes.object,
    updateProfile: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getProfile, params: { userId } } = this.props

    getProfile(userId)
  }

  getInitValues = () => {
    const { user } = this.props

    if (user) {
      return user
    }

    return {}
  }

  render() {
    const { user, updateProfile, showModal } = this.props

    return (
      <div>
        <ProfileImgHolder className="my-5 text-center">
          <Fa
            name="camera"
            onClick={ () =>
              showModal('defaultModal', {
                title: 'Change avatar',
                content: <ProfileUploadImageForm />,
              }) } />
          <img src={ user.avatar } />
        </ProfileImgHolder>
        <ProfileForm onSubmit={ updateProfile } initialValues={ this.getInitValues() } enableReinitialize={ true } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
})

const mapDispatchToProps = {
  getProfile,
  updateProfile,
  showModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
