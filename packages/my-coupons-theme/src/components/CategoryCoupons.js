import { connect } from 'frontity'
import React from 'react'


const CategoryCoupons = ({ state }) => {

    const data = state.source.get(state.router.link)

    return (
        <div>
             <h2> We are at Category Coupons</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

            <h3> Listado de Category  Coupons </h3>
            {data.items.map(({ id }) => {
                const Coupons = state.source.post[id]
                return (
                    <p key={id}> {Coupons.title.rendered} </p>
                )
            }
            )}
        </div>
    )
}
export default connect(CategoryCoupons)