import SignInForm from './login';
import SignOutForm from './register';
import ForgotPassForm from './forgot-password';

export default function AuthenticationForm({ view }) {
  let RenderForm = null;

  if (view === 'SIGNIN_VIEW') {
    RenderForm = SignInForm;
  }

  if (view === 'SIGNUP_VIEW') {
    RenderForm = SignOutForm;
  }

  if (view === 'FORGOTPASS_VIEW') {
    RenderForm = ForgotPassForm;
  }

  return <RenderForm />;
}
