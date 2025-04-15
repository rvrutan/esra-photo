import { Link } from 'react-router-dom';

function ContactSuccess() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <div className="card bg-base-100 shadow-xl p-8">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl mb-4">Message Sent!</h2>
                        <p className="text-lg mb-8">Thank you for reaching out. We'll get back to you soon.</p>
                        <div className="card-actions">
                            <Link to="/" className="btn btn-primary">Return Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSuccess; 