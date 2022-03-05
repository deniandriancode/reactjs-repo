import React, {useState} from 'react'
import './css/signupformprac.css'

export default function SignUpFormPractice() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        isWantToJoin: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.isWantToJoin) {
            if (formData.password === formData.confirmPassword) {
                console.log("Successfully Sign Up!")
            } else {
                console.log("Password doesn's match!")
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="input-text">
                    <input 
                        type="text" 
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder="Password"
                        required
                    />
                    <input 
                        type="password" 
                        name="confirmPassword"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                <div className="confirm-join">
                    <input 
                        type="checkbox" 
                        name="isWantToJoin" 
                        id="isWantToJoin" 
                        checked={formData.isWantToJoin}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="isWantToJoin">I want to join the newsletter</label><br />
                </div>
                <div className="button-container">
                    <button>Sign Up</button>
                </div>
            </div>
        </form>
    )
}