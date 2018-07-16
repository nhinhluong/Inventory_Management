import React, { Component } from 'react';

class AddProductForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        name : '',
        quantity: 0,
        status: true
    }
  }

  onCloseFormAdd = () => {
    this.props.onCloseFormAdd();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    // set status bằng kiểu boolean
    if(name === 'status'){
        value = target.value === 'true' ? true : false ;
    }
    this.setState({
        [name] : value       
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    // truyên dữ liệu từ state sang props để có thể thêm vào form list
    this.props.onSubmit(this.state);
    // sau khi submit thi close form và xóa các trường đi
    this.onClear();
    this.onCloseFormAdd();
  }
  onClear = () => {
    this.setState({
        name : '',
        quantity: 0,
        status: false
    })
  }
  render() {

  
  
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                	Thêm Mới Sản Phẩm &nbsp;
            	</h3>
    			<span className="fa fa-times-circle icon-right" onClick={this.onCloseFormAdd}></span>
            </div>
            <div className="panel-body">
                <form onSubmit={ this.onSubmit}>
                    <div className="form-group">
                        <label className="lbl">Tên :</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label className="lbl">Số lượng :</label>
                        <input type="number" className="form-control" name="quantity" value={this.state.quantity} onChange={this.onChange}/>
                    </div>
                    <label className="lbl">Trạng Thái :</label>
                    <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Thêm</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    
    );
  }
}

export default AddProductForm;