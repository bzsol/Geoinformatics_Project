
function Error() {
    return (
      <div className='text-center mt-40' >
          <h1 className='text-6xl font-bold text-red-500 mb-5'>404</h1>
          <p className='text-2xl mb-10'>Az oldal sajnos nem található!</p>
          <a href='/'><button type="button" className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white ">Vissza a kezdőlapra</button></a>
      </div>
    )
  }
  
  export default Error;