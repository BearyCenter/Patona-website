<template>
  <div class="p-spacing">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-s-60 font-bd color-1F2937 mb-4">
            ตอบโจทย์ทั้งธุรกิจ<span class="color-EC5E2A">บริการ</span>และ
            <span class="color-EC5E2A">ขายของออนไลน์</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="col-2 text-center mt-4 pt-3"
        >
          <div class="card card-custom">
            <div class="card-body">
              <img
                class="img-fluid"
                :src="require(`~/assets/img/home/Services/${service.img}`)"
                :alt="service.img"
              />
              <p class="text-s-24 font-df color-1F2937 mt-2 mt-xl-4 mb-0">{{ service.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { img: '1.png', label: 'ขายของออนไลน์' },
        { img: '2.png', label: 'ร้านค้าปลีกส่ง' },
        { img: '3.png', label: 'ร้านสะดวกซื้อ' },
        { img: '4.png', label: 'ร้านนวดสปา' },
        { img: '5.png', label: 'ร้านงานฝีมือ' },
        { img: '6.png', label: 'ร้านทำเล็บ' },
        { img: '7.png', label: 'ร้านเสริมความงาม' },
        { img: '8.png', label: 'ร้านอาหาร' },
        { img: '9.png', label: 'สถาบันสอนพิเศษ' },
        { img: '10.png', label: 'ร้านเสื้อผ้า' },
        { img: '11.png', label: 'ฟิตเนส' },
        { img: '12.png', label: 'คาร์แคร์' },
        { img: '13.png', label: 'คาร์แคร์' },
        { img: '14.png', label: 'อุปกรณ์ไอที' },
        { img: '15.png', label: 'Quick Services' },
        { img: '16.png', label: 'ร้านสินค้าเด็ก' },
        { img: '17.png', label: 'ร้านอุปกรณ์สัตว์เลี้ยง' },
        { img: '18.png', label: 'และ อื่นๆ' },
      ]
    }
  }
}
</script>

<style scoped>
.p-spacing {
  padding: 45px 0;
}

.card-custom {
  background-color: #FCEFE733;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #FCEFE7 !important;
}

@media (max-width: 767px) {
  img {
    width: 32px;
    height: 32px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .text-s-24 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
  .card-custom .card-body {
    padding: 24px 16px 24px 16px;    
  }
}

@media (min-width: 768px) {
  img {
    width: 32px;
    height: 32px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .text-s-24 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
  .card-custom .card-body {
    padding: 24px 8px 24px 8px;    
  }
}

@media (min-width: 1200px) {
  img {
    width: 64px;
    height: 64px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 60px !important;
  }
  .text-s-44 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-18 {
    font-size: 18px !important;
    line-height: 18px !important;
  }
  .card-custom .card-body {
    padding: 34px 16px 34px 16px;
  }
}
</style>
