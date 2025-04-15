import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                    <p className="text-lg">Feel free to reach out for any inquiries or collaborations</p>
                </div>
                
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea textarea-bordered w-full"
                                required
                            />
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;