function Hero() {
    let hero = {
        name: "Allu Arjun",
        salary: '100 CR',
        image: 'data:image/jpeg;base64,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'
    }


    return <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="card" >
                    <div className="card-header">
                        <img src={hero.image} />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{hero.name}</li>
                            <li className="list-group-item">{hero.salary}</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div >
    </div >
}
export default Hero 