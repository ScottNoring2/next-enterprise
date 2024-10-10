'use server'
import { PzFlowbiteReactNavbarAuth } from "components/PzNavigationMenuAuth/PzNavigationMenuAuth";
import { PzFlowbiteReactNavbar } from "components/PzNavigationMenu/PzNavigationMenu";
import { createClient } from "utils/supabase/server";


export default async function PzNavigation() {
  const {
    data: { user },
  } = await createClient().auth.getUser();
 
   return (
    <div className="relative ">
        {user &&
            <PzFlowbiteReactNavbarAuth/>
          }
         {!user &&
            <PzFlowbiteReactNavbar/>
          }
    </div>
   )
 }






 