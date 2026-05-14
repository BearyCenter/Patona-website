<template>
  <div class="card-row">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card bg"
      :class="{ active: activeIndex === index }"
      :style="activeIndex !== index 
        ? { backgroundImage: `url('/img/home/${card.bg}')` } 
        : {}"
      @mouseenter="setActive(index)"
    >
      <template v-if="activeIndex === index">
          <div class="card-content fade-in">
            <div class="card-body">
                <div class="row">
                    <div class="col-6 pe-xl-2 pe-0">
                        <p class="text-s-44 font-bd color-1F2937 mb-0" :class="{ 'mb-xl-5': card.custom === true }" v-html="card.title"></p>
                        <p class="text-s-24 font-df color-1F2937 mt-3">
                            {{ card.more }}
                        </p>
                    </div>
                    <div class="col-6">
                        <div class="card-image-wrapper">
                            <img
                            :src="require(`~/assets/img/home/${card.img}`)"
                            :alt="card.img"
                            class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </template>

      <template v-else>
        <div class="card-content passive">
          <div class="card-body fade-in">
            <p class="text-s-44 font-bd color-1F2937 mb-5" v-html="card.title"></p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      cards: [
        { title: 'ทำงานพลาด', more: 'จัดออเดอร์ผิดพลาด ยอดชำระเงิน ไม่ครบ และสต๊อกสินค้าไม่ตรงทำให้ เสียโอกาสขาย', img: 'p-1.png', bg: 'ListItem(1).png', custom: true },
        { title: 'ต้นทุนบานปลาย<br> กำไรหาย', more: 'สินค้าค้างสต็อก ต้นทุนไม่ชัดเจน และค่าขนส่ง ที่ควบคุมไม่ได้ ปัญหา เหล่านี้อาจทำให้กำไรของ ธุรกิจ ลดลงอย่างไม่รู้ตัว', img: 'p-2.png', bg: 'ListItem(2).png', custom: false },
        { title: 'เสียเวลากับงาน<br> ซ้ำซ้อน', more: 'ต้องสลับไปมาระหว่าง Marketplace เชื่อมต่อระบบอื่น ไม่ได้ และส่งของไม่ทัน เสียทั้งเวลา และลูกค้า', img: 'p-3.png', bg: 'ListItem(3).png', custom: false },
        { title: 'ยอดขายไม่โต', more: 'การขายสินค้าแบบคอร์สหรือเป็น เซ็ตยุ่งยาก ไม่มีข้อมูลลูกค้าสำหรับ ต่อยอดการตลาด และขาดเครื่อง มือวิเคราะห์ยอดขายอย่างมี ประสิทธิภาพ ทำให้พลาดโอกาส ในการเติบโตของธุรกิจ', img: 'p-4.png', bg: 'ListItem(4).png', custom: true },
      ]
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.bg {
  background-position: center top -2px;
  background-size: auto;
  background-repeat: no-repeat;
}
.img-fluid {
  border-radius: 16px;
}
.card-row {
  display: flex;
  width: 100%;
}

.card {
  flex: 1;
  margin: 0 10px;
  border-radius: 16px;
  transition: flex 0.4s ease, background 0.3s;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.card-body {
  padding: 0px !important;
}

.card.active {
  flex: 2;
  background: #F9FAFB;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-in {
  opacity: 0;
  transform: translateX(10px);
  animation: fadeInWithDelay 0.5s ease forwards;
  animation-delay: 0.3s;
}

@keyframes fadeInWithDelay {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 767px) {
  .bg {
    height: 184px;
  }
  .card-row {
    height: 184px;
  }
  .card-content {
    padding: 16px;
    height: 100%;
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
    font-size: 20px !important;
    line-height: 20px !important;
  }
}

@media (min-width: 768px) {
  .bg {
    height: 220px;
  }
  .card-row {
    height: 220px;
  }
  .card-content {
    padding: 16px;
    height: 100%;
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
    font-size: 20px !important;
    line-height: 20px !important;
  }
}

@media (min-width: 1200px) {
  .bg {
    height: 350px;
  }
  .card-row {
    height: 350px;
  }
  .card-content {
    padding: 24px;
    height: 100%;
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
}
</style>
