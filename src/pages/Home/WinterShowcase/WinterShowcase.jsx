import React from 'react';
import { GiThermometerCold } from 'react-icons/gi';

const WinterShowcase = () => {
    return (
        <section className="my-20 bg-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className="lg:p-20 md:p-10 p-5 py-10">
                <div className='mb-12 text-center'>
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[spin_2s_linear_infinite] hover:[animation-play-state:paused]'>
                            <GiThermometerCold className='text-3xl md:text-4xl font-extrabold' />
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
                            Winter 2026 Showcase
                        </h2>
                    </div>
                    <p className="text-secondary mt-3 text-lg">
                        Showcasing winter-ready apparel built with advanced manufacturing intelligence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                        <img
                            alt="Lookbook"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA5_afg8TcKhBUTT5PdRbe5qnYgL7QYagRhAJ_1Avoc0foeZSaWBzRi6hCzX8Z8WJilcGa6KtJ6GvobdsqqahXR8Oe9H1msygC9wWjbmqo6EOmARRuUpZLl2O75NEYZ7oAxVHw5Fy9UAjmzWiJAAwAiCM2gZrElwGjJKW0nP311JqSoII-4AShuziL_tSkFHNhq5PcGi6_qyL-u5e8wxB-lcFZ4FSKqg3hhJZS9AkVG54oLNOCRd48z-x6vVb02_7p0xh464e1SE_h"
                        />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden lg:mt-12">
                        <img
                            alt="Lookbook"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOPYf0hsbUv2tZcXvw0kBjYzH-M7Ezwojp0wqVDpoSAS-RbRj4TNnDYVuM4_BL39agOILC7olxE5Um2Po36BHUgsIGeUHM-giNjGzYadAty7ciuM6wGUYw2l4f0wZ7Ddfnq9k7JVIg8vV_8SLRcAo6--MQPNkngc_knhiKYTT5yu9Jb4cTzeH1wAcLUGztbiK_zN6GhO1IxztpRXNSEvPfAmxpziggUBVuhB39dJC7eWTjxkoRYX5uTCGLtptSA86gfCDJJU4q-hVQ"
                        />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                        <img
                            alt="Lookbook"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvtMH6_Cd_wUcByfsXutwSkIgCZU9ylvOK0eXo_6GmfIgvY2Ax26r8hIZ6UFNv2nf2dGrw5dAOECuKlOdv_zXE_TQvQ9_ZFI3yCMbbrRAgO64Inm0PHcGZJEzNSJoweHYccSpMlrymsFdE_0IaIE7RHOgsILM0xixRd92spfmJQ_2a11EeXyBt47Y6uMtyS-TTTE_TPdA9DmobXtFunDMXEs5uy_Eiz0jETEssxa0M6hpzQvYpJ1eGhzorSB2rAx0wHbe62Vn0YumZ"
                        />
                    </div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden lg:mt-12">
                        <img
                            alt="Lookbook"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7tn07arztGR7CkI2RvoanjkvBlApSYbR1DM7oJO9RETqjbINm9vN0GurRO8W5wzR-jbIMF3fTSW1WjQVJXfLDhjWeqH-EFeB1bQUk9fM0zK5KRO9KYXGTocR6jkl_wzCygQV6T_GLGpEJPvYOTUofYYIDx6wL1D0hdIFoDcEBhELBHOh55EwyxrRP206UhnOkAs121mQYYu6vlc3MROg_NzLMFGIJ4xCCeHoXZdifKfjJij6lW8EXeRcdG4cJYtXFQMJDJ4Ls0Sop"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WinterShowcase;