

import { createClient } from '@/utils/supabase/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextResponse, NextRequest } from "next/server";

/*export default async function getUser(request: Request) {
  const supabase = createClient();
  //const { data: users } = await supabase.from("users").select();
  //const { data: { user } } = await supabase.auth.getUser();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let metadata = user?.user_metadata;
console.dir(user);
  return user;
 
}*/


const getUser = async function() {
  //const router = useRouter();
  const supabase = createClient();

    const getUser = async () => {
         const user = await supabase.auth.getUser();
  
        // return user;
         return NextResponse.json({ data: user }, { status: 200 });
    };

    return await getUser();


};

export default getUser;

const getUserId = async function() {
    //const router = useRouter();
    const supabase = createClient();
  
      const getUser = async () => {
           const user = await supabase.auth.getUser();
           const userId = user.data.user?.id;
           return userId;
      };
  
      return await getUser();
  
  
  };

const getUserEmail = async function() {
    //const router = useRouter();
    const supabase = createClient();
  
      const getUser = async () => {
           const user = await supabase.auth.getUser();
           const userEmail = user.data.user?.email;
           return userEmail;
      };
  
      return await getUser();
  
  
  };
  
