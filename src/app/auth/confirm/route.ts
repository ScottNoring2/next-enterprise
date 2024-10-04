import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from 'utils/supabase/server';


async function updateProfile() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user);
  const userId = user?.id;
  const userEmail = user?.email;
  try {

    const { error } = await supabase.from('profiles').upsert({
      id: userId as string,
      username: userEmail, 
      email: userEmail,
      updated_at: new Date().toISOString(),
    })
    if (error) throw error
    return true;
    console.log('Profile updated!')
  } catch (error) {
    return false;
    console.log(error);
    console.log('Error updating the data!')
  } finally {
  }
}

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = '/protected/account-update'
  console.dir(request);
  // Create redirect link without the secret token
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')
 console.log('token hash: ' + token_hash);
 console.log('type: ' + type);
  if (token_hash && type) {
    const supabase = createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    console.log("error:" + error);
    if (!error) {
      
     const isUpdated = await  updateProfile();
      //if(isUpdated){
        redirectTo.searchParams.delete('next')
        return NextResponse.redirect(redirectTo)
      //}
    }
  }
  //TODO: remove some of this and just pass the email fromn user
  // return the user to an error page with some instructions
 
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}