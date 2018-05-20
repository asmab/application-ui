import React from 'react'
import TriangleForm from '../TriangleForm'
const Section = () => {

    //  ReactDOM.render(

    //     ts.ui.ready(function() {
    //         var component = ts.ui.get(element)
    //         component.dosomething();
    //     })
    // )


    return (

        <section className="jumbotron jumbotron-fluid white-bg">

            <p> test tradeshift ui components </p>

            <div className="triangleForm">
                
                <TriangleForm 
                    initialState={{
                        sideA: '',
                        sideB: '',
                        sideC: ''
                    }}
                />
            </div>
        </section>
    )
}

export default Section