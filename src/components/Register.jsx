import { useState } from 'react';
import './Register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        gender: '',
        role: ''
    });

    const [hobbies, setHobbies] = useState([]);

    const genders = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Others', value: 'others' }
    ];

    const hobbyOptions = [
        { label: 'Music', value: 'music' },
        { label: 'Movies', value: 'movies' },
        { label: 'Plastic Model', value: 'plastic_model' }
    ];

    const roles = [
        { label: 'General Staff', value: 'general_staff' },
        { label: 'Developer', value: 'developer' },
        { label: 'System Analyst', value: 'system_analyst' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onHobbiesToggle = (event) => {
        const targetValue = event.target.value;
        const isChecked = event.target.checked;

        if (!isChecked) {
            setHobbies((prev) => {
                return prev.filter((item) => item !== targetValue);
            });
        } else {
            setHobbies((prev) => {
                return [...prev, targetValue];
            });
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-form">
                <h2>Register</h2>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Firstname</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Lastname</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        {genders.map((g) => (
                            <label key={g.value} className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={g.value}
                                    checked={formData.gender === g.value}
                                    onChange={handleChange}
                                />
                                {g.label}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Hobbies</label>
                    <div className="checkbox-group">
                        {hobbyOptions.map((h) => (
                            <label key={h.value} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value={h.value}
                                    checked={hobbies.includes(h.value)}
                                    onChange={onHobbiesToggle}
                                />
                                {h.label}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Role</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="">Apply Role</option>
                        {roles.map((r) => (
                            <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="register-display">
                <h3>Input Data</h3>
                <p><strong>Username:</strong> {formData.username}</p>
                <p><strong>Firstname:</strong> {formData.firstname}</p>
                <p><strong>Lastname:</strong> {formData.lastname}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
                <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
                <p><strong>Role:</strong> {formData.role}</p>
            </div>
        </div>
    );
}

export default Register;
