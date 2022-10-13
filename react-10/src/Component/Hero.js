import React from 'react'
class Hero extends React.Component {
    hero = {
        name: "Rajni Kanth",
        age: 75,
        sal: 4500000,
        image: "data:image/jpeg;base64,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"
    }
    render() {
        return <div className="container mt-5">
            <div>{JSON.stringify(this.hero)}</div>
            <div className="row">
                <div className="col-md-3" >
                    <div className="card">
                        <div className="card-header">
                            <img src={this.hero.image} />                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    {this.hero.name}
                                </li>
                                <li className="list-group-item">
                                    {this.hero.sal}
                                </li>
                                <li className="list-group-item">
                                    {this.hero.age}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Hero