import { useState } from 'react'
import { auth  } from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Create = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            console.log(userCredentials)
            setEmail('')
            setPassword('')
        })
    }

  return (
    <div>
        <form onSubmit={createAccount}>
            <h1>Create a New Account</h1>
            <input type="email" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}  value={email}/>
            <input type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <button type='submit'>Create Account</button>
        </form>
    </div>
  )
}

export default Create