import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Ratings = ({ rating, setRating }) => {
    return (
        <>
            {
                [...Array(5)].map((_, i) => (
                    <span key={i} onClick={() => setRating(i + 1)} style={{ cursor: "pointer" }}>
                        {
                            rating > i ? <AiFillStar></AiFillStar> : <AiOutlineStar></AiOutlineStar>
                        }
                    </span>
                ))
            }
        </>
    )
}

export default Ratings