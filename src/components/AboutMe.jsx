import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import img from '../image/IMG-39ecee3d968d544e854d0d857e831f16-V-removebg-preview.png'
import style from './aboutme.module.scss'
import 'swiper/swiper.min.css'
import './../../node_modules/swiper/modules/pagination/pagination.min.css'

function AboutMe() {
    SwiperCore.use([Pagination])
    return (
        <Swiper
            style={{ borderRadius: '20px' }}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
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
