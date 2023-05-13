import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from './AddUser'

class User extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render (){
        return (<div className='user'>
                    <IoCloseCircleSharp className="delete-icon" onClick={() => this.props.onDelete(this.user.id)}/>
                    <IoHammerSharp className="edit-icon" onClick={() => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }} />
                    <div className='userInfo'>
                        <img src={this.user.avatar} />
                        <div className='userText'>
                            <h3>{this.user.first_name} {this.user.last_name}</h3>
                            <p>{this.user.email}</p>
                        </div>
                    </div>

                    {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
                </div>)}}

export default User 