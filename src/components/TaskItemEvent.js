import React, { Component } from 'react';

class TaskItemEvent extends Component {
  
  onUpdateStatus = () => {
    //console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id); // get id từ Item sau đó truyền ngược về list cha
  }
  render() {
    var {task, index} = this.props;
    return (
      <tr>
          <td>{index + 1}</td>
          <td>{task.name}</td>
          <td>{task.quantity}</td>
          <td className="text-center">
              <span className={task.status === true ? "label label-success" : "label label-danger"}
                onClick={this.onUpdateStatus}
              >
                  {task.status === true  ? "Kích Hoạt" : "Ẩn"}
              </span>
          </td>
          <td className="text-center">
              <button type="button" className="btn btn-success">
                  <span className="fa fa-check margin-right-5"></span>Duyệt
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                  <span className="fa fa-trash margin-right-5"></span>Từ chối
              </button>
          </td>
      </tr>
    );
  }
}

export default TaskItemEvent;