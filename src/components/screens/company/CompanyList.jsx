import './CompanyList.css'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadCompanies, remove } from './companiesActions'

import Icon from '../../templates/Icon'

class CompanyList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadCompanies()
  }

  renderRows() {
    let companies = this.props.companies || []
    return companies.map(company => (
      <tr key={company.id}>
        <td><Link to={`companyShow/`+company.id}> {company.attributes.name} </Link></td>
        <td> <Link to={`companyUpdate/`+company.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.props.remove(company.id)} ><Icon icon='trash' /> </Link> </td>
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

const mapStateToProps = state => ({ companies: state.companiesState.companies.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadCompanies, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)