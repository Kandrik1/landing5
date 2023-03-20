import React, {useState} from "react"
import './Block.sass'
interface I {
    title: string
    description?: string
}

export default function Block({title, description}: I) {
    const [opened, setOpened] = useState(false)

    return (
        <div className="block">
            <div className="title" onClick={() => setOpened(!opened)}>
                <h6>{title}</h6>
                <img src="/gallery/arrow.svg"/>
            </div>
            {opened && (
                <div className="description">
                    <p>{description || "Nothing"}</p>
                </div>
            )}
        </div>
    )
}