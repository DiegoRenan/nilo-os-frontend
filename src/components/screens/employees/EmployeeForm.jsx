import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, getEmployee, update } from './employeesActions'
import Input from '../../templates/form/Input'
import Select from '../../templates/form/Select'
import Grid from '../../templates/Grid';

const required = value => value ? undefined : 'Required'

class EmployeeForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.employeeId){
      this.props.getEmployee(this.props.employeeId)
    }
  }

  employeeObj(values){
    const obj = {
      data: {
        type: "employees",
        id: this.props.employeeId || '',
        attributes: {
          name: values.name || '',
          email: values.email || '',
          born: values.born || '',
          cpf: values.cpf || '',
          cep: values.cep || '',
          street: values.street || '',
          number: values.number || '',
          district: values.district || '',
          city: values.city || '',
          uf: values.uf || '',
          company_id: "c1ab5ce7-ee85-41cb-9124-f32658babc9d"
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    const obj = this.employeeObj(values)
    if (this.props.employeeId) {
      this.props.update(obj, this.props)
    }else{
      this.props.add(obj)
    }  
  }


  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      
      

      <div className="employee-form">
        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
          <div className="container" >
            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                Nome*: <Field component={Input} type="text" name="name" validate={[ required]} />
              </Grid>

              <Grid cols="12 4 4 4">
                CPF*: <Field component={Input} type="number" name="cpf" validate={[ required]}/>
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                E-mail*: <Field component={Input} type="email" name="email" validate={[ required]}/>
              </Grid>

              <Grid cols="12 4 4 4">
                Data de Nascimento: <Field component={Input} type="date" name="born" />
              </Grid>

            </div>

            <br />
            <h6>Endereço: </h6>

            <div className="row mb-3">

              <Grid cols="12 4 4 4">
                CEP: <Field component={Input} type="number" name="cep" />
              </Grid>

              <Grid cols="12 8 8 8">
                Rua: <Field component={Input} type="text" name="street" />
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 4 4 4">
                Número: <Field component={Input} type="text" name="number" />
              </Grid>

              <Grid cols="12 8 8 8">
                Bairro: <Field component={Input} type="text" name="district"/>
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                Cidade: <Field component={Input} type="text" name="city" />
              </Grid>

              <Grid cols="12 4 4 4">
                Estado: <Field component={Select} name="uf" >
                  <option>Selecione um Estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </Field>
              </Grid>

            </div>

            <button type="submit"
                    className="btn btn-primary btn-flat ml-auto m-2"
                    disabled={submitting} >
                    Salvar
                  </button>

            <button type="button"
                    className="btn btn-secondary btn-flat ml-auto"
                    disabled={pristine || submitting}
                    onClick={reset}>Limpar Campos</button>
          </div>
        </form>

      </div>

    )

  }
}

EmployeeForm = reduxForm({ form: 'employeeForm', enableReinitialize: true })(EmployeeForm)

const mapDispatchToProps = dispatch => bindActionCreators({ add, getEmployee, update }, dispatch)

EmployeeForm = connect(
  state => ({
    initialValues: state.employeeState.employee
  }),
  mapDispatchToProps
)(EmployeeForm)

export default EmployeeForm
