
import { resetPasswordAction } from "src/app/actions";
import { FormMessage, Message } from "../../../../components/form-message";
import { PzButtonSubmit } from "components/PzButtonSubmit/PzButtonSubmit";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {useTranslations} from 'next-intl';

export default  function ResetPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  const t = useTranslations('Forms');

  return (
    <form className="form-container">
      <h1>{t('resetpassword')}</h1>
      <p>
        {t("resetpasswordintro")}
      </p>

      <div className="form-inner-container">
        <div className="form-field">
          <Input name="password"   type="password" className="peer"  required /> 
          <Label htmlFor="password" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('newpassword')}</Label>
        </div>

        <div className="form-field">
          <Input name="confirmPassword"   type="password" className="peer" required /> 
          <Label htmlFor="confirmPassword" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('confirmpassword')}</Label>
        </div>
    
      
      <PzButtonSubmit formAction={resetPasswordAction}>
        {t('resetpassword')}
      </PzButtonSubmit>
      <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
ResetPassword.messages = ['Forms'];