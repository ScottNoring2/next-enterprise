'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from 'utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import Avatar from '../../account/avatar'
import getUser from '../../auth/getUser'
import getUserId from '../../auth/getUser'
import getUserEmail from '../../auth/getUser';
import { ButtonSubmit } from 'components/ButtonSubmit/ButtonSubmit'
import { Button } from 'components/Button/Button'
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function AccountForm() {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [firstname, setFirstname] = useState<string | null>(null)
  const [lastname, setLastname] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const t = useTranslations('Forms');

  const getProfile = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id;
    const userEmail = user?.email;
    try {
     console.dir(user);
      setLoading(true)
      console.log('user id: ' + userId)
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, full_name,  avatar_url, website, first_name, last_name, email`)
        .eq('id', userId)
        .single()
console.dir(data);
      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      

      if (data) {
        setFullname(data.full_name)
        setFirstname(data.first_name)
        setLastname(data.last_name)
        setEmail(data.email)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
        console.log("error: " + error);
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  /*useEffect(() => {
    getUser()
  }, [getUser])*/

  useEffect(() => {
    getProfile()
  }, [getProfile])

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
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id;
    const userEmail = user?.email;
    try {
      setLoading(true)
console.log("fisrt_name: " + firstname);
      const { error } = await supabase.from('profiles').upsert({
        id: userId as string,
        username, 
        full_name: fullname,
        avatar_url,
        website,
        first_name: firstname,
        last_name: lastname,
        email: email,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
   
    <form className="form-container">
        <h1>{t('accountupdate')}</h1>
    
        <div className="form-inner-container">
        <div className="form-field">
          <Input name="email" placeholder="" value={email || ''}  className="peer" required onChange={(e) => setEmail(e.target.value)}/>  
          <Label htmlFor="email" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('email')}</Label>
        </div>
        <div className="form-field">
          <Input name="text" id="fullname" value={fullname || ''} placeholder="" className="peer" required onChange={(e) => setFullname(e.target.value)}/>  
          <Label htmlFor="fullname" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('fullname')}</Label>
        </div>
        <div className="form-field">
          <Input name="text" id="firstName" value={firstname || ''} placeholder="" className="peer" required onChange={(e) => setFirstname(e.target.value)}/>  
          <Label htmlFor="firstName" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('firstname')}</Label>
        </div>
        <div className="form-field">
          <Input name="text" id="lastName" value={lastname || ''} placeholder="" className="peer" required onChange={(e) => setLastname(e.target.value)}/>  
          <Label htmlFor="lastName" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('lastname')}</Label>
        </div>
       {/* <div className="form-field">
          <Input name="text" id="username" value={username || ''}placeholder="" className="peer" required onChange={(e) => setUsername(e.target.value)}/>  
          <Label htmlFor="username" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('username')}</Label>
        </div>*/}
        <div className="form-field">
          <Input name="text" id="website" value={website || ''}placeholder="" className="peer" required onChange={(e) => setWebsite(e.target.value)}/>  
          <Label htmlFor="website" className="peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{t('website')}</Label>
        </div>
      
      
      
     

       {/*} <button
          className="button primary block"
          onClick={() => updateProfile({username, website, avatar_url,fullname, firstname, lastname, email })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update Profile'}
        </button>*/}
        <Button intent="primary" size="lg" 
          onClick={() => updateProfile({username, website, avatar_url,fullname, firstname, lastname, email })}
          disabled={loading}>
           {loading ? 'Loading ...' : 'Update Profile'}
        </Button>
      </div>
    
      
    </form>
  )
}

AccountForm.messages = ['Forms'];