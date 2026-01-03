import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useAppStore} from '../store/AppStore'
export default function register(){
        const {registerAccount} = useAppStore()
        const navigate = useNavigate()
        const[form, setform] = useState({name:'', email:'', password:''})

        async function submit(e){
            e.preventDefault()
            const ok = await registerAccount(form.name, form.email, form.password)
            if(ok) navigate('/')       
        }
    return (
           <div className='container'>
                <h2>Register</h2>
                    <form className='form' onSubmit={submit}>
                        <label>
                            Name
                            <input value={form.name} onChange={(e)=>setform({...form, name:e.target.value})} />
                        </label>

                        <label>
                            Email
                             <input value={form.email} onChange={(e)=>setform({...form, email:e.target.value})} />
                        </label>
                        
                        <label>
                            Password
                             <input type='password' value={form.password} onChange={(e)=>setform({...form, password:e.target.value})} />
                        </label>
                        
                        <button className='btn' type='submit'>Create Account</button>

                    </form>
           </div> 
    )

};