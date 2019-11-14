import './CompanyList.css'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadCompanies, remove } from './companiesActions'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import Icon from '../../templates/Icon'

class CompanyList extends Component {

  componentDidMount() {
    this.props.loadCompanies()
  }

  removeCompany(id) {
    
    confirmAlert( {
      title: 'Confirma pra Deletar',
      message: `A Empresa só podera ser excluída se não possuir nenhum vínculo com tickets ou colaboradores. 
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
    let companies = this.props.companies || []
    return companies.map(company => (
      <tr key={company.id}>
        <td><Link to={`show_company/`+company.id}> {company.attributes.name} </Link></td>
        <td> <Link to={`edit_company/`+company.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.removeCompany(company.id)} ><Icon icon='trash' /> </Link> </td>
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