import React, { useState } from 'react';
import '../../styles/styles.css';
import contactImageUrl from '../Images/left_image_url.jpg'; // Adjust the path based on your project structure

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    });

    const [showResponse, setShowResponse] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        setShowResponse(true);


        setFormData({
            name: '',
            surname: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <img src={contactImageUrl} alt="Contact Image" className="img-fluid" />
                </div>
                <div className="col-md-9">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname" className="contact-label">Surname</label>
                            <input
                                type="text"
                                className="form-control"
                                id="surname"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-danger">
                            Send
                        </button>
                    </form>

                    {showResponse && (
                        <div className="mt-3 alert alert-success" role="alert">
                            Thank you for reaching out! Your message has been sent successfully.
                            We appreciate your interest and will get back to you as soon as possible.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
