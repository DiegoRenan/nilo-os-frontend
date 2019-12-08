import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../../templates/Main'
import { getEmployee } from './employeesActions'
import ShowGridList from '../../templates/ShowGridList'

class EmployeeShow extends Component {

  componentWillMount() {
    this.props.getEmployee(this.props.match.params.id)
  }

  render() {
    const obj = this.props.employee || []
    return (
      <Main title="Colaborador" >
        <div className="display-4">Colaborador</div>

        <div className="row employee">
          <Grid cols="12 12 12 3">
            <img src={this.props.avatar} className="rounded float-left" height="200" />
          </Grid>
          
          <img src={obj.avatar} className="rounded float-left" height="200" />
          
          <ShowGridList label="Nome"
            value={obj.name} />

          <ShowGridList label="Email"
            value={obj.email} />

          <ShowGridList label="Nascimento"
            value={obj.born} />

            <ShowGridList label="Empresa"
              value={this.props.c_name} />

            <ShowGridList label="Departmento"
              value={this.props.d_name} />

            <ShowGridList label="Setor"
              value={this.props.s_name} />
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

        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  employee: state.employeeState.employee,
  avatar: state.employeeState.avatar,
  c_name: state.employeeState.c_name,
  d_name: state.employeeState.d_name,
  s_name: state.employeeState.s_name
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
  getEmployee }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeShow)