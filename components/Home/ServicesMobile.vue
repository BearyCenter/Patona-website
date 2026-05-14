<template>
  <div class="p-spacing">
    <div class="container ps-4 pe-4">
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-s-44 font-bd color-1F2937 mb-5">
            ตอบโจทย์ทั้งธุรกิจ<br/><span class="color-EC5E2A">บริการ</span>และ
            <span class="color-EC5E2A">ขายของออนไลน์</span>
          </p>
        </div>
      </div>

      <!-- Carousel 1 -->
      <div class="swiper-container swiper-1 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(service, index) in services1" :key="'s1-' + index">
            <div class="card card-custom text-center">
              <img class="img-fluid" :src="require(`~/assets/img/home/Services/${service.img}`)" />
              <p class="text-s-16 font-df color-1F2937 mt-2 mb-0">{{ service.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel 2 (สวนทาง) -->
      <div class="swiper-container swiper-2 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(service, index) in services2" :key="'s2-' + index">
            <div class="card card-custom text-center">
              <img class="img-fluid" :src="require(`~/assets/img/home/Services/${service.img}`)" />
              <p class="text-s-16 font-df color-1F2937 mt-2 mb-0">{{ service.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel 3 -->
      <div class="swiper-container swiper-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(service, index) in services3" :key="'s3-' + index">
            <div class="card card-custom text-center">
              <img class="img-fluid" :src="require(`~/assets/img/home/Services/${service.img}`)" />
              <p class="text-s-16 font-df color-1F2937 mt-2 mb-0">{{ service.label }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Autoplay])

export default {
  data() {
    return {
      services1: [
        { img: '1.png', label: 'ขายของออนไลน์' },
        { img: '2.png', label: 'ร้านค้าปลีกส่ง' },
        { img: '3.png', label: 'ร้านสะดวกซื้อ' },
        { img: '4.png', label: 'ร้านนวดสปา' },
        { img: '5.png', label: 'ร้านงานฝีมือ' },
        { img: '6.png', label: 'ร้านทำเล็บ' }
      ],
      services2: [
        { img: '7.png', label: 'ร้านเสริมความงาม' },
        { img: '8.png', label: 'ร้านอาหาร' },
        { img: '9.png', label: 'สถาบันสอนพิเศษ' },
        { img: '10.png', label: 'ร้านเสื้อผ้า' },
        { img: '11.png', label: 'ฟิตเนส' },
        { img: '12.png', label: 'คาร์แคร์' }
      ],
      services3: [
        { img: '13.png', label: 'คาร์แคร์' },
        { img: '14.png', label: 'อุปกรณ์ไอที' },
        { img: '15.png', label: 'Quick Services' },
        { img: '16.png', label: 'ร้านสินค้าเด็ก' },
        { img: '17.png', label: 'ร้านอุปกรณ์สัตว์เลี้ยง' },
        { img: '18.png', label: 'และ อื่นๆ' }
      ]
    }
  },
  mounted() {
    // Carousel 1
    new Swiper('.swiper-1', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    })

    // Carousel 2 (สวนทาง)
    new Swiper('.swiper-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: true
      }
    })

    // Carousel 3
    new Swiper('.swiper-3', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style scoped>
.p-spacing {
  padding-top: 80px;
  padding-bottom: 60px;
}

.card-custom {
  background-color: #FCEFE733;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #FCEFE7 !important;
  padding: 16px 6px;
}

img {
  margin: auto;
  width: 32px !important;
  height: 32px !important;
}
</style>