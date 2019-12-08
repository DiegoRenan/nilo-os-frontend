import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../../templates/Main'
import EmployeeForm from './EmployeeForm'

import {getEmployee} from './employeesActions'
import { getCompanyDepartments } from '../company/companiesActions'
import { getDepartmentSectors } from '../departments/departmentsActions'

class EmployeeEdit extends Component  {
	componentWillMount(){
		this.props.getEmployee(this.props.match.params.id)
	}

	render () {
		if(this.props.company)
			this.props.getCompanyDepartments(this.props.company)
		if(this.props.department) 
			this.props.getDepartmentSectors(this.props.department)
		
		return (
		  <Main title="Editar Employee" >
		    <div className="employee-edit">
		      <div className="display-4">Editar Colaborador</div>
		      <EmployeeForm employeeId={this.props.match.params.id}
		                    history={this.props.history}/>
		    </div>
		  </Main>
	  )
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
 	getCompanyDepartments,
  getDepartmentSectors,
  getEmployee
}, dispatch)

const mapStateToProps = state => ({ 
	company: state.employeeState.company,
	department: state.employeeState.department 
})

EmployeeEdit = connect( 
	mapStateToProps,
  mapDispatchToProps
)(EmployeeEdit)

export default EmployeeEdit