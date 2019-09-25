import './Company.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Main from '../../templates/Main'
import Grid from '../../templates/Grid'
import { getCompany } from './companiesActions'

class CompanyShow extends Component {

  componentWillMount() {
    this.props.getCompany(this.props.match.params.id)
  }

  renderDepartments() {
    const departments = this.props.departments || []

    return departments.map(department => (
      <tr>
        <td key={department.id}>
          <Link to={`/show_department/`+department.id}>{department.attributes.name}</Link>
        </td>
      </tr>
    ))
  }

  render() {
    const obj = this.props.company || []


    console.log(obj)
    return (
      <Main title="Empresa" >
        <div className="display-4">Empresa</div>
        <div className="company">
          <div className='row'>
            <Grid cols="2 2 2 2">
              <label> Nome: </label>
            </Grid>
            <Grid cols="10 10 10 10">
              {obj.name}
            </Grid>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Departamentos</th>
                </tr>
              </thead>
              <tbody>
                {this.renderDepartments()}
              </tbody>
            </table>

          </div>
        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  company: state.companiesState.company,
  departments: state.companiesState.departments
})
const mapDispatchToProps = dispatch => bindActionCreators({ getCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyShow)