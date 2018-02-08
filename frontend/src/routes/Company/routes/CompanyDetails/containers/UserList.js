import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import classnames from 'classnames'
import User from './User'

export const UserList = ({ users, className }) =>
  <Row className={ classnames('justify-content-center', className) }>
    {users.map((user, i) =>
      <Col xs={ 4 } key={ i }>
        <User
          first_name={ user.first_name }
          last_name={ user.last_name }
          title={ user.title }
          facebook={ user.facebook }
          linkedin={ user.linkedin }
          avatar={ user.avatar } />
      </Col>
    )}
  </Row>

UserList.propTypes = {
  className: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })).isRequired,
}

export default UserList
