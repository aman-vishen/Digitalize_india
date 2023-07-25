import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';


const SERVICE_DATA = [
    {
      serviceIcon:"/assets/images/icon/s-icon-1.png",
      serviceTitle:"UI/UX Design",
      serviceDesc:"Stunning UI/UX design services: User-centered interfaces and seamless experiences that captivate users and elevate your digital products.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-2.png",
      serviceTitle:"Web Development",
      serviceDesc:"Expert web development: Customized, scalable solutions that bring your vision to life, ensuring seamless functionality, optimal performance, and an exceptional user experience.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-3.png",
      serviceTitle:"App Development",
      serviceDesc:"Innovative app development: We turn your ideas into feature-rich mobile applications, combining intuitive design, cutting-edge technology, and seamless performance for your users.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-4.png",
      serviceTitle:"Digital Marketing",
      serviceDesc:"Effective digital marketing: Data-driven strategies, SEO, social media, and PPC campaigns that drive traffic, engage audiences, and boost your online presence, delivering tangible results for your business.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-5.png",
      serviceTitle:"Content Writing",
      serviceDesc:"Compelling content writing: Captivating copy and engaging storytelling that connects with your audience, enhances brand identity, and drives meaningful interactions and conversions.",
      serviceLink:"/services-details"
    },
    {
      serviceIcon:"/assets/images/icon/s-icon-6.png",
      serviceTitle:"E-commerce",
      serviceDesc:"Comprehensive e-commerce solutions: Robust platforms, seamless shopping experiences, and secure payment gateways that accelerate online sales and maximize business growth.",
      serviceLink:"/services-details"
    },
  ];

const Services = ({extraClass}) => {
    return (
        <section className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}>
                <div className="services__shape">
                    <img className="services-s-1" src="/assets/images/shape/services/services-s-1.png" alt=""/>
                    <img className="services-s-2" src="/assets/images/shape/services/services-s-2.png" alt=""/>
                    <img className="services-s-3" src="/assets/images/shape/services/services-s-3.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-55">
                        <Col xl={6}>
                            <div className="services__title">
                                <SectionTitle subTitle="Services"
                                titleFirst="What we do"/> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                                         
                          {SERVICE_DATA.map(
                              ({serviceIcon, serviceTitle, serviceDesc, serviceLink}, index) => (
                                  <ServiceItem
                                  key={index}
                                  serviceIcon={serviceIcon}
                                  serviceTitle={serviceTitle}
                                  serviceDesc={serviceDesc}
                                  serviceLink={serviceLink}
                                  />
                              )
                          )}                                
                    </Row>
                </Container>
            </section>
    );
};

export default Services;