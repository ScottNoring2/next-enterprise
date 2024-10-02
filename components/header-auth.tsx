
import { signOutAction } from "src/app/actions";
import { hasEnvVars } from "utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./Button/Button";
import { ButtonSubmit } from "./ButtonSubmit/ButtonSubmit";
import { createClient } from "utils/supabase/server";


export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
        </div>
      </>
    );
  }
  return user ? (
   <></>
  ) : (
    /*<div className="flex justify-end hidden md:block">
        <Button intent="secondary" size="sm">
          <Link href="/sign-in">sign in</Link>
        </Button>
        <Button intent="secondary"  size="sm">
          <Link href="/sign-up">sign up</Link>
        </Button>
    </div>*/
    <></>
      
    
  );
}
