
import { createClient } from "utils/supabase/server";

export default async function Account() {
  const supabase = createClient();
  //const { data: users } = await supabase.from("users").select();
  //const { data: { user } } = await supabase.auth.getUser();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let metadata = user?.user_metadata;
console.dir(user);
  return (
 <><p>Account Page TESTING</p>
 <p>{metadata?.email}</p></>
  )
}