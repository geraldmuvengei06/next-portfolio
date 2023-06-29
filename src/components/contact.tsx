export default function Contact() {
    // TODO: Link contact form to firebase, add articles section that fetches from dev.to
    
    return (
        <div id="contact" className="container lg:max-w-6xl overflow-hidden mx-auto py-8 text-dark-light dark:text-white">
            <div className="sm:px-16">

                <div className="flex flex-col sm:flex-row p-4">
                    <div className="flex sm:basis-1/2 flex-col">
                        <h2 className=" text-4xl font-bold mb-4">Lets connect<span className="text-primary">_</span></h2>
                        <a className="hover:text-primary" href="mailto:">johndoe@exampe.com</a>
                        <a className="hover:text-primary" href="tel:2454232323">+2454232323</a>
                    </div>
                    <div className="flex flex-col sm:basis-1/2 ">
                        <h2 className=" text-4xl font-bold mb-4">Send a message<span className="text-primary">_</span></h2>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-none ">
                            <div className="card-body p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">Name</span>
                                    </label>
                                    <input type="text" placeholder="john doe" className="input input-bordered bg-transparent border-dark-light dark:border-slate-400" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">Email</span>
                                    </label>
                                    <input type="text" placeholder="johndoe@example.com" className="input input-bordered bg-transparent border-dark-light dark:border-slate-400" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">Message</span>
                                    </label>
                                    <input type="text" placeholder="Message goes here" className="input input-bordered bg-transparent border-dark-light dark:border-slate-400" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary btn-outline">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}