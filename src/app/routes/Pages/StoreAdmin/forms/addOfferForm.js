import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  Select,
  TextField
} from 'redux-form-material-ui';
import { initAction, clearAction } from '../../../../actions/ReduxFormActions';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
// const email = value => (
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? 'Invalid email'
//     : undefined
// );

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing.unit * 4,
    textAlign: 'center'
  },
});

// const initData = {
//   text: 'Sample Text',
//   email: 'sample@mail.com',
//   radio: 'option1',
//   selection: 'option1',
//   onof: true,
//   checkbox: true,
//   textarea: 'This is default text'
// };

class AddOfferForm extends Component {
  render() {
    const trueBool = true;
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props;
    return (
      <div>
        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={12}>
            <Paper className={classes.root}>
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="offerName"
                    component={TextField}
                    placeholder="enter offer name"
                    label="Offer Name"
                    validate={required}
                    required
                    ref={this.saveRef}
                    withRef
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="offerDescription"
                    component={TextField}
                    placeholder="enter offer description"
                    label="Offer Description"
                    validate={required}
                    required
                    ref={this.saveRef}
                    withRef
                    className={classes.field}
                  />
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="productId">Select Product ID</InputLabel>
                    <Field
                      name="productId"
                      component={Select}
                      placeholder="Selection"
                      autoWidth={trueBool}
                    >
                      <MenuItem value="french fries">French Fries</MenuItem>
                      <MenuItem value="LIT">LIT</MenuItem>
                      <MenuItem value="Burger">Burger</MenuItem>
                      <MenuItem value="Natchos">Natchos</MenuItem>
                    </Field>
                  </FormControl>
                </div>
                <div>
                  <Field
                    name="productDescription"
                    component={TextField}
                    placeholder="enter product description"
                    label="Product Description"
                    validate={required}
                    required
                    ref={this.saveRef}
                    withRef
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="offerPer"
                    component={TextField}
                    placeholder="Offer per"
                    label="Offer Per"
                    validate={required}
                    required
                    ref={this.saveRef}
                    withRef
                    className={classes.field}
                  />
                </div>
                <div>
                  <FormControl className={classes.field}>
                    <InputLabel htmlFor="beacon">Select Beacon</InputLabel>
                    <Field
                      name="beacon"
                      component={Select}
                      placeholder="Selection"
                      autoWidth={trueBool}
                    >
                      <MenuItem value="beacon3">beacon3</MenuItem>
                      <MenuItem value="beacon6">beacon6</MenuItem>
                      <MenuItem value="beacon2">beacon2</MenuItem>
                      <MenuItem value="beacon11">beacon11</MenuItem>
                      <MenuItem value="beacon7">beacon7</MenuItem>
                    </Field>
                  </FormControl>
                </div>
                <div>
                  <Button variant="raised" color="secondary" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

AddOfferForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const AddOfferFormMapped = reduxForm({
  form: 'addnewOfferForm',
  enableReinitialize: true,
})(AddOfferForm);

const reducer = 'initval';
const AddOfferFormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(AddOfferFormMapped);

export default withStyles(styles)(AddOfferFormInit);
