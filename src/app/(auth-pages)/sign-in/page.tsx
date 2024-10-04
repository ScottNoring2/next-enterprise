import { signInAction } from "../../actions";
import { FormMessage, Message } from "../../../../components/form-message";
import { PzButtonSubmit } from "components/PzButtonSubmit/PzButtonSubmit";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import Link from "next/link";
import {useTranslations} from 'next-intl';

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
          <Input name="email" placeholder="" className="peer" required />  
          <Label htmlFor="email" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('email')}</Label>
        </div>
      <div className="form-field">
        <Input
          type="password"
          name="password"
          placeholder="" 
          className="peer" 
          required
        /> 
        <Label htmlFor="password" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('password')}</Label>
        <Link
            className="text-xs capitalize"
            href="/forgot-password"
          >
            {t('forgotpassword')}
          </Link>
        </div>
         
        <PzButtonSubmit formAction={signInAction} intent="primary" size="lg" pendingText="Signing in...">
          {t('signin')}
        </PzButtonSubmit>

        
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}

Login.messages = ['Forms'];