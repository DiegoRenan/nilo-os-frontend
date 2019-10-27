import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadEmployees, remove } from './employeesActions'

import Icon from '../../templates/Icon'
import If from '../../templates/If'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class EmployeeList extends Component {

  componentDidMount() {
    this.props.loadEmployees()
  }

  removeEmployee(id) {
    
    confirmAlert( {
      title: 'Confirma pra Deletar',
      message: `O usuário só podera ser removido se não estiver mais vínculado a nenhum ticket. 
                Deseja continuar?`,
      buttons: [
        {
          label: 'Confirmar',
          onClick: () => this.props.remove(id)
        },
        {
          label: 'Cancelar',
          onClick: () => {}
        }
      ]
    });

  }

  renderRows() {
    let employees = this.props.employees || []
    return employees.map(employee => (
      <tr key={employee.id}>
        <td><Link to={`show_employee/` + employee.id}> {employee.attributes.name} </Link></td>

        <td>
          <If test={!(localStorage.getItem("admin") === true)} >
            <Link to={`edit_employee/` + employee.id}> <Icon icon='edit' /> </Link>
          </If> 
        </td>
          <td>
            <If test={!(localStorage.getItem("admin") === true)} >
              <Link to="#" onClick={() => this.removeEmployee(employee.id)} ><Icon icon='trash' /> </Link> 
            </If>
        </td>
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
      
const mapStateToProps = state => ({employees: state.employeeState.employees.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadEmployees, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)