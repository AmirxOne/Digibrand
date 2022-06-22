import React from 'react';

const Footer = () => {
    return (
        <div className='hidden md:flex flex-col lg:flex-row items-center justify-between mt-10 px-20 py-10 bg-gradient-to-t from-orange-200 to-gray-100'>
            <div className='flex flex-col items-center lg:items-start justify-between'>
                <div>Berand</div>
                <p className='w-[500px] mt-10 text-center lg:text-left'>
                     Berand is the supplier of the latest electronics products
                      such as laptops, smartphones and smartwatches. Digitiz has 
                      been proud to serve <span className='text-orange-500'>122,232 people</span> so far.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-14 lg:mt-0'>
                <div className='mb-4 h-36 w-48 overflow-hidden rounded-lg'>
                    <img className='rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/react-api-23b25.appspot.com/o/Footer.jpg?alt=media&token=f9ae40d4-8e9a-452c-9687-1d53727d021d"/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 fill-orange-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className='mt-1'>
                            09106686131
                        </span>
                    </div>
                    <a href='#'><span></span>amir.x.one.2000@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;