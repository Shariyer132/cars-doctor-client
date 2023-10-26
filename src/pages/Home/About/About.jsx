import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero pt-32 min-h-screen bg-base-200 lg:pb-24">
            <div className="hero-content flex-col lg:flex-row">
              <div className='lg:w-1/2 relative'>
              <img src={person} className="w-3/4 lg:h-[400px] rounded-lg shadow-2xl" />
              <img src={parts} className="w-1/2 lg:h-[300px] opacity-90 absolute border-8 right-0 top-1/2 rounded-lg shadow-2xl" />
              </div>
                <div className='lg:w-1/2 lg:ml-12'>
                    <h3 className='text-xl pb-5 font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className="text-5xl pb-2 font-bold max-w-sm">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error mt-5 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;