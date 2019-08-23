import './Company.css'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../../templates/Main'
import Input from '../../templates/form/Input'
import Grid from '../../templates/Grid'
import Button from '../../templates/Button'
import CompanyList from './CompanyList'
import { add, changeCompany } from './companiesActions'

const Company = props => {

  const companyObj = () => {
    const obj = 
      {
        data: {
          type: "companies",
            attributes: {
            name: props.company
          }
        }
      }
    return obj
  }

  return (
    <Main title="Empresas" >
      <div className="display-4">Empresas</div>
      <div className="company">
        <div role='form' className='row'>
          <Grid cols="10 10 10 10">
            <Input type="text" value={props.company} onChange={props.changeCompany} />
          </Grid>
          <Grid cols="2 2 2 2">
            <Button icon="plus" style="primary" onClick={() => props.add(companyObj())} />
          </Grid>
        </div>
        <CompanyList />
      </div>
    </Main>
  )
}

const mapStateToProps = state => ({ company: state.companiesState.company })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Company)