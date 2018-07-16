import React, { Component } from 'react';
import TaskItemEvent from './TaskItemEvent';
class ListProduct extends Component {
  
  render() {
  	/*Loop các phần tử của list và hiển thị*/
  	var {tasks} = this.props;
  	var elementTask = tasks.map((task, index) =>{
  		return <TaskItemEvent key={task.id} 
                            index={index} 
                            task={task} 
                            onUpdateStatus = {this.props.onUpdateStatus} // get func onUpdateStatus từ App.js sau đố truyền vào từng Item
                            />
  	})
  
    return (
      <table className="table table-bordered table-hover">
          <thead>
              <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Số lượng</th>
                  <th className="text-center">Trạng Thái</th>
                  <th className="text-center">Hành Động</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>

                  <td>
                      <input type="text" className="form-control" />
                  </td>
                  <td></td>
                  <td>
                      <select className="form-control">
                          <option value="-1">Tất Cả</option>
                          <option value="0">Ẩn</option>
                          <option value="1">Kích Hoạt</option>
                      </select>
                  </td>
                  <td></td>
              </tr>
              {/*Event of Item in Table */}
              {elementTask}

          </tbody>
      </table>
    );
  }
}

export default ListProduct;