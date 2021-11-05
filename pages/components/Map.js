import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
 'pk.eyJ1IjoiZGhpa3J1bGxhaCIsImEiOiJja3ZtZmc4czQwYWJrMnFqcHNneWphN2swIn0.c7aL2bemCpJb8So9VBEyog';

 const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [9.0820, 8.6753],
          zoom: 3,
        });
        });

    return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
    flex-1
`