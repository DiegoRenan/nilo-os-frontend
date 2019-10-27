import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { addComments } from './ticketsActions'
import Button from '../../templates/Button'
import TextArea from '../../templates/form/TextArea'
import Grid from '../../templates/Grid'

const required = value => value ? undefined : 'Required'

class AddComments extends Component {

  commentObj(values) {
    const obj =
    {
      data: {
        type: "comments",
        attributes: {
          body: values.comment || '',
          employee_id: localStorage.getItem("employee_id"),
          ticket_id: this.props.ticket_id
        }
      }
    }
    return obj
  }

  onSubmit(values) {
    const obj = this.commentObj(values)
    this.props.addComments(obj)
  }

  render() {
    const { handleSubmit, submitting, reset, pristine } = this.props

    return (
      <div className="add-comment">

        <form onSubmit={handleSubmit(values => this.onSubmit(values))} >

          <div className="container">

            <div className="row mb-3">

              <Grid cols="12 12 12 12">
                <Field component={TextArea}
                  type="textarea"
                  name="comment"
                  validate={[required]}
                  rows="6"
                />
              </Grid>

            </div>

            <div className="row mb-3">

              <Grid cols="12 12 12 12">

                <div className="row ">

                  <Grid cols="6 6 6 6">
                    <button type="button"
                      className="btn btn-secondary btn-flat btn-block"
                      title="limpar"
                      disabled={pristine || submitting}
                      onClick={reset}>limpar</button>
                  </Grid>

                  <Grid cols="6 6 6 6">
                    <Button type="submit"
                      disabled={submitting}
                      class="success btn-block"
                      title="responder"
                    />
                  </Grid>

                </div>

              </Grid>

            </div>

          </div>

        </form>

      </div >
    )
  }

}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('addComment'));

AddComments = reduxForm({
  form: 'addComment',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit
})(AddComments)
const mapDispatchToProps = dispatch => bindActionCreators({ addComments }, dispatch)

AddComments = connect(
  state => ({
    initialValues: {
      comment: state.ticketsState.comment
    }
  }),
  mapDispatchToProps
)(AddComments)

export default AddComments
