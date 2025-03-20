async function getData() {
        const res = await fetch('https://snowtooth-api-rest.fly.dev');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
}



export default async function Mountain() {
    const data = await getData();
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center text-5xl font² sm:items-start">
                <h1>Mountains</h1>
                <div className="flex text-lg  flex-col gap-4">
                    {
                    console.log(data) 
                    }
                    <table className="text-center ">
                        <thead className="px-4"> 
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Capacity</th>
                            </tr>

                        </thead>
                        <tbody>
                            {data.map((mountain) => (
                                <tr key={mountain.id}>
                                    <td>{mountain.name}</td>
                                    <td>{mountain.status}</td>
                                    <td>{mountain.capacity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>        
        </div>
    );
}