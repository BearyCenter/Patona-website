<template>
  <div class="container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card mb-4"
    >
        <div class="card-body">
            <div class="row">
                <div class="col-7 pe-xl-2 pe-0">
                    <p class="text-s-24 font-bd color-1F2937 mb-0 mb-xl-5">{{ card.title }}</p>
                    <p class="text-s-20 font-df color-1F2937 mt-2 mb-2">
                        {{ card.more }}
                    </p>
                </div>
                <div class="col-5 text-end d-flex justify-content-end align-items-center">
                        <img
                        width="120px"
                        height="150px"
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

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      cards: [
        { title: 'ทำงานพลาด', more: 'จัดออเดอร์ผิดพลาด ยอดชำระเงิน ไม่ครบ และสต๊อกสินค้าไม่ตรงทำให้ เสียโอกาสขาย', img: 'p-1.png' },
        { title: 'ต้นทุนบานปลาย กำไรหาย', more: 'สินค้าค้างสต็อก ต้นทุนไม่ชัดเจน และค่าขนส่ง ที่ควบคุมไม่ได้ ปัญหา เหล่านี้อาจทำให้กำไรของ ธุรกิจ ลดลงอย่างไม่รู้ตัว', img: 'p-2.png' },
        { title: 'เสียเวลากับงาน ซ้ำซ้อน', more: 'ต้องสลับไปมาระหว่าง Marketplace เชื่อมต่อระบบอื่น ไม่ได้ และส่งของไม่ทัน เสียทั้งเวลา และลูกค้า', img: 'p-3.png' },
        { title: 'ยอดขายไม่โต', more: 'การขายสินค้าแบบคอร์สหรือเป็น เซ็ตยุ่งยาก ไม่มีข้อมูลลูกค้าสำหรับ ต่อยอดการตลาด และขาดเครื่อง มือวิเคราะห์ยอดขายอย่างมี ประสิทธิภาพ ทำให้พลาดโอกาส ในการเติบโตของธุรกิจ', img: 'p-4.png' },
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
  background-image: url('~@/assets/img/home/ListItem(1).png');
  background-size: auto;
  background-repeat: no-repeat;
}
.img-fluid {
  border-radius: 16px;
}

.card {
  flex: 1;
  border-radius: 16px;
  background-color: #F9FAFB;
  border: 1px solid #E5E7EB !important;
  display: flex;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 1px 3px 0px #FFC8AA12,0px 5px 5px 0px #FFC8AA0F,0px 12px 7px 0px #FFC8AA0A,0px 20px 8px 0px #FFC8AA03,0px 32px 9px 0px #FFC8AA00;

}

.card-body {
  padding: 16px !important;
}
</style>
