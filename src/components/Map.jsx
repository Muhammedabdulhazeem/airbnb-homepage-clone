import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import logo from '../assets/images/airbnb-logo.png'
import room1 from '../assets/images/room1.jpg'
import room2 from '../assets/images/room2.jpg'
import room3 from '../assets/images/room3.jpg'
import room4 from '../assets/images/room4.jpg'
import room5 from '../assets/images/room5.jpg'
import room6 from '../assets/images/room6.jpg'
import room7 from '../assets/images/room7.jpg'
import room8 from '../assets/images/room8.jpg'
import room9 from '../assets/images/room9.jpg'
import room10 from '../assets/images/room10.jpg'
import RoomCard from './RoomCard'
import MapRoom from './MapRoom'

const locations = [
  {
    lat: -33.815929,
    long: 151.213202,
    imageUrl: room1,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: 19.670632,
    long: -155.974582,
    imageUrl: room2,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: 53.532762,
    long: -6.108578,
    imageUrl: room3,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: -33.874055,
    long: 18.761143,
    imageUrl: room4,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: 37.757679,
    long: -122.465411,
    imageUrl: room5,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86,
  },
  {
    lat: 34.037233,
    long: -118.268948,
    imageUrl: room6,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: 33.718226,
    long: -116.384947,
    imageUrl: room7,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86,
  },
  {
    lat: 35.644538,
    long: -105.982695,
    imageUrl: room8,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: 41.382395,
    long: -72.879076,
    imageUrl: room9,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
  {
    lat: 39.412305,
    long: -76.801465,
    imageUrl: room10,
    roomName: " 5 bedroom Duplex",
    location: "Lagos,Nigeria",
    hostName: "Dauda",
    date: "Oct 18-23",
    cost: 30,
    rating: 4.86
  },
]

const customIcon = L.icon({
  iconUrl: require('../assets/images/airbnb-logo.png'),
  iconSize: [35, 45]
})

const Map = () => {
  return (
    <div className='fixed top-[160px] h-[557px] w-full'>
      <MapContainer center={[51.505, -0.09]} zoom={3} minZoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={[loc.lat, loc.long]}
          >
            <Popup>
              <MapRoom room={loc} index={index}/>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
// 8.541751, 4.645874
// [6.5244, 3.3792]
// [51.505, -0.09]
// 8.537390888837303, 4.5186982338726

// 9.587912848821219, 8.396183480083558