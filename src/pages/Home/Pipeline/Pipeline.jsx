import React from 'react';
import { GrDeploy } from 'react-icons/gr';
import FlyInMotion from '../../../components/Motion/FlyInMotion';

const Pipeline = () => {
    return (
        <section className="my-20 bg-accent text-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className="lg:p-20 md:p-10 p-5 py-10">
                <div className='mb-12 text-center'>
                    <FlyInMotion index={1}>
                        <div className='flex justify-center items-center gap-2 mb-5'>
                            <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:animate-none '><GrDeploy className='text-3xl md:text-4xl font-extrabold' /></div>
                            <div>
                                <h1 className='text-3xl md:text-4xl font-bold text-primary text-nowrap'>Workflow</h1>
                                <div className='h-px w-16 md:w-20 bg-primary flex mx-auto animate-[ping_3s_linear_infinite] hover:animate-none'></div>
                            </div>
                        </div>
                    </FlyInMotion>
                    <FlyInMotion index={3}>
                        <p className="text-secondary mt-3 text-lg">A structured, technology-driven workflow from design validation to final dispatch.</p>
                    </FlyInMotion>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FlyInMotion index={3}>
                        <div className="relative p-5 md:p-10 text-accent mb-4 rounded-xl border border-primary">
                            <div className="text-8xl bg-accent text-primary/5 absolute -top-2 -left-1 animate-[bounce_1s_linear_infinite]">01</div>
                            <div className="relative">
                                <h4 className="text-xl font-bold text-primary mb-4">Tech Pack Audit</h4>
                                <p className="text-secondary text-sm">Design engineers verify patterns, sizing, and material requirements for scalability.</p>
                            </div>
                        </div>
                    </FlyInMotion>
                    <FlyInMotion index={5}>
                        <div className="relative p-5 md:p-10 text-accent mb-4 rounded-xl border border-primary">
                            <div className="text-8xl bg-accent text-primary/5 absolute -top-2 -left-1 animate-[bounce_2s_linear_infinite]">02</div>
                            <div className="relative">
                                <h4 className="text-xl font-bold text-primary mb-4">IoT Integration</h4>
                                <p className="text-secondary text-sm">We assign RFID tags to every garment piece for individual tracing throughout the facility.</p>
                            </div>
                        </div>
                    </FlyInMotion>
                    <FlyInMotion index={7}>
                        <div className="relative p-5 md:p-10 text-accent mb-4 rounded-xl border border-primary">
                            <div className="text-8xl bg-accent text-primary/5 absolute -top-2 -left-1 animate-[bounce_1s_linear_infinite]">03</div>
                            <div className="relative">
                                <h4 className="text-xl font-bold text-primary mb-4">Machine Sewing</h4>
                                <p className="text-secondary text-sm">High-speed assembly lines monitored by AI to ensure stitch consistency across the batch.</p>
                            </div>
                        </div>
                    </FlyInMotion>
                    <FlyInMotion index={9}>
                        <div className="relative p-5 md:p-10 text-accent mb-4 rounded-xl border border-primary">
                            <div className="text-8xl bg-accent text-primary/5 absolute -top-2 -left-1 animate-[bounce_2s_linear_infinite]">04</div>
                            <div className="relative">
                                <h4 className="text-xl font-bold text-primary mb-4">Final Validation</h4>
                                <p className="text-secondary text-sm">Final QC passing via scanner before automated packaging and dispatch notice.</p>
                            </div>
                        </div>
                    </FlyInMotion>
                </div>
            </div>
        </section>
    );
};

export default Pipeline;