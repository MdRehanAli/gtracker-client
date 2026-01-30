import React from 'react';

const WhyChoose = () => {
    return (
        <div className='my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='flex-1'>
                <h2 className='text-xl font-semibold md:text-left text-center text-secondary'>Why Choose GTracker?</h2>
                <h1 className='text-3xl md:text-4xl font-bold my-2 mb-10 text-primary'>Lowest Price Guaranteed, Quality Never Compromised</h1>
                <p className='text-justify text-secondary'>GTracker is designed to bring efficiency, accuracy, and visibility to every stage of the garments production cycle. From order placement to cutting, sewing, finishing, and shipment, our platform ensures seamless workflow management with real-time tracking and automated updates. With GTracker, factories and buyers can monitor progress instantly, reduce delays, eliminate manual errors, and achieve smoother production operations across all departments.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 flex-1 gap-10'>
                <div className='flex flex-col items-center justify-center gap-5'>

                    <div className="radial-progress text-primary"
                        style={{ "--value": "95", "--size": "110px", "--thickness": "5px" } /* as React.CSSProperties */}
                        aria-valuenow={70} role="progressbar"
                    >
                        95%
                    </div>

                    <p className='text-secondary'>Factory Experience</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div className="radial-progress text-primary"
                        style={{ "--value": "97", "--size": "110px", "--thickness": "5px" } /* as React.CSSProperties */}
                        aria-valuenow={70} role="progressbar"
                    >
                        97%
                    </div>
                    <p className='text-secondary'>Textile Material</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div className="radial-progress text-primary"
                        style={{ "--value": "98", "--size": "110px", "--thickness": "5px" } /* as React.CSSProperties */}
                        aria-valuenow={70} role="progressbar"
                    >
                        98%
                    </div>
                    <p className='text-secondary'>Worker Skills</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div className="radial-progress text-primary"
                        style={{ "--value": "94", "--size": "110px", "--thickness": "5px" } /* as React.CSSProperties */}
                        aria-valuenow={70} role="progressbar"
                    >
                        94%
                    </div>
                    <p className='text-secondary'>Machinery & Equipment</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;