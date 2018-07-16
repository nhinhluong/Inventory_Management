import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		userName: '',
  		passWord: '',
  		txtNote:'',
  		sltGender: 1,
  		rdLang: 'vie',
  		chkbStatus: true
  	};
  	//this.onHandleChange = this.onHandleChange.bind(this);
  	//this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange = (event) => {
  	//console.log(event.target.value);
  	var target = event.target; // target tới từng input
  	var name = target.name;
  	var value = target.type === 'checkbox' ? target.checked : target.value; // lấy value của từng input, trường hớp đặc biệt với checkbox thì lấy boolean
  	this.setState({
  		[name] : value
  	})
  }
  onHandleSubmit = (event) => {
  	event.preventDefault(); //Ngăn form không submit value
  	console.log(this.state);
  }
  render() {

  
  
    return (
    	<div className="container">
	    	<div className="row">
			    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
			      <form onSubmit={this.onHandleSubmit} role="form">
			      
			      	<div className="form-group">
			      		<label >Username: </label>
			      		<input type="text" name="userName" onChange={this.onHandleChange} 
			      			className="form-control" />
			      	</div>
			      	<div className="form-group">
			      		<label >Password: </label>
			      		<input type="password" name="passWord" onChange={this.onHandleChange} 
			      			className="form-control" />
			      	</div>
			        <div className="form-group">
			      		<label >Note: </label>
			      		<textarea name="txtNote" rows="3" onChange={this.onHandleChange} 
			      			className="form-control" />
			      	</div>
			      	<label>Giới tính: </label>
			      	<select name="sltGender" id="input" className="form-control" 
			      		value={this.state.sltGender} onChange={this.onHandleChange} required="required">
			      		<option value={0} >Female</option>
			      		<option value={1} >Male</option>
			      	</select>
			      	<br/>
			      	<label>Ngôn ngữ: </label>
			      	<div className="radio">
			      		<label>
			      			<input type="radio" name="rdLang" id="input" 
			      			value="vie" onChange={this.onHandleChange} checked={this.state.rdLang==="vie"}/>
			      			Vietnamese
			      		</label><br/>
			      		<label>
			      			<input type="radio" name="rdLang" id="input" 
			      			value="eng" onChange={this.onHandleChange} checked={this.state.rdLang==="eng"}/>
			      			English
			      		</label>
			      	</div>

			      	<div className="checkbox">
			      		<label>
			      			<input type="checkbox" name="chkbStatus" checked={this.state.chkbStatus===true} 
			      			value={true} onChange={this.onHandleChange}/>
			      			Status
			      		</label>
			      	</div>
			      
			      	<button type="submit" className="btn btn-primary">Save</button>&nbsp;
			      	<button type="reset" className="btn btn-default">Reset</button>
			      </form>
			    </div>	
		    </div>	
	    </div>	
    );
  }
}

export default ProductForm;