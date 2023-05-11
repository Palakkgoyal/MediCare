"use client"

const Health = () => {
    const name = localStorage.getItem("firstName")

    return (
        <div>
            Hello {name}!
        </div>
    )
}

export default Health
