import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { required, email, confirmation } from 'redux-form-validators'
import { 
  add, 
  getEmployee, 
  update,
  newEmployee  } from './employeesActions'
import { loadCompanies, getCompanyDepartments} from '../company/companiesActions'
import { getDepartmentSectors } from '../departments/departmentsActions'
import Input from '../../templates/form/Input'
import Select from '../../templates/form/Select'
import Grid from '../../templates/Grid'
import InputFile from '../../templates/form/InputFile'
import profile from './profile.png'
import If from '../../templates/If'

var preview = ""
let avatar = ''
class EmployeeForm extends Component {
  componentWillMount() {
    this.props.loadCompanies()

    if(!this.props.employeeId){
      this.props.newEmployee()
    }
  }

  companiesOptions() {
    let companies = this.props.companies || []
    return companies.map(company => (
      <option value={company.id} key={company.id}>{company.attributes.name}</option>
    ))
  }

  departmentsOptions() {
    const departments = this.props.departments
    return departments.map(department => (
      <option value={department.id} key={department.id}>{department.attributes.name}</option>
    ))
  }

  sectorsOptions() {
    let sectors = this.props.sectors || []
    return sectors.map(sector => (
      <option value={sector.id} key={sector.id}>{sector.attributes.name}</option>
    ))
  }

  companyOnChange(e) {
    this.props.getCompanyDepartments(e.target.value)
  }

  departmentOnChange(e) {
    this.props.getDepartmentSectors(e.target.value)
  }

  onDrop(e) {
    preview = document.querySelector('img');
    let file = e.target.files[0]
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => console.log('file loading')
    
    // //reader.readAsArrayBuffer(file)

    reader.onloadend = function () {
      preview.src = reader.result
      avatar = e.target.files[0]
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = this.props.avatar;
    }
  }

  formData(values) {
    const data = new FormData()
    Object.keys(values).forEach((key, value) => {
      if(key != 'avatar'){
        console.log('key: ', key)
        console.log('value', values[key])
        data.append('employee', `{${key}: ${values[key]}}`)
      }
    })
    
    return data
  }

  onSubmit(values) {
    const obj = this.formData(values)
    if (this.props.employee) {
      this.props.update(this.props.employeeId, obj, this.props.history)
    } else {
      this.props.add(obj, this.props.history)
    }
  }


  render() {

    const { handleSubmit,
      pristine,
      reset,
      submitting } = this.props
    return (
      <div className="employee-form">
        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >
          <div className="container" >
            <div className="row mb-3">
              <Grid cols="12 4 4 4">
                Nome*: <Field component={Input} type="text" name="name" validate={[required()]} />
              </Grid>

              <Grid cols="12 4 4 4">
                CPF*: <Field component={Input} type="number" name="cpf" validate={[required()]} />
              </Grid>

              <Grid cols="12 4 4 4">
                <Field
                  name="avatar" 
                  component={InputFile}
                  type="file"
                  onChange={e => this.onDrop(e)}/>
                <img src={this.props.avatar} height="200" alt="Prévia da imagem..." />
              </Grid>
              
            </div>

            <div className="row mb-3">

              <Grid cols="12 4 4 4">
                E-mail*: <Field component={Input} type="email" name="email" validate={[required(), email()]} />
              </Grid>

              <Grid cols="12 4 4 4">
                Data de Nascimento: <Field component={Input} type="date" name="born" />
              </Grid>

            </div>

            <br />
            <div className="row mb-3">

              <Grid cols="12 12 4 4">
                Empresa*: <Field component={Select}
                  name="company"
                  onChange={e => this.companyOnChange(e)}
                  validate={[required()]}>
                  <option value="" disabled>Selecione uma Empresa</option>
                  {this.companiesOptions()}
                </Field>
              </Grid>

              <Grid cols="12 12 4 4">
                Departamento: <Field component={Select}
                  name="department"
                  onChange={e => this.departmentOnChange(e)}
                >
                  <option value="" disabled>Selecione o Departamento</option>
                  {this.departmentsOptions()}
                </Field>
              </Grid>

              <Grid cols="12 12 4 4">
                Setor: <Field component={Select} name="sector">
                  <option value="" disabled>Selecione o Setor</option>
                  {this.sectorsOptions()}
                </Field>
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
                Bairro: <Field component={Input} type="text" name="district" />
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 8 8 8">
                Cidade: <Field component={Input} type="text" name="city" />
              </Grid>

              <Grid cols="12 4 4 4">
                Estado: <Field component={Select} name="uf" >
                  <option value={undefined} disabled>Selecione um Estado</option>
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

            <If test={!this.props.employeeId}>
              <h6>Senha: </h6>
              <div className="row mb-3">
                <Grid cols="12 8 8 8">
                  Senha: <Field 
                    component={Input} 
                    type="password" 
                    name="password" 
                    validate={[required()]} />
                </Grid>
                <Grid cols="12 8 8 8">
                  Confirmar Senha: <Field component={Input}
                    type="password"
                    name="password_confirmation"
                    validate={[confirmation({ field: 'password' }), required()]} />
                </Grid>
              </div>
              <div className="row mb-3">
                <Grid cols="12 12 12 12">
                  Master: {' '}
                  <label>
                    <Field name="master" component="input" type="checkbox" />
                  </label>
                </Grid>
              </div>
            </If>

            <button type="submit"
              className="btn btn-primary btn-flat ml-auto m-2"
              disabled={submitting} >
              Salvar</button>

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

EmployeeForm = reduxForm({ form: 'employeeForm', 
                            required, 
                            enableReinitialize: true })(EmployeeForm)

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  getEmployee,
  update,
  loadCompanies,
  getCompanyDepartments,
  getDepartmentSectors,
  newEmployee
}, dispatch)

EmployeeForm = connect(
  state => ({
    initialValues: {
      employee: state.employeeState.employee,
      name: state.employeeState.name,
      company: state.employeeState.company,
      department: state.employeeState.department,
      sector: state.employeeState.sector,
      cpf: state.employeeState.cpf,
      email: state.employeeState.email,
      born: state.employeeState.born,
      cep: state.employeeState.cep,
      street: state.employeeState.street,
      number: state.employeeState.number,
      district: state.employeeState.district,
      city: state.employeeState.city,
      uf: state.employeeState.uf,
      master: false
   },
   employee: state.employeeState.employee,
   companies: state.employeeState.companies,
   departments: state.employeeState.departments,
   sectors: state.employeeState.sectors,
   avatar: state.employeeState.avatar
  }),
  mapDispatchToProps
)(EmployeeForm)

export default EmployeeForm
