import React from 'react'

class AddUser extends React.Component {
    userAdd = {}
    constructor (props) {
        super (props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            avatar: "",
        }
    }

    render (){
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Имя' onChange={(e) => this.setState({first_name: e.target.value})} />
                <input placeholder='Фамилия' onChange={(e) => this.setState({last_name: e.target.value})} />
                <input placeholder='URL аватарки' onChange={(e) => this.setState({avatar: e.target.value})} />
                <textarea placeholder='Email' onChange={(e) => this.setState({email: e.target.value})} ></textarea>
                <button type='button' onClick={() => { 
                    this.myForm.reset()
                    this.userAdd = {
                        firs_tname: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }}>Добавить</button>
            </form>
        )
    }
}

export default AddUser 