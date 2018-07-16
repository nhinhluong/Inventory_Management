import React, { Component } from 'react';
import './App.css';
import ListProduct from './components/ListProduct';
import AddProductForm from './components/AddProductForm';
import Search from './components/Search';
import Sort from './components/Sort';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tasks : [], // id: unique, name,quantity,status
      isDisplayFormAdd: false
    }
  }
  /*Được gọi duy nhất 1 lần khi load trang*/
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState({
            tasks : tasks
        });
    }
  }
  /*
  onGenerateData = () => {
    var tasks = [
      {
        id : this.generateID(),
        name: 'Bánh mì que',
        quantity : 25,
        status : true
      },
      {
        id : this.generateID(),
        name: 'Bánh mì sấy',
        quantity : 15,
        status : false
      },
      {
        id : this.generateID(),
        name: 'Cà phê',
        quantity : 5,
        status : true
      }
    ];
    //console.log(tasks);
    this.setState({
      tasks : tasks
    });
     // lưu trữ dữ liệu vào localStorage, khi refresh lại browser thì không bị mất data
     //   JSON.stringify chuyển Object sang dạng string 
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  */
  /*Tạo mới GUID trong js*/
  S4() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID (){
    return ( this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4()).toLowerCase();
  }
  onToggleFormAdd = () => {
    this.setState({
      isDisplayFormAdd : ! this.state.isDisplayFormAdd
    })
  }
  onCloseFormAdd = () => {
    this.setState({
      isDisplayFormAdd : false
    })
  }

  onSubmit = (data) => {
    //console.log(data);
    // tạo biến mới để lưu dữ liệu từ state, sau đó push vào tasks hiện tại đang show và lưu vào localStorage
    var { tasks } = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    // var task = {
    //   id : this.generateID(),
    //   name : data.name,
    //   quantity : data.quantity,
    //   status : data.status
    // }
  }
  render() {
    var {tasks, isDisplayFormAdd} = this.state; // tạo ra 1 task mới # var tasks = this.state.tasks
    var elementFormAdd = isDisplayFormAdd === true ? 
        <AddProductForm onSubmit={this.onSubmit} onCloseFormAdd={this.onCloseFormAdd}/> : '';
    return (
      <div className="container">
          <div className="text-center">
              <h1>Quản Lý Kho</h1>
              <hr/>
          </div>
          <div className="row margin-top-15">
              <div className={isDisplayFormAdd === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                  {/*Add Product Form*/}
                  {elementFormAdd}
              </div>

              <div className={isDisplayFormAdd === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                  <div className="row margin-left-5">
                    <button type="button" className="btn btn-primary btnAddProduct"
                      onClick={this.onToggleFormAdd}>
                        Thêm Sản Phẩm &nbsp;<span className="fa fa-plus mr-5"></span> 
                    </button>
                  {/*
                    <button type="button" className="btn btn-primary btnAddProduct"
                      onClick={this.onGenerateData}
                    >
                        Generate Data &nbsp; 
                    </button>
                    */}
                  </div>
                  <div className="row margin-top-15 ">
                    {/*Search Form*/}
                    <Search></Search>
                    {/*Soft Form*/}
                    <Sort></Sort>
                  </div>
                  <div className="row margin-top-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          {/*List Product Form*/}
                          <ListProduct tasks={ tasks }/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
