import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
console.log("pickup", pickup);
console.log("dropoff", dropoff);
    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGhpa3J1bGxhaCIsImEiOiJja3ZtZmc4czQwYWJrMnFqcHNneWphN2swIn0.c7aL2bemCpJb8So9VBEyog",
                limit: 1
                })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }
    
    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGhpa3J1bGxhaCIsImEiOiJja3ZtZmc4czQwYWJrMnFqcHNneWphN2swIn0.c7aL2bemCpJb8So9VBEyog",
                limit: 1
                })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }
    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])
    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector/>
                <ConfirmButtonContainer>
                   <ConfirmButton> 
                        Confirm UberX
                   </ConfirmButton>
                </ConfirmButtonContainer>
                
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`
const RideContainer = tw.div`
   flex flex-1 flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
   flex justify-center border-t-2
`
const ConfirmButton = tw.div`
   bg-black h-10 w-80 text-white text-2xl flex items-center justify-center mt-2 mb-2 cursor-pointer
`