import HotelBlock from "./HotelBlock";
async function getData() {
    const response = await fetch('https://snowtooth-hotel-api.fly.dev');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}


export default async function Page() {
    const data = await getData();
    return (
       <main>
        <h1>Hotel Details</h1>
        {/* {console.log(data)} */}
        <div className="text-white">
           {data.map((hotel) => (
            <HotelBlock key={hotel.id} hotel={hotel} id={hotel.id} />
           ))}
        </div>
       </main>
    );
}