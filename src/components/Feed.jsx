import React from 'react'

function Feed() {
  return (
    <div className="pt-10">
            <div className="max-w-md mx-auto bg-white  shadow-2xl overflow-hidden md:max-w-4xl">
                <div className="md:flex"></div>
                <div className="p-10">
                        <div className='flex flex-row'> 
                            <h1 className='text-3xl pb-10 mx-10 mt-10'>A térinformatika című tárgy beadandóm</h1>
                        </div>
                    <p>Témám a szülővárosom <b>Nyíregyháza</b>, amiben először kijelöltem az összes <b>Aldi</b> bevásárlóközpontot amit meglepően tapasztaltam hogy sok található meg.</p>
                    <h2 className='text-2xl pb-5 pt-5'>Használt technológiák:</h2>
                    <p> Az alkalmazást React-ben (React + Vite) írtam a react-leaflet könyvtárat használtam ami a térkép megjelenítését és egyéb feladatokat lekezel ez is a <a className='hover:underline semibold text-blue-400' href='https://leafletjs.com/'>leaflet.js</a> használja fel.</p>
                    <h2 className='text-2xl pb-5 pt-5'>Kontextus:</h2>
                    <p> <b>GeoJSON </b>felhasználásával kijelöltem a térképen egy vonalat (lila vonal) ahol most fognak felújítani illetve hogy négy sávos legyen a főút.</p>
                    <p>Ezen kívül kijelöltem Nyíregyháza sétálóutcáit, mellette az egyik leghíresebb városrészét Örökösföldet</p>
                    <p>Marker használatával kijelöltem pár híres nyíregyházi gyros-t áruló helyet, mivel itt bizony kiflivel eszik.</p>
                    <p>Piros kört használva kijelöltem a kórházat, illetve fekete téglalappal pedig az egyik leghíresebb parkot a városban Bujtost </p>
                </div>
            </div>
    </div>

  )
}

export default Feed