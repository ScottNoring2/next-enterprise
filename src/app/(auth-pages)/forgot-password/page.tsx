import { forgotPasswordAction } from "src/app/actions";
import { FormMessage, Message } from "components/form-message";
import { SmtpMessage } from "../smtp-message";
import { PzButtonSubmit } from "components/PzButtonSubmit/PzButtonSubmit";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  const t = useTranslations('Forms');
  return (
    <>
     <form className="form-container">
        <h1> {t('resetpassword')}</h1>
        <p>
          {t('haveaccount')}&nbsp;
          <Link href="/sign-in" className="capitalize">
              {t('signin')}
          </Link>
        </p>
        <div className="form-inner-container">
        <div className="form-field">
        <FloatingLabel
          controlId="email"
          label= {t('email')}
          className="mb-3"
        >
          <Form.Control type="email" name="email" placeholder="name@example.com" />
        </FloatingLabel>
        </div>
          <PzButtonSubmit formAction={forgotPasswordAction} intent="primary" size="lg" className="w-full md:w-1/2" pendingText="Signing in...">
            {t('resetpassword')}
          </PzButtonSubmit>

          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
ForgotPassword.messages = ['Forms'];