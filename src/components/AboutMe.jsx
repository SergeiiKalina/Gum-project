import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import img from '../image/IMG-39ecee3d968d544e854d0d857e831f16-V-removebg-preview.png'
import style from './aboutme.module.scss'

function AboutMe() {
    return (
        <Swiper
            style={{ borderRadius: '20px' }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                {' '}
                <div className={style.block}>
                    <div className={style.blockImg}>
                        <img src={img} className={style.mainFoto} />
                    </div>
                    <div className={style.block_paragraph}>
                        <p className={style.paragraphe}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita repellendus, necessitatibus maxime
                            sed molestias a vero accusamus.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <div className={style.block}>
                    <div className={style.blockImg}>
                        <img src={img} className={style.mainFoto} />
                    </div>
                    <div className={style.block_paragraph}>
                        <p className={style.paragraphe}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita repellendus, necessitatibus maxime
                            sed molestias a vero accusamus.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <div className={style.block}>
                    <div className={style.blockImg}>
                        <img src={img} className={style.mainFoto} />
                    </div>
                    <div className={style.block_paragraph}>
                        <p className={style.paragraphe}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita repellendus, necessitatibus maxime
                            sed molestias a vero accusamus.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <div className={style.block}>
                    <div className={style.blockImg}>
                        <img src={img} className={style.mainFoto} />
                    </div>
                    <div className={style.block_paragraph}>
                        <p className={style.paragraphe}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita repellendus, necessitatibus maxime
                            sed molestias a vero accusamus.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default AboutMe
