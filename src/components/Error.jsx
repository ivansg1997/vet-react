const Error = ({children}) => {
  return (
    <div className='bg-red-800 rounded-xl text-white text-center uppercase font-bold p-3 mb-5 '>
        {children}
    </div>
  )
}

export default Error