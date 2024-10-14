import { signUpAction } from "src/app/actions";
import { FormMessage, Message } from "../../../../components/form-message";
import { PzButtonSubmit } from "components/PzButtonSubmit/PzButtonSubmit";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { createClient } from '../../../../utils/supabase/client';
import {useTranslations} from 'next-intl';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

async function updateProfile({
  username,
  website,
  avatar_url,
  fullname,
  firstname,
  lastname,
  email
}: {
  username: string | null
  website: string | null
  avatar_url: string | null
  fullname: string | null
  firstname: string | null
  lastname: string | null
  email: string | null
}) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser()
  const userId = user?.id;
  const userEmail = user?.email;
  try {
    

    const { error } = await supabase.from('profiles').upsert({
      id: userId as string,
      username: email, 
      full_name: 'Scott Noring',
      avatar_url,
      website: 'www.google.com',
      first_name: 'Scott',
      last_name: 'Noring',
      email: email,
      updated_at: new Date().toISOString(),
    })
    if (error) throw error
    alert('Profile updated!')
  } catch (error) {
    alert('Error updating the data!')
  } finally {
  }
}

export default function Signup({ searchParams }: { searchParams: Message }) {
  const t = useTranslations('Forms');

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="form-container">
        <h1> {t('signup')}</h1>
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="capitalize">
            {t('signin')}
          </Link>
        </p>
    
        <div className="form-inner-container">
       {/*</div> <div className="form-field">
    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Floating outlined</label>
</div>*/}
          <div className="form-field">
            <FloatingLabel
              controlId="email"
              label= {t('email')}
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </FloatingLabel>
      </div>
      <div className="form-field">
        <FloatingLabel
          controlId="password"
          label= {t('password')}
          className="mb-3"
        >
          <Form.Control type="password" name="password" placeholder="" />
        </FloatingLabel>
      </div>
         
        <PzButtonSubmit formAction={signUpAction} intent="primary" size="lg" className="w-full md:w-1/2" pendingText="Signing up...">
        {t('signup')}
        </PzButtonSubmit>
          
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}

Signup.messages = ['Forms'];
