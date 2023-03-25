import { connect } from 'frontity'
import React from 'react'


const Post = ({ state }) => {

    const data = state.source.get(state.router.link)

    return (
        <div>
            <h2> We are at  Home </h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <h3> Listado de Post </h3>
            {data.items.map(({ id }) => {
                const post = state.source.post[id]
                return (
                    <p key={id}> {post.title.rendered} </p>
                )
            }
            )}
        </div>
    )
}

export default connect(Post)