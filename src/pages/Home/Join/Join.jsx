import React from 'react';
import Swal from 'sweetalert2';
import FlyInMotion from '../../../components/Motion/FlyInMotion';

const Join = () => {

    const handleMessage = (e) => {
        e.preventDefault();

        Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#0f172b",
            color: "#0f172b",
            background: "#7C3AED",
            title: "Your Message has been send",
            showConfirmButton: false,
            timer: 1500
        });

        e.reset()
    }

    return (
        <section className="my-20 bg-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className="">
                <div className="bg-linear-to-r from-primary/30 to-accent p-5 md:p-10 rounded-xl border border-primary/50 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 w-full">
                        <FlyInMotion index={1}>
                            <div className='mb-4'>
                                <h3 className="text-3xl md:text-4xl font-bold text-primary md:text-left text-center">Stay Ahead of the Curve</h3>
                            </div>
                        </FlyInMotion>
                        <FlyInMotion index={3}>
                            <p className="text-secondary font-medium">Monthly reports on textile innovation, logistics updates, and factory-floor data trends.</p>
                        </FlyInMotion>
                    </div>
                    <form onSubmit={handleMessage} className="flex md:flex-row flex-col w-full lg:max-w-md gap-4">
                        <div className='w-full'>
                            <FlyInMotion index={3}>
                                <input
                                    className="input w-full bg-accent border border-primary/50 rounded-lg outline-primary text-primary placeholder-primary/50 py-6"
                                    placeholder="work@company.com"
                                    type="email"
                                />
                            </FlyInMotion>
                        </div>
                        <div className='w-full'>
                            <FlyInMotion index={3}>
                                <button className="bg-primary text-white font-bold btn rounded-lg shadow-lg shadow-primary/25 hover:opacity-80 hover:shadow-primary/40 transition-all whitespace-nowrap py-6 w-full lg:w-fit">Join With US</button>
                            </FlyInMotion>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Join;