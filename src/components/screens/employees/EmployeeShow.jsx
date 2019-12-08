import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../../templates/Main'
import { getEmployee, getEmployeeCompany } from './employeesActions'
import ShowGridList from '../../templates/ShowGridList'
import Grid from '../../templates/Grid'

class EmployeeShow extends Component {

  componentWillMount() {
    this.props.getEmployee(this.props.match.params.id)
  }

  render() {
    const obj = this.props.employee || []
    const company = this.props.company || []
    const department = this.props.department || []
    const sector = this.props.sector || []

    return (
      <Main title="Colaborador" >
        <div className="display-4">Colaborador</div>
        <div className="row employee">
          <Grid cols="12 12 12 3">
            <img src={obj.avatar} className="rounded float-left" height="200" />
          </Grid>

          <Grid cols="12 12 12 9">
            <ShowGridList label="Nome"
              value={obj.name} />

            <ShowGridList label="Email"
              value={obj.email} />

            <ShowGridList label="Nascimento"
              value={obj.born} />

            <ShowGridList label="Empresa"
              value={company.name} />

            <ShowGridList label="Departmento"
              value={department.name} />

            <ShowGridList label="Setor"
              value={sector.name} />
          </Grid>
        </div>
        <ShowGridList label="CPF"
            value={obj.cpf} />

        <ShowGridList label="CEP"
          value={obj.cep} />

        <ShowGridList label="Rua"
          value={obj.street} />

        <ShowGridList label="Número"
          value={obj.number} />

        <ShowGridList label="Bairro"
          value={obj.district} />

        <ShowGridList label="Cidade"
          value={obj.city} />

        <ShowGridList label="UF"
          value={obj.uf} />
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  employee: state.employeeState.employee,
  company: state.employeeState.company,
  department: state.employeeState.department,
  sector: state.employeeState.sector
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
  getEmployee,
  getEmployeeCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeShow)