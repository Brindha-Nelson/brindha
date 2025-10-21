import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from '../context/AuthContext';

function Signinform() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", formData);
      if (res.data.user && res.data.token) {
        login(res.data.user, res.data.token);
        navigate('/Home');
      }
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form className="signin" onSubmit={handleSubmit}>
      <h1 className="fade-item delay-1">Sign In</h1>

      <div className="form-group fade-item delay-2">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group fade-item delay-3">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group fade-item delay-4">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group fade-item delay-5">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="but fade-item delay-6">Sign In</button>
    </form>
  );
}

export default Signinform;
