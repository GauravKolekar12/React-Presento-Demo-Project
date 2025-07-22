import React, { useEffect } from 'react'

const demo = () => {

    useEffect(() => {
        console.log("Component mounted")
    }, [])
    
    
    
    return (
        <div>
            <h1>Component is Mounted in Console using useEffect</h1>
            

        </div>
    )
}

export default demo