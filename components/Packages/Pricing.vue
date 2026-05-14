<template>
  <div class="p-spacing">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="m-auto text-section mb-4">
            <span class="text-ranbow text-s-24 font-bd m-0 p-1">Packages</span>
          </div>
          <p class="text-s-60 font-bd color-1F2937 text-center mb-5">
            ราคาแพ็กเกจของเรา
          </p>
          <div class="mt-4">
            <div class="row">
              <div class="col-md-6 col-12 mb-4 mb-md-0">
                <div class="card-wrapper">
                  <div class="card card-custom text-start">
                    <p class="text-s-36 font-bd color-1F2937 mb-0">
                      Basic Plan
                    </p>
                    <p class="text-s-72 font-bd color-1F2937 mb-0 mt-xl-0 mt-3">Free</p>
                    <a
                      href="https://accounts.sellsuki.com/registration?error=&flow=e592685a-d546-4a00-bce6-6db992bc978c&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona"
                      class="btn-gradient-orange btn-gradient text-s-24 font-md text-center py-2 mt-4 mb-3"
                    >
                      <img
                        src="~/assets/img/home/Packages/cursor-arrow-rays.png"
                        alt="cursor-arrow-rays.png"
                        class="icon"
                      />
                      <span class="text-s-28 ms-2">สมัครใช้งาน ฟรี!</span>
                    </a>

                    <hr class="custom-hr mt-2 mb-3 mt-xl-4 mb-xl-5" />
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >ไม่จำกัดออเดอร์</span
                      >
                    </div>
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >ไม่จำกัดจำนวนสินค้า</span
                      >
                    </div>
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >1 สาขา/บริษัท</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="card-wrapper-gray">
                  <div class="card card-custom-gray text-start">
                    <p class="text-s-36 font-bd color-1F2937 mb-0">
                      Enterprise Plan
                    </p>
                    <p class="text-s-72 font-bd color-1F2937 mb-0 mt-xl-0 mt-3">
                      ฿15,000
                      <span class="text-s-36 font-md color-1F2937 mb-0"
                        >/ เดือน</span
                      >
                    </p>
                    <nuxt-link
                      :to="{ path: '/contact-us' }"
                      class="btn-gray text-s-24 font-md text-center py-2 mt-4 mb-3"
                    >
                      <img
                        src="~/assets/img/home/Packages/cursor-arrow-rays.png"
                        alt="cursor-arrow-rays.png"
                        class="icon"
                      />
                      <span class="text-s-28">ติดต่อสอบถาม</span>
                    </nuxt-link>

                    <hr class="custom-hr mt-2 mb-3 mt-xl-4 mb-xl-5" />
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >ไม่จำกัดออเดอร์</span
                      >
                    </div>
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >ไม่จำกัดจำนวนสินค้า</span
                      >
                    </div>
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >ไม่จำกัดคลังสินค้า</span
                      >
                    </div>
                    <div class="d-flex align-items-center mb-xl-3 mb-2">
                      <img
                        src="~/assets/img/home/Packages/Checkmark.png"
                        alt="Checkmark.png"
                        class="me-3"
                      />
                      <span class="text-s-24 font-df color-1F2937"
                        >เชื่อมต่อระบบอื่นๆ เช่น ERP, เว็บไซต์ขายของ</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
                <div class="col-12">
                    <div class="card-orange d-none d-md-block">
                        <img
                        src="~/assets/img/home/Packages/Vector (1).png"
                        alt="Vector (1).png"
                        style="position: absolute; top: 0; right: 271px;"
                        >
                        <img
                        src="~/assets/img/home/Packages/Vector (2).png"
                        alt="Vector (2).png"
                        style="position: absolute; top: 0; left: 15px;"
                        >
                        <div class="row">
                            <div class="col-8 text-start">
                                <p class="text-s-44 font-md color-1F2937 mb-0">พร้อมตอบโจทย์ธุรกิจคุณ สมัครใช้งานฟรีเพื่อเริ่มต้น</p>                        </div>
                            <div class="col-4 text-end">
                                <a href="https://accounts.sellsuki.com/registration?error=&flow=e592685a-d546-4a00-bce6-6db992bc978c&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona" target="_blank" class="btn-gradient">สมัครใช้งาน ฟรี!</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-orange-m d-block d-md-none">
                      <div class="row">
                        <div class="col-12 text-center">
                          <p class="text-s-44 font-bd color-1F2937 mb-2">พร้อมตอบโจทย์ธุรกิจคุณ<br/>สมัครใช้งานฟรีเพื่อเริ่มต้น</p>
                        </div>
                        <div class="col-12 ps-0 text-center mt-2">
                          <button @click="openPatona" class="btn-gradient text-s-20 px-3">
                            เริ่มใช้งาน ฟรี!
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openPatona() {
      window.open('https://sellercenter.patona.online/', '_blank');
    }
  }
};
</script>

<style scoped>
.btn-white {
  background-color: white; /* พื้นหลังปุ่ม */
  border-radius: 32px;
  border: none;
  padding: 12px 32px;
  cursor: pointer;
  display: inline-block;
}

.gradient-text {
  font-size: 28px;
  font-family: 'Heavent-med', sans-serif;
  background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* fallback */
  display: inline-block;
  line-height: 1;
}

.card-orange {
  position: relative;
  background: linear-gradient(87.76deg, rgba(50, 169, 255, 0.25) -2.52%, rgba(236, 94, 42, 0.25) 64.06%),
linear-gradient(90deg, rgba(20, 34, 87, 0.2) 0%, rgba(20, 34, 87, 0) 25%, rgba(236, 94, 42, 0) 75%, rgba(236, 94, 42, 0.2) 100%);
  height: 120px;
  width: 100%;
  border-radius: 16px;
}

.card-orange-m {
  position: relative;
  background: linear-gradient(87.76deg, rgba(50, 169, 255, 0.25) -2.52%, rgba(236, 94, 42, 0.25) 64.06%),
linear-gradient(90deg, rgba(20, 34, 87, 0.2) 0%, rgba(20, 34, 87, 0) 25%, rgba(236, 94, 42, 0) 75%, rgba(236, 94, 42, 0.2) 100%);
  height: 156px;
  width: 100%;
  border-radius: 24px;
  padding: 24px;
}

.card-wrapper-gray {
  background: #E5E7EB;
  padding: 1px; /* ความหนาของเส้นขอบ */
  border-radius: 24px;
  display: inline-block;
  width: 100%;
  box-shadow: 0px 0px 0px 0px #11182717,0px 0px 1px 0px #11182717,0px 1px 1px 0px #11182714,0px 3px 2px 0px #1118270A,0px 6px 2px 0px #11182700,0px 9px 3px 0px #11182700;
}

.card-wrapper {
  background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
  padding: 1px; /* ความหนาของเส้นขอบ */
  border-radius: 24px;
  display: inline-block;
  width: 100%;
  box-shadow: 0px 0px 0px 0px #11182717,0px 0px 1px 0px #11182717,0px 1px 1px 0px #11182714,0px 3px 2px 0px #1118270A,0px 6px 2px 0px #11182700,0px 9px 3px 0px #11182700;
}

.card-custom-gray {
  background-color: #FFFFFF;
  border-radius: 24px; /* ลดลงนิดให้เห็นกรอบชัดขึ้น */
  padding: 48px 48px 0px 48px;
  box-shadow: 0px 0px 0px 0px #11182717, 0px 0px 1px 0px #11182717,
              0px 1px 1px 0px #11182714, 0px 3px 2px 0px #1118270A,
              0px 6px 2px 0px #11182700, 0px 9px 3px 0px #11182700;
}

.card-custom {
  background-color: #FFF6F1;
  border-radius: 24px; /* ลดลงนิดให้เห็นกรอบชัดขึ้น */
  padding: 48px 48px 0px 48px;
  box-shadow: 0px 0px 0px 0px #11182717, 0px 0px 1px 0px #11182717,
              0px 1px 1px 0px #11182714, 0px 3px 2px 0px #1118270A,
              0px 6px 2px 0px #11182700, 0px 9px 3px 0px #11182700;
}

.custom-hr {
  border: 1px solid #E5E7EB;
}

.btn-gradient-orange {
  box-shadow: 0px 0px 0px 8px #FFA63233,0px 2px 4px 0px #AFAD9C40;
}

.btn-gray {
  display: inline-block;
  font-size: 28px;
  line-height: 100%;
  font-family: 'Heavent-med', sans-serif;
  color: #1F2937 !important;
  background: #FFF;
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0px 2px 4px 0px #1018280D,0px 0px 0px 8px #98A2B324;
}

.card-orange .row {
  height: 100%;
  align-items: center;
  display: flex;
}

@media (max-width: 767px) {
  .card-orange {
    padding: 16px 62px;
  }
  .p-spacing {
    padding-top: 60px;
  }
  .btn-gradient {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .btn-gray {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .card-opacity {
    padding: 24px;
  }
  .p-120 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .card-custom-gray {
    height: 360px;
    padding: 24px 24px 0px 24px;
  }
  .card-custom {
    height: 330px;
    padding: 24px 24px 0px 24px;
  }
  .text-s-72 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-44 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (min-width: 768px) {
  .card-orange {
    padding: 16px 34px;
  }
  .p-spacing {
    padding-top: 60px;
  }
  .card-opacity {
    padding: 24px;
  }
  .p-120 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .card-custom-gray {
    height: 360px;
    padding: 24px 24px 0px 24px;
  }
  .card-custom {
    height: 360px;
    padding: 24px 24px 0px 24px;
  }
  .text-s-72 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-44 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (min-width: 1200px) {
  .card-orange {
    padding: 16px 62px;
  }
  .p-spacing {
    padding-top: 120px;
  }
  .card-opacity {
    padding: 48px;
  }
  .p-120 {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .card-custom-gray {
    height: 525px;
    padding: 48px 48px 0px 48px;
  }
  .card-custom {
    height: 525px;
    padding: 48px 48px 0px 48px;
  }
  .text-s-72 {
    font-size: 72px !important;
    line-height: 72px !important;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 60px !important;
  }
  .text-s-44 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px !important;
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
}
</style>
