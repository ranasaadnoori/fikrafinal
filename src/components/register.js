import React,{Component} from 'react'




export default class Register extends Component{
    constructor(props) {
        super(props)  
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeMname = this.onChangeMname.bind(this);
        this.onChangeSname = this.onChangeSname.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            user_fname:'',
            user_mname:'',
            user_sname:'',
            user_mail:'',
            user_password:''
        }
       };

onChangeFname(e){
    this.setState({
        user_fname: e.target.value
    })
}
onChangeMname(e){
    this.setState({
        user_mname: e.target.value
    })
}
onChangeSname(e){
    this.setState({
        user_sname: e.target.value
    })
}
onChangeMail(e){
    this.setState({
        user_mail: e.target.value
    })
}
onChangePassword(e){
    this.setState({
        user_password: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.user_fname}, ${this.state.user_mname},${this.state.user_sname}
    ${this.state.user_mail},${this.state.user_password}`)
    this.setState({
        user_fname:'',
        user_mname:'',
        user_sname:'',
        user_mail:'',
        user_password:''
    })
  }
render(){
    return(
        <div style={{marginTop: 10}}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add First Name:  </label>
                        <input type="text" className="form-control" 
                         value={this.state.user_fname}
                         onChange={this.onChangeFname}/>
                    </div>
                    <div className="form-group">
                        <label>Add Middle Name: </label>
                        <input type="text" className="form-control"
                        value={this.state.user_mname}
                        onChange={this.onChangeMname}/>
                    </div>
                    <div className="form-group">
                        <label>Add Surname Name: </label>
                        <input type="text" className="form-control"
                         value={this.state.user_sname}
                         onChange={this.onChangeSname}/>
                    </div>
                    <div className="form-group">
                        <label>Insert Email: </label>
                        <input type="text" className="form-control"
                        value={this.state.user_mail}
                        onChange={this.onChangeMail}/>
                    </div>
                    <div className="form-group">
                        <label>Insert Password: </label>
                        <input type="password" className="form-control"
                        value={this.state.user_password}
                        autoComplete="Password"
                        onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
    )
}
}