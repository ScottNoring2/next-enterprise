'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from 'utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import Avatar from '../../account/avatar'
import getUser from '../../auth/getUser'
import getUserId from '../../auth/getUser'
import getUserEmail from '../../auth/getUser';

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
    <div className="form-widget">
    
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstname || ''}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastname || ''}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({username, website, avatar_url,fullname, firstname, lastname, email })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}