import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FiFacebook } from 'react-icons/fi'
import { CiTwitter } from 'react-icons/ci'
const Register = () => {

   /**
 * React component for the registration form.
 *
 * @return {JSX.Element} The JSX element of the registration form.
 */

   const [state, setState] = useState({
      name: '',
      email: '',
      password: ''
   })

    const inputHandle = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }

    const submit = (e) => {
      e.preventDefault()
      console.log(state)
    }
    
  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
       <div className='w-[350px] text-[#d0d2d6] p2'>
          <div className='bg-[#283046] p-4 rounded-md'>
                <h2 className='text-xl mb-3'>Welcome to E-commerce Shopp</h2>
                <p className='text-sm mb-3'>Please register your account and start your business</p>
               <form onSubmit={submit}>
                  <div className='flex flex-col w-full gap-1 mb-3'>
                     <label htmlFor="name">Name</label>
                     <input onChange={inputHandle} value={state.name} 
                     className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md
                     text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="text" 
                     name='name' placeholder='name' id='name' required/>
                  </div>

                  <div className='flex flex-col w-full gap-1 mb-3'>
                     <label htmlFor="email">Email</label>
                     <input onChange={inputHandle} value={state.email} 
                     className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md
                     text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="email" 
                     name='email' placeholder='Email' id='email' required/>
                  </div>

                  <div className='flex flex-col w-full gap-1 mb-3'>
                     <label htmlFor="password">Password</label>
                     <input onChange={inputHandle} value={state.password} 
                     className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md
                     text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="password" 
                     name='password' placeholder='Password' id='password' required/>
                  </div>

                   <div className='flex items-center w-full gap-3 mb-3'>
                     <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded
                     border-gray-300 focus:ring-blue-500' type="checkbox" name='checkbox' id='checkbox' required/>
                      <label htmlFor="checkbox">I agree to privacy policy & terms</label>
                  </div>
                  <button className='bg-blue-500 w-full hover:shadow-blue-500/50
                  hover:shadow-lg text-white rounded-md py-2 px-7 mb-3 '>
                     Register
                  </button>
                  <div className='flex items-center mb-3 gap-3 justify-center'>
                      <p>Already have an account? <Link to='/login' className='text-blue-500 hover:text-blue-700 ' >Login Here</Link> </p>
                  </div>
                  <div className='w-full flex justify-center items-center mb-3'>
                        <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>Or</span>
                            </div>
                        <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                  </div>
                  <div className='flex justify-center items-center gap-3'>
                     <div className='w-[55px] h-[30px] flex rounded-md bg-gray-100  shadow-lg
                     hover:shadow-gray-100/50 justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FcGoogle/></span>
                     </div>

                     <div className='w-[55px] h-[30px] flex rounded-md bg-indigo-700  shadow-lg
                     hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FiFacebook/></span>
                     </div>

                     <div className='w-[55px] h-[30px] flex rounded-md bg-cyan-700  shadow-lg
                     hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                        <span><CiTwitter/></span>
                     </div>

               
                  </div>

                  
               </form> 
          </div>
          
       </div>
    </div>
  )
}

export default Register