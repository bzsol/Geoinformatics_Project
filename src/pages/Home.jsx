import Navbar from '../components/Navbar';
import MapComp from '../components/MapComp';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-20 md:pt-40 bg-slate-100 pb-14'>
      <div className="flex-none shadow-2xl md:mx-40 ">
        <MapComp></MapComp>
      </div>
      </div>
    </div>
  )
}

export default Home