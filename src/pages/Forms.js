import React, { useState } from 'react';

const AdminHomepageForm = () => {
    const [formData, setFormData] = useState({
        section: 'Agriculture Latest Technology', // Default section
        title: '',
        subtitle: '',
        imageUrl: '',
        content: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert(`Content added to: ${formData.section}`);

        // Reset the form
        setFormData({
            section: 'Agriculture Latest Technology',
            title: '',
            subtitle: '',
            imageUrl: '',
            content: '',
            date: '',
        });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f4f4f4',
            padding: '20px',
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '500px',
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Homepage Content</h2>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Section:
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        >
                            <option value="Agriculture Latest Technology">Agriculture Latest Technology</option>
                            <option value="Global Agriculture Trends">Global Agriculture Trends</option>
                            <option value="Agriculture News">Agriculture News</option>
                        </select>
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Subtitle/Source:
                        <input
                            type="text"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Image URL:
                        <input
                            type="text"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Content/Description:
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        ></textarea>
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#28a745',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}
                    >
                        Add Content
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminHomepageForm;