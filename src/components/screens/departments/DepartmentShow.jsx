import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


import Main from '../../templates/Main'
import { getDepartment, getDepartmentCompany } from './departmentsActions'
import ShowGridList from '../../templates/ShowGridList'

class DepartmentShow extends Component {

  componentWillMount() {
    this.props.getDepartment(this.props.match.params.id)
    this.props.getDepartmentCompany(this.props.match.params.id)
  }

  renderSectors() {
    let sectors = this.props.sectors || []

    return sectors.map(sector => (
      <tr>
        <td key={sector.id}>
          <Link to="/">{sector.attributes.name}</Link>
        </td>
      </tr>
    ))
  }

  render() {
    const obj = this.props.department || []
    const company = this.props.company || []

    return (
      <Main title="Departamento" >
        <div className="display-4">Departamento</div>
        <div className="employee">

          <ShowGridList label="Nome"
            value={obj.name} />

          <ShowGridList label="Empresa"
            value={company.name} />

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Setores</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSectors()}
            </tbody>
          </table>

        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  department: state.departmentState.department,
  company: state.departmentState.company,
  sectors: state.departmentState.sectors
})

const mapDispatchToProps = dispatch => bindActionCreators({ getDepartment, getDepartmentCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentShow)