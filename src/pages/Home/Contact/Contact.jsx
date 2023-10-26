import { FcOvertime } from 'react-icons/fc';

const Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black py-24 place-items-center rounded-xl my-14'>
            <div className='flex items-center gap-5'>
                <FcOvertime className='w-10 h-10'/>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <FcOvertime className='w-10 h-10'/>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <FcOvertime className='w-10 h-10'/>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 - 9:00 pm</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;