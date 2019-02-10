import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import loginBackground from 'ba-images/login_background.svg';
import { LoginForm } from './../../../components';
import styles from './../../../components/Forms/user-jss';
// import ApiClient from '../../../../helpers/ApiClient';
import userActions from '../../../actions/userActions';

// const client = new ApiClient();
class Login extends React.Component {
  // state = {
  //   valueForm: []
  // }

  submitForm(values) {
    console.log('values===>', values);
    this.props.login('karnamit2105@gmail.com', 'karnamit2105', 'bsmnfsdmf', this.props.history);
    // .then(() => console.log('hello=====>'));
    // setTimeout(() => {
    //   this.setState({ valueForm: values });
    //   console.log(`You submitted:\n\n${this.state.valueForm}`);
    //   // window.location.href = '/app';
    //   client.post('https://api.rockinap.com/admin/login', {
    //     data: {
    //       email: 'karnamit2105@gmail.com',
    //       password: 'karnamit2105',
    //       device_id: 'bsmnfsdmf'
    //     }
    //   }).then(res => {
    //     const { data } = res.data;
    //     console.log('Login=====>', data);
    //     localStorage.setItem('uid', data.user_id);
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('role', data.role);
    //     client.post('https://api.rockinap.com/admin/get-organisation', {
    //       data: {
    //         id: 'cd5b0abf-74ca-4c32-bfcf-cde6d1518a35'
    //       },
    //       headers: {
    //         'x-access-token': data.token,
    //         'Content-Type': 'application/json'
    //       }
    //     }).then(_res => {
    //       console.log('Org=====>', _res);
    //     });
    //   }).catch(err => {
    //     console.log('=====>', err);
    //   });
    //   this.props.history.push('/app');
    // }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <Grid container spacing={24} alignItems="center" direction="row" justify="center">
            <Grid item container justify="center" spacing={0} className={classes.loginWrap}>
              <Hidden smDown>
                <Grid item md={6} className={classes.welcomeWrap}>
                  <img src={loginBackground} alt={brand.name} />
                </Grid>
              </Hidden>
              <Grid item md={6} sm={8} xs={11}>
                {/* ----------------------------------------------------------------------*/}
                {/* Load Login Form */}
                <LoginForm onSubmit={(values) => this.submitForm(values)} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  // logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authentication: state,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(userActions.login, dispatch),
  logout: bindActionCreators(userActions.logout, dispatch),
});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default withStyles(styles)(LoginMapped);
