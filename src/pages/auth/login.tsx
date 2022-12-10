
const Login = () => {
  return (
    <div className='bg-slate-700 h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center text-white bg-slate-600 h-2/3 w-2/6 gap-16'>
        <h1 className='text-center text-4xl'>Login</h1>
        <form className='flex flex-col gap-2 items-center'>
          <label className='flex flex-col'>
            Email
            <input type='text' className='rounded p-1 text-black' />
          </label>
          <label className='flex flex-col'>
            Password
            <input type='text' className='rounded p-1 text-black' />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Login;
