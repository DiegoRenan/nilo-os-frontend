import './Company.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../../templates/Main'
import Input from '../../templates/form/Input'
import Grid from '../../templates/Grid'
import Button from '../../templates/Button'
import { update, changeCompany, getCompany } from './companiesActions'

class CompanyUpdate extends Component {
  
  componentWillMount() {
    this.props.getCompany(this.props.match.params.id)
  }
  
  render() {
    const companyObj =  { data: { id: this.props.id, type: "companies", attributes: { name: this.props.name} } }
    return (
      <Main title="Empresas" >
        <div className="display-4">Empresas</div>
        <div className="company">
          <div role='form' className='row'>
            <Grid cols="10 10 10 10">
              <Input type="text" value={this.props.name} onChange={this.props.changeCompany} />
            </Grid>
            <Grid cols="2 2 2 2">
              <Button icon="plus" style="primary" onClick={() => this.props.update(companyObj, this.props)} />
            </Grid>
          </div>
        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({ id: state.companiesState.id, name: state.companiesState.company })
const mapDispatchToProps = dispatch => bindActionCreators({ update, changeCompany, getCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyUpdate)