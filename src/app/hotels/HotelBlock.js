"use client";
import Image from "next/image";

export default function HotelBlock( { id, hotel } ) {
    const imageLoader = ({ src }) => {
        return `./hotels/${src}.jpg`;
    };
  
    return (
        <div className="text-white">
            <h2>{hotel.name}</h2>
            <p>{hotel.capacity}</p>
            <Image src={hotel.id} alt={hotel.name} width={400} height={300} loader={imageLoader} />
        </div>
    );
}
