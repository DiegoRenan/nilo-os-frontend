import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { avatarUpload } from './employeesActions';
import InputFile from '../../templates/form/InputFile';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AvatarUpload extends Component {

  avatarObj(formData) {

    const obj = {
      data: {
        type: "avatar",
        attributes: {
          avatar: formData || ''
        }
      }
    }
  }
    

  onFormSubmit(values) {
    let id = this.props.id
    let formData = new FormData();
    formData.append('avatar', values.avatar[0])
    const data = this.avatarObj(formData)
    this.props.avatarUpload(data, id)
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(values => this.onFormSubmit(values))} >
        <label>Foto de Perfil</label>
        <Field
          component={InputFile}
          name="avatar"
          type="file"
        />
        <button type="submit"
          className="btn btn-primary btn-flat ml-auto m-2"
          disabled={submitting} >
          Salvar</button>
      </form>
    )
  }
}

AvatarUpload = reduxForm({ form: 'avatarForm' })(AvatarUpload)

const mapDispatchToProps = dispatch => bindActionCreators({
  avatarUpload
}, dispatch)

AvatarUpload = connect(
  null,
  mapDispatchToProps
)(AvatarUpload)

export default AvatarUpload
