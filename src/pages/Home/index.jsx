import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Banner } from '../Home/styles.js';
import { Section } from '../../components/Section';
import { DishCard } from '../../components/DishCard';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Home(){

    return(
        <Container>
            <Header/>
                <main>
                    <Banner>
                        <div className='rec_banner'>
                            <div>
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div>
                        </div>
                        <img src='/src/assets/banner-macarons.png' className='img-banner'/>
                    </Banner>
                    <Section
                        title='Refeições'
                    >
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3.5}
                        navigation
                        >
                        <SwiperSlide className='slide_item'>
                            <DishCard/>
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard/>
                        </SwiperSlide> 
                    </Swiper>
                    </Section>

                    <Section
                        title='Bebidas'
                    >
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3.5}
                        navigation
                        >
                        <SwiperSlide className='slide_item'>
                            <DishCard/>
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard
                                data={{
                                    name: 'Spaguetti Gambe',
                                    description: 'Massa fresca com camarões e pesto.',
                                    picture: 'https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-xNScys16t5XplclXJlbfveJYFvsCrieyVxwMH0E~DnCxeDZuCHLyESdU1CbaRwlsxu7~sh2rrRHSx4M3Vz2~7LcJqUBMDMdppA8aQSkUhHYEhUHWS9CnJZbitiKwc0Nn4KLiagVryuY2VQu6h24rnNpseD7aLxOYFrjUMBGKD7I~LQxU8ZE7mBeUmeGp7wSBx-ApmDIqAij6aMV0IAfeCF5mV5~HoBARE4Gt8R4kT8N7cGADLZPgOtyzgxAhdVje-ZwDNu7w07LXEaojLcI0MzvPWopyKJN5Btd3frrNlviAI0GgwzjBYHR3sT1gFz1fkIkfE-keKuodz8LtDLSg__',
                                    price: 79.97
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='slide_item'>
                            <DishCard/>
                        </SwiperSlide> 
                    </Swiper>
                    </Section>
                </main>
            <Footer/>
        </Container>
    )
}