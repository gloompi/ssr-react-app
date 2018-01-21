import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'

class UsersList extends Component{
  componentDidMount() {
    const {fetchUsers} = this.props

    fetchUsers()
  }

  render(){
    return(
      <div>
        <h3>Users List</h3>
        {this.renderUsers()}
      </div>
    )
  }

  renderUsers() {
    const {users} = this.props

    return users.map(user => <li key={user.id}>{user.name}</li>)
  }
}

export default connect(state => ({
  users: state.users
}), {fetchUsers})(UsersList)