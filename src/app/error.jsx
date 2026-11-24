"use client"
import React from 'react'

function Error({error, retry}) {
return <div>
    <h2>{error.message}</h2>
    <button onClick={()=> retry()}>Click to retry</button>
</div>
}

export default Error;

