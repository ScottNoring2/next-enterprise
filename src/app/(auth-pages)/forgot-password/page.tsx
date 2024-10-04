import { forgotPasswordAction } from "src/app/actions";
import { FormMessage, Message } from "components/form-message";
import { SubmitButton } from "components/submit-button";
import { SmtpMessage } from "../smtp-message";
import { ButtonSubmit } from "components/ButtonSubmit/ButtonSubmit";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import Link from "next/link";
import {useTranslations} from 'next-intl';

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
          <Input name="email" placeholder="" className="peer" required />  
          <Label htmlFor="email" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('email')}</Label>
        </div>
          <ButtonSubmit formAction={forgotPasswordAction} intent="primary" size="lg" pendingText="Signing in...">
            {t('resetpassword')}
          </ButtonSubmit>

          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
ForgotPassword.messages = ['Forms'];