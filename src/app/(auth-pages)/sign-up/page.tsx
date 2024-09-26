import { signUpAction } from "src/app/actions";
import { FormMessage, Message } from "../../../../components/form-message";
import { SubmitButton } from "../../../../components/submit-button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { createClient } from '../../../../utils/supabase/client'

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
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
