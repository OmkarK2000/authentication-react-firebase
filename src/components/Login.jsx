import { useEffect, useState } from 'react'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const logIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const loggedInUser = userCredential.user
                setUser(loggedInUser)
                setEmail('')
                setPassword('')
            }).catch((error) => {
                console.log(error)
            })
    }

    const logOut = () => {
        signOut(auth)
        .then(()=> {
            setUser(null)
            console.log("sign out")
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
        return () => unsubscribe()
    },[])

    return (
        <div>
            <form onSubmit={logIn}>
                <h1>Log in</h1>
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <button type='submit'>Log in</button>
            </form>
            {user ? (
                <div>
                    <p>Welcome, {user.email}</p>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <p>You are not logged in</p>
            )}
        </div>
    )
}

export default Login