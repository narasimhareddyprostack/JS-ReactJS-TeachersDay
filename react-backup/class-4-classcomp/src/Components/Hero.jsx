import React from 'react'
class Hero extends React.Component {
    actor = {
        name: 'Rajni',
        sal: 5000000,
        age: 75
    }
    render() {
        return <div>
            <h2>Hero Component</h2>
            <h3>Hero Name:{this.actor.name}</h3>
            <h3>Hero Age:{this.actor.age}</h3>
            <h3>Hero Salary:{this.actor.sal}</h3>
        </div>
    }
}
export default Hero