import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadEmployees, remove } from './employeesActions'

import Icon from '../../templates/Icon'

class EmployeeList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadEmployees()
  }

  renderRows() {
    let employees = this.props.employees || []
    return employees.map(employee => (
      <tr key={employee.id}>
        <td><Link to={`employee/`+employee.id}> {employee.attributes.name} </Link></td>
        <td> <Link to={`employee/edit/`+employee.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.props.remove(employee.id)} ><Icon icon='trash' /> </Link> </td>
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

const mapStateToProps = state => ({ employees: state.employeeState.employees.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadEmployees, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)