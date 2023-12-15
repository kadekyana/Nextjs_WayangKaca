
const History = () =>{
    return(
        <div className="h-screen">
            <div>
                <video controls width="100%" height="400" muted autoPlay loop className="rounded-lg">
                <source src="source/landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div className="my-10 border">
                <h1 className="text-4xl text-center">Sejarah Lukisan Wayang Kaca</h1>
                <p></p>
            </div>
        </div>
    )
}


export default History