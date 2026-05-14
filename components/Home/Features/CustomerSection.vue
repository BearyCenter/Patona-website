<template>
  <div class="container ps-4 pe-4 ps-md-0 pe-md-0">
  <div class="row animate__animated animate__fadeIn animate__slow">
    <div
      class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-12 col-12 pe-xl-0 ps-xl-0 pe-0 ps-0"
    >
      <p class="text-s-36 font-bd color-1F2937 mb-0">ระบบการจัดการลูกค้า (Customer Management)</p>
      <div class="row mt-4">
        <div class="col-12">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-s-28 font-bd"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <img
                    class="me-2"
                    src="~/assets/img/home/Features/CustomerSection/Icon (1).png"
                    alt="Icon (1).png"
                  />
                  สมุดลูกค้า (Customer Book)
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body pt-0">
                  <ol class="list-dot">
                    <li class="text-s-24 font-df color-6B7280 mb-0">
                      เพิ่มที่อยู่จัดส่งได้ไม่จำกัด
                    </li>
                    <li class="text-s-24 font-df color-6B7280 mb-0">
                      สามารถบันทึกข้อมูลและที่อยู่ใบเสร็จรับเงิน ใบกำกับภาษีได้ ทั้งบุคคลธรรมดา และนิติบุคคล
                    </li>
                    <li class="text-s-24 font-df color-6B7280 mb-0">
                      สามารถดูข้อมูล Insight ของลูกค้า เช่น มูลค่าการสั่งซื้อทั้งหมด ซื้อครั้งล่าสุด เมื่อไหร่ มาซื้อบ่อยแค่ไหน เพื่อใช้เป็นข้อมูลในการติดตามลูกค้าได้
                    </li>
                    <li class="text-s-24 font-df color-6B7280 mb-0">
                      ข้อมูลปลอดภัยไม่รั่วไหล ด้วยสิทธิการเข้าถึงข้อมูลของพนักงานในแต่ละระดับ
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button text-s-28 font-bd collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img
                    class="me-2"
                    src="~/assets/img/home/Features/CustomerSection/Icon (2).png"
                    alt="Icon (2).png"
                  />
                  ระบบสมาชิก สะสมแต้ม (Loyalty Program)
                  <span class="ms-2 me-2 btn-coming-soon">Coming soon</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body pt-0">
                    <ol class="list-dot">
                        <li class="text-s-24 font-df color-6B7280 mb-0">
                            เพิ่มประสิทธิภาพการตลาดและติดตามลูกค้าอย่างง่ายดายด้วยระบบสมาชิก ผ่าน LINE สามารถปรับใช้ Point System ได้ตามความเหมาะสมของธุรกิจ
                        </li>
                        <li class="text-s-24 font-df color-6B7280 mb-0">
                            ส่งโปรโมชั่นและข่าวสารใหม่ๆ ไปยังลูกค้าได้ทันที เสริมสร้างความพึงพอใจและความผูกพันกับแบรนด์
                        </li>
                        <li class="text-s-24 font-df color-6B7280 mb-0">
                            สามารถแยกลูกค้าตาม Tier เพื่อรับส่วนลด และสิทธิพิเศษที่มีความแตกต่างกันในแต่ละ ระดับได้
                        </li>
                    </ol> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 d-none d-md-block">
          <a href="https://accounts.sellsuki.com/registration?error=&flow=e592685a-d546-4a00-bce6-6db992bc978c&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona" target="_blank" class="btn-gradient mt-4">สมัครใช้งาน ฟรี!</a>
        </div>
        <div class="col-12 d-block d-md-none">
          <a href="https://accounts.sellsuki.com/registration?error=&flow=e592685a-d546-4a00-bce6-6db992bc978c&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona" target="_blank" class="btn-cutom-mobile mt-4">สมัครใช้งาน ฟรี!</a>
        </div>
      </div>
    </div>
    <div
      class="col-xxl-6 col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12 order-md-last order-last p-custom-mobile"
    >
      <img
        class="img-fluid mt-5 mt-md-0"
        src="~/assets/img/home/Features/Image (4).png"
        alt="image-2-c.png"
      />
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.accordion-item {
  margin: 10px 0px;
  border: 1px solid #00000008;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 0px #1118270d, 0px 0px 1px 0px #1118270d,
    0px 1px 1px 0px #1118270a, 0px 3px 2px 0px #11182705,
    0px 6px 2px 0px #11182700, 0px 9px 3px 0px #11182700;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.accordion-button:not(.collapsed) {
  color: #1f2937;
  background-color: #ffffff;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236B7280' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-size: 16px 16px; /* ปรับขนาดตามต้องการ */
  width: 16px;
  height: 16px;
}

.accordion-button:focus {
  box-shadow: none;
  outline: none;
}

.accordion-button {
  line-height: 22px;
}

.accordion-button {
  border-bottom: none !important;
  box-shadow: none !important;
}

.accordion-body {
  padding-left: 50px;
}

.accordion-body p {
  width: 95%;
}

.accordion-body li {
  width: 95%;
}

.list-dot {
  list-style: none;
  padding-left: 0;
  margin-left: 14px;
  margin-bottom: 0;
}

.list-dot li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  display: flex;
  align-items: flex-start; /* เปลี่ยนจาก center เป็น flex-start */
}

.list-dot li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 13px; /* ขยับ dot ลงมาให้กลางบรรทัดแรก */
  width: 5px;
  height: 5px;
  background: #6b7280;
  border-radius: 50%;
  transform: translateY(-50%);
}

@media (max-width: 767px) {
  .p-custom-mobile {
    padding: 0;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
}

@media (min-width: 768px) {
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
}

@media (min-width: 1200px) {
  .p-custom-mobile {
    padding-left: 60px;
    padding-right: 0px;
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
}
</style>
