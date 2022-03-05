import React, {useState} from "react"

export default function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comment: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        // event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
             /><br></br>
            <input 
                type="text" 
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            /><br></br>
            <input 
                type="email"
                placeholder="Email" 
                onChange={handleChange}
                name="email"
                value={formData.email}
            /><br></br>
            <textarea 
                placeholder="Comment"
                onChange={handleChange}
                name="comment" 
                value={formData.comment}
            /><br></br>
            <input 
                name="isFriendly"
                type="checkbox" 
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label><br />

            <fieldset>
                <legend>Current Employment Status</legend>
                <input 
                    type="radio" 
                    name="employment"
                    id="unemployment"
                    value="unemployment"
                    checked={formData.employment === "unemployment"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployment">Unemployment</label><br />
                <input 
                    type="radio" 
                    name="employment"
                    id="part-time"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-Time</label><br />
                <input 
                    type="radio" 
                    name="employment"
                    id="full-time"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-Time</label><br />
            </fieldset><br />

            <label htmlFor="favColor">What is your favorite color?</label><br />
            <select
                name="favColor" 
                id="favColor"
                onChange={handleChange}
                value={formData.favColor}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
            </select><br />
            <button>Submit</button>
        </form>
    )
}