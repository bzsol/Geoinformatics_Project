import { MapContainer, TileLayer, Marker, Popup, LayersControl, Polyline, Polygon } from "react-leaflet";

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
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={allomas} icon={marker_icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={total} icon={marker_icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={gyar} icon={marker_icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

                {aldi.map((item) => (
                    <Marker position={item} icon={icon} >
                        <Popup>
                            ALDI
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    )
}

export default MapComp