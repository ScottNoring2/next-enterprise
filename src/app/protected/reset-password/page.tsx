
import { resetPasswordAction } from "src/app/actions";
import { FormMessage, Message } from "../../../../components/form-message";
import { PzButtonSubmit } from "components/PzButtonSubmit/PzButtonSubmit";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {useTranslations} from 'next-intl';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
        <FloatingLabel
          controlId="password"
          label= {t('password')}
          className="mb-3"
        >
          <Form.Control type="password" name="password" placeholder="" required/>
        </FloatingLabel>
        </div>

        <div className="form-field">
          <FloatingLabel
            controlId="confirmPassword"
            label= {t('confirmpassword')}
            className="mb-3"
          >
            <Form.Control type="password" name="confirmPassword" placeholder="" required/>
          </FloatingLabel>
          
        </div>
    
      
      <PzButtonSubmit formAction={resetPasswordAction} intent="primary" size="lg" className="w-full md:w-1/2" >
        {t('resetpassword')}
      </PzButtonSubmit>
      <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
ResetPassword.messages = ['Forms'];