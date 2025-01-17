import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
// Assets
import arrowRight from '../../../public/assets/icons/arrow_right.svg';
import { destinations } from '../../../data/homeData';

const renderDestinations = (props) => {
    return props.map((i, id) => {
        return (
            <Link href={i.slug} key={id} passHref>
                <Col className='relative text-center pb-16 px-3 mb-2 lg:pr-5 cursor-pointer hover:opacity-80'>
                    <figure>
                        <Image
                            src={i.imgUrl}
                            width={245}
                            height={400}
                            layout='fixed'
                            alt='Hero image'
                            className={`rounded-lg`}
                        />
                        <figcaption>
                            <div
                                className={`absolute w-full h-auto top-[50%] left-[-4%] 2xl:left-[-2%] pt-2 font-regular text-sm lg:text-lg font-bold text-white`}
                            >
                                {i.city}
                            </div>
                            <div
                                className={`uppercase absolute w-full h-auto top-[60%] left-[-4%] 2xl:left-[-2%] pt-2 font-regular text-sm lg:text-md text-white`}
                            >
                                {i.country}
                            </div>
                        </figcaption>
                    </figure>
                </Col>
            </Link>
        );
    });
};

const Testimonials = () => {
    return (
        <>
            <Row className='bg-gradient-to-b from-hci-general-light to-white pb-20'>
                <Row className='flex justify-start p-5'>
                    <h1 className='-mb-11 px-20 text-4xl lg:text-4xl leading-10 font-satisfy text-hci-cursive mt-5 md:mt-2 2xl:pl-48'>
                        start
                    </h1>
                    <h1 className='px-20 text-black font-bold text-4xl lg:text-4xl leading-10 font-regular pb-3 2xl:pl-48'>
                        your journey.
                    </h1>
                    <p className='text-sm text-black lg:text-md font-regular mb-5 sm:mb-2 text-left px-20 2xl:pl-48'>
                        Here are some of our top destinations. Haven’t found anything
                        for yourself? <br /> No need to worry. There’s a lot more to
                        choose from. <br /> Just click on the button below.
                    </p>
                </Row>
                <div className='flex overflow-x-auto lg:pl-16 lg:pr-6 2xl:pl-24'>
                    {renderDestinations(destinations)}
                </div>
                <div className='tracking-wide z-10 row text-hci-general-dark font-bold font-regular'>
                    <Link href='/travel'>
                        <a className='no-underline flex items-center justify-end hover:text-hci-footer-light'>
                            <p className='inline-block pl-3 text-hci-general-dark'>
                                DESTINATIONS
                            </p>
                            <p className='inline-block'>
                                <Image
                                    src={arrowRight}
                                    height='50px'
                                    width='75px'
                                    alt='arrow right'
                                />
                            </p>
                        </a>
                    </Link>
                </div>
            </Row>
        </>
    );
};

export default Testimonials;
