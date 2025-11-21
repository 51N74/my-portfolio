export default function Contact() {
    return (
        <section id="contact" className="py-24 max-w-3xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-bold mb-4 text-primary text-center">Get In Touch</h2>
            <p className="text-secondary text-center mb-12 text-lg">
                Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-primary">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-primary">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-medium rounded-full hover:bg-accent transition-colors duration-300 mx-auto block"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
