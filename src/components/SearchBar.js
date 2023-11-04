import React, { useState } from 'react'

export default function SearchBar(props) {

    const [term, setTerm] = useState("")

    const onInputChange = (e) =>{
        setTerm(e.target.value)
    }
    
    const onFormSubmit = (e)=>{
        e.preventDefault()
        props.onFormSubmit(term)
    }

    return (
        <div className='search-bar ui segment'>
            <form className='ui form'
            onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Serach</label>
                    <input type="text"
                        onChange={onInputChange}
                        value={term} />
                </div>
            </form>
        </div>
    )
}
