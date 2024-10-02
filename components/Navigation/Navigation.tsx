'use server'
import BurgerMenu from "components/BurgerMenu/BurgerMenu";
import BurgerMenuAuth from "components/BurgerMenuAuth/BurgerMenuAuth";
import { createClient } from "utils/supabase/server";


export default async function Navigation() {
  const {
    data: { user },
  } = await createClient().auth.getUser();
 
   return (
    <>
        {user &&
            <BurgerMenuAuth/>
          }
         {!user &&
            <BurgerMenu/>
          }
    </>
   )
 }






 