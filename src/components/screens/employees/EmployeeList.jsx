import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadEmployees, remove, changeMaster } from './employeesActions'

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
        <td scope="row"><Link to={`show_employee/` + employee.id}> {employee.attributes.name} </Link></td>
        <td>
          <If test={employee.attributes.email != "admin@nilo.com"} >
            <If test={employee.attributes.master === true} >
              <Link to="#" 
                  onClick={() => this.props.changeMaster(employee.id)} 
                  className="btn btn-outline-success text-success btn-sm mg-l-5" >
                    Remove Master
              </Link> 
            </If>
            <If test={employee.attributes.master === false} >
              <Link to="#" 
                  onClick={() => this.props.changeMaster(employee.id)} 
                  className="btn btn-outline-secondary btn-sm mg-l-5">
                    Tornar Master
              </Link>
            </If> 
            <Link to={`edit_employee/` + employee.id} 
                  className="btn btn-outline-secondary btn-sm fa fa-edit mg-l-5"/>
            <Link to="#"
                  className="btn btn-outline-danger text-danger btn-sm fa fa-trash mg-l-5" 
                  onClick={() => this.removeEmployee(employee.id)}/>
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
const mapDispatchToProps = dispatch => bindActionCreators({loadEmployees, remove, changeMaster}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)