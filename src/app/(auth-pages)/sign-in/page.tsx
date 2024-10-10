import { signInAction } from "../../actions";
import { FormMessage, Message } from "../../../../components/form-message";
import { PzButtonSubmit } from "components/PzButtonSubmit/PzButtonSubmit";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function Login({ searchParams }: { searchParams: Message }) {
  const t = useTranslations('Forms');
  return (
    <form className="form-container">
      <h1> {t('signin')}</h1>
      <p>
        Don't have an account?{" "}
        <Link href="/sign-up" className="capitalize">
          {t('signup')}
        </Link>
      </p>
      <div className="form-inner-container">
      <div className="form-field">
        <FloatingLabel
          controlId="email"
          label= {t('email')}
          className="mb-3"
        >
          <Form.Control type="email" name="email" placeholder="name@example.com" required/>
        </FloatingLabel>
      </div>
      <div className="form-field">
        <FloatingLabel
          controlId="password"
          label= {t('password')}
          className="mb-3"
        >
          <Form.Control type="password" name="password" placeholder="" required/>
        </FloatingLabel>
      </div>

        <Link
            className="text-xs capitalize"
            href="/forgot-password"
          >
            {t('forgotpassword')}
          </Link>
     
         
        <PzButtonSubmit formAction={signInAction} intent="primary" size="lg" pendingText="Signing in...">
          {t('signin')}
        </PzButtonSubmit>

        
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}

Login.messages = ['Forms'];