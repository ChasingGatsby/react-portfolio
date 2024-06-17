import profile from "../assets/me.jpg";
import { useState, useEffect } from "react";

// const posts = [
//     {id, title, content, date}
// ]

export default function Blog() {
    return (
        <div className="container m-2">
            <img src={profile} alt="profile" className="img-thumbnail m-2 custImg" />
            <div className="border-primary">

            </div>
        </div>
    )
}