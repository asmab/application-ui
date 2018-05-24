import React from 'react'
import TriangleForm from '../TriangleForm'


const Section = () => {   

    return (
        <section>
            <span>Insert the lengths of the triangle's three sides A,B and C 
                and press Resolve button to check the triangle type
            </span>

            <TriangleForm 
            initialState={{
                sideA: '',
                sideB: '',
                sideC: ''
            }}
            />
        </section>
    )
}

export default Section