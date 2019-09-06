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
        {console.log(obj.name)}
        <div className="display-4">Colaborador</div>
        <div className="employee">

          <ShowGridList label="Nome"
            value={obj.name} />

          <ShowGridList label="Email"
            value={obj.email} />


          <ShowGridList label="Nascimento"
            value={obj.born} />

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

const mapStateToProps = state => ({ employee: state.employeeState.employee })
const mapDispatchToProps = dispatch => bindActionCreators({ getEmployee }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeShow)