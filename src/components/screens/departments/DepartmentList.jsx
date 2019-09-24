import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadDepartments, remove } from './departmentsActions'

import Icon from '../../templates/Icon'

class DepartmentList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadDepartments()
  }

  renderRows() {
    let departments = this.props.departments || []
    return departments.map(department => (
      <tr key={department.id}>
        <td><Link to={`show_department/`+department.id}> {department.attributes.name} </Link></td>
        <td> <Link to={`edit_department/`+department.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.props.remove(department.id)} ><Icon icon='trash' /> </Link> </td>
      </tr>
    ))
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Nome</th>
            <th> - </th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ departments: state.departmentState.departments.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadDepartments, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList)