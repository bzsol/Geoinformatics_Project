import { MapContainer, TileLayer, Marker, Popup, LayersControl, Polyline, Polygon,Circle,Rectangle } from "react-leaflet";

function MapComp() {
    const position = [47.95592504001502, 21.71613968926161];
    const aldi = [[47.9530000572297, 21.742637508489537], [47.94180922128879, 21.715229784001906], [47.97128975017861, 21.741230586492975], [47.95827228544778, 21.720916582634686], [47.94517663103369, 21.73680446477286]];
    const icon = L.icon({ iconUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDAeyCtkeYHfYwinnYgtX9iF0t9dSd2t5a09HG6e4Vvn_dSSj5", iconSize: [30, 36], });
    const marker_icon = L.icon({ iconUrl: "marker.svg", iconSize: [40, 40], });
    const fillBlueOptions = { color: 'blue', fillColor: 'blue' }
    const fillGreenOptions = { color: 'green', fillColor: 'green' }
    const purpleOptions = { color: 'purple' }
    const giri = [47.96291840923948,21.713112567500843]
    const allomas = [47.947502915249345, 21.70582415901191]
    const total = [47.9592594931386,21.715548748207453]
    const gyar = [47.94761684054387, 21.726008112697883]
    const bujtos = [
        [
          47.964192391523426,
          21.72627528375932,
         
        ],
        [
          47.95935717849068,
          21.72627528375932,
          
        ],
        [
          47.95935717849068,
          21.73527595580876,
          
        ],
        [
         47.964192391523426,
          21.73527595580876,
          
        ],
        [
          47.964192391523426,
          21.72627528375932,
          
        ]
      ]
    const orokosfold = [
        [
            47.955342663155534,
            21.73548592271422,

        ],
        [
            47.95532909090886,
            21.73739091403965,

        ],
        [
            47.95494906655327,
            21.738282612107014,

        ],
        [
            47.954892377677055,
            21.740689456141553,

        ],
        [
            47.95538406007125,
            21.74148840541534,

        ],
        [
            47.95548528821848,
            21.743809676956516,
        ],
        [
            47.9619807285861,
            21.74398588321813,

        ],
        [
            47.96205427713451,
            21.735594432760564,

        ],
        [
            47.955342663155534,
            21.73548592271422,

        ]
    ]
    const old_town = [
        [
            47.95413901490849,
            21.715467947068674,

        ],
        [
            47.95412350384311,
            21.7159903413704,

        ],
        [
            47.95500073343743,
            21.71620650452857,

        ],
        [
            47.95505932977537,
            21.717289893694158,

        ],
        [
            47.9552072222362,
            21.71771749780504,

        ],
        [
            47.95567471925037,
            21.71792223184488,

        ],
        [
            47.95573006697282,
            21.71785085667446,

        ],
        [
            47.95575270920568,
            21.71740757930087,

        ],
        [
            47.95579421994043,
            21.717341839011794,

        ],
        [
            47.95675698902605,
            21.71721417671023,
        ],
        [
            47.957273515131476,
            21.717298699938198,

        ],
        [
            47.957726689169704,
            21.717484651041843,

        ],
        [
            47.95791410900108,
            21.717616131618797,

        ],
        [
            47.95798832203491,
            21.717300578233818,

        ],
        [
            47.957938283147996,
            21.717274980300914,

        ],
        [
            47.9580716149008,
            21.716668291352903,

        ],
        [
            47.958056520757225,
            21.7165142712482,

        ],
        [
            47.9580112383004,
            21.71645040925327,

        ],
        [
            47.957933251754184,
            21.716469192192648,

        ],
        [
            47.95787539069218,
            21.716503001484313,

        ],
        [
            47.95778608327353,
            21.71653868906816,

        ],
        [
            47.95773199560702,
            21.717149134604483,

        ],
        [
            47.95741753130764,
            21.71707212455368,

        ],
        [
            47.95686748473324,
            21.7169274959177,

        ],
        [
            47.956249981157384,
            21.716767840930686,

        ],
        [
            47.956243691709375,
            21.71669270917309,

        ],
        [
            47.956252496936145,
            21.716640116942045,

        ],
        [
            47.95664533301198,
            21.716281649045897,

        ],
        [
            47.956488097794534,
            21.71586654608143,

        ],
        [
            47.95604235823416,
            21.716401611084535,

        ],
        [
            47.95527585492442,
            21.716080978662404,

        ],
        [
            47.9554812295315,
            21.714668732391544,

        ],
        [
            47.95526747227041,
            21.71456233931923,

        ],
        [
            47.95523953007972,
            21.715273712602823,

        ],
        [
            47.95511798137315,
            21.71604767004706,

        ],
        [
            47.954253056194204,
            21.715757696773125,

        ],
        [
            47.95422092204268,
            21.715480240331686,

        ],
        [
            47.95413901490849,
            21.715467947068674,

        ]
    ]

    const line = [
        [
            47.94549073049325,
            21.707180144074783,

        ],
        [
            47.94296821180953,
            21.70848532774096,

        ],
        [
            47.94235189591922,
            21.70923420361447,

        ],
        [
            47.9415062412279,
            21.712935790077267,

        ],
        [
            47.94114790879618,
            21.713128358159707,

        ],
        [
            47.941907570602496,
            21.71886260770873,

        ],
        [
            47.94245222691353,
            21.719204950965604,

        ],
        [
            47.942624222450746,
            21.719911033932902,

        ]
    ]

    return (
        <div>
            <MapContainer
                center={position}
                zoom={14}
                scrollWheelZoom={true}
                style={{ minHeight: "70vh", minWidth: "50vw" }}
            >
                
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satellite">
                        <TileLayer
                            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            maxZoom={20}
                            subdomains={['mt1', 'mt2', 'mt3']}
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Street">
                        <TileLayer
                            url='https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                            maxZoom={20}
                            subdomains={['mt1', 'mt2', 'mt3']}
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                
                <Polygon pathOptions={fillBlueOptions} positions={old_town} />
                <Polygon pathOptions={fillGreenOptions} positions={orokosfold} />
                <Polyline pathOptions={purpleOptions} positions={line} />
                <Marker position={giri} icon={marker_icon}>
                    <Popup>
                        <img src="data:image/jpeg;base64,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"></img>
                    1997-ben nyitottuk meg családi gyros bárunkat. Azóta is folyamatos magas minőségű ételekkel és kiszolgálással várjuk Kedves Vendégeinket!
                    </Popup>
                </Marker>
                <Marker position={allomas} icon={marker_icon}>
                    <Popup>
                        <img src="https://pr1.nicelocal.hu/nhVO6GZ6f8h6Z4dAYL-tMg/640x360,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2WFBKqK2cVPMfvoD1NRwsHcCKTwBrBX8yhGLnxaWangZTjThnE4TorP1lBdDQi_w6w"></img>
                        A legendás "nyíregyi gyros" lelőhelye, kifliben
                    </Popup>
                </Marker>
                <Marker position={total} icon={marker_icon}>
                    <Popup>
                        <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/357419956_827873855556689_4449789035646258322_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y6FWmdAqmScAX8GRY0M&_nc_ht=scontent-vie1-1.xx&oh=00_AfBKYXox3mrlwN9GGAAOK8fxNoV9jlk4WHg7Y8NDAMu4sg&oe=652D2DC9"></img>
                        CSAK BÍRD MEGENNI!! (Igen ez a szlogen)
                    </Popup>
                </Marker>

                {aldi.map((item) => (
                    <Marker position={item} icon={icon} >
                        <Popup>
                            ALDI
                        </Popup>
                    </Marker>
                ))}
                <Circle center={[47.951259618630644,21.73052609092042]} radius={200} pathOptions={{ color: 'red' }} />
                <Rectangle bounds={bujtos} pathOptions={{ color: 'black' }}/>
            </MapContainer>

        </div>
    )
}

export default MapComp