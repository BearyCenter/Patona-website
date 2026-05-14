<template>
  <section class="bg p-spacing">
    <div class="container">
      <div class="row mb-5 d-lg-flex d-none">
        <div class="col-5">
          <div class="m-auto text-section text-center mb-4 pt-1">
            <span class="text-ranbow text-s-24 font-bd m-0 p-1">Q&A</span>
          </div>
          <p class="text-s-60 font-bd color-1F2937 mb-0">
            <span class="color-EC5E2A">คำถาม</span>ที่พบบ่อยเกี่ยวกับ <br />Patona
          </p>
          <img class="img-fluid mt-3" src="~/assets/img/home/Question/Image.png" alt="image.png">
        </div>
        <div class="col-7 mt-3">
          <div class="accordion mt-5" id="accordionQuestion">
            <div
              class="accordion-item"
              v-for="(item, idx) in questions"
              :key="idx"
            >
              <h2 class="accordion-header" :id="`heading${idx}`">
                <button
                  class="accordion-button text-s-28 font-md"
                  :class="{ collapsed: idx !== 0 }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${idx}`"
                  :aria-expanded="idx === 0 ? 'true' : 'false'"
                  :aria-controls="`collapse${idx}`"
                >
                  {{ item.q }}
                </button>
              </h2>
              <div
                :id="`collapse${idx}`"
                class="accordion-collapse collapse"
                :class="{ show: idx === 0 }"
                :aria-labelledby="`heading${idx}`"
                data-bs-parent="#accordionQuestion"
              >
                <div class="accordion-body pt-0">
                  <p class="text-s-24 font-df color-6B7280 mb-0">
                    {{ item.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5 d-block d-lg-none">
        <div class="col-12 text-center">
          <div class="m-auto text-section text-center mb-4 pt-1">
            <span class="text-ranbow text-s-24 font-bd m-0 p-1">Q&A</span>
          </div>
          <p class="text-s-60 font-bd color-1F2937 mb-0">
            <span class="color-EC5E2A">คำถาม</span>ที่พบบ่อยเกี่ยวกับ <br />Patona
          </p>
          <img class="img-fluid mt-3" src="~/assets/img/home/Question/Image.png" alt="image.png">
        </div>
        <div class="col-12 mt-3">
          <div class="accordion mt-5" id="accordionQuestion">
            <div
              class="accordion-item"
              v-for="(item, idx) in questions"
              :key="idx"
            >
              <h2 class="accordion-header" :id="`heading${idx}`">
                <button
                  class="accordion-button text-s-28 font-md"
                  :class="{ collapsed: idx !== 0 }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${idx}`"
                  :aria-expanded="idx === 0 ? 'true' : 'false'"
                  :aria-controls="`collapse${idx}`"
                >
                  {{ item.q }}
                </button>
              </h2>
              <div
                :id="`collapse${idx}`"
                class="accordion-collapse collapse"
                :class="{ show: idx === 0 }"
                :aria-labelledby="`heading${idx}`"
                data-bs-parent="#accordionQuestion"
              >
                <div class="accordion-body pt-0">
                  <p class="text-s-24 font-df color-6B7280 mb-0">
                    {{ item.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContact class="mt-4"/>
    </div>
  </section>
</template>

<script>
import CardContact from '~/components/CardContact'
export default {
  components: {
    CardContact
  },
  data() {
    return {
      questions: [
        {
          q: 'Patona คืออะไร?',
          a: 'Patona เป็นระบบบริหารจัดการออเดอร์ (OMS) และระบบขายหน้าร้าน (POS) ที่ออกแบบมาเพื่อช่วยธุรกิจบริหารจัดการคำสั่งซื้อและการขายได้อย่างมีประสิทธิภาพ ช่วยรวมการจัดการคำสั่งซื้อจากหลากหลายช่องทาง และเพิ่มความสะดวกในการขายสินค้าหน้าร้าน'
        },
        {
          q: 'ใครสามารถใช้ระบบ Patona ได้บ้าง?',
          a: 'Patona เหมาะสำหรับธุรกิจทุกขนาด ไม่ว่าจะเป็นธุรกิจขายออนไลน์ ธุรกิจบริการ ร้านค้าปลีก ร้านอาหาร หรือองค์กรขนาดใหญ่ ที่ต้องการบริหารจัดการคำสั่งซื้อและการขายหน้าร้านได้อย่างมีประสิทธิภาพ'
        },
        {
          q: 'ระบบ Patona รองรับการชำระเงินประเภทใดบ้าง?',
          a: 'Patona รองรับการชำระเงินหลายรูปแบบ ทั้งเงินสด บัตรเครดิต/เดบิต และการชำระเงินผ่าน e-Wallet เช่น PromptPay หรือ QR Code'
        },
        {
          q: 'สามารถเชื่อมต่อ Patona กับช่องทางการขายไหนได้บ้าง?',
          a: 'ระบบ Patona สามารถเชื่อมต่อกับแพลตฟอร์ม Marketplace ยอดนิยม รวมถึง เว็บไซต์ส่วนตัว เพื่อช่วยให้คุณบริหารจัดการคำสั่งซื้อจากทุกช่องทางได้ในที่เดียว'
        },
        {
          q: 'ระบบ Patona ชำระค่าบริการอย่างไร?',
          a: 'Patona มีแพ็กเกจหลายระดับเพื่อให้เหมาะสมกับความต้องการของแต่ละธุรกิจ โดยจะทำการชำระค่าบริการก่อนเริ่มใช้งาน และในส่วนระบบเรียกรถเข้ารับสินค้าจำเป็นต้องมีการเติมเครดิตก่อนใช้งาน'
        },
        {
          q: 'Patona รองรับหลายภาษาไหม?',
          a: 'ใช่ Patona รองรับการใช้งานในภาษาไทย ภาษาอังกฤษ และภาษาจีน เพื่อความสะดวกของผู้ใช้จากหลากหลายประเทศ คุณสามารถเลือกภาษาได้ตามความต้องการ'
        },
        {
          q: 'ข้อมูลในระบบ Patona ปลอดภัยหรือไม่?',
          a: 'Patona ให้ความสำคัญกับความปลอดภัยของข้อมูล โดยใช้มาตรการรักษาความปลอดภัยขั้นสูง เช่น การเข้ารหัสข้อมูล การสำรองข้อมูลอัตโนมัติ และการควบคุมการเข้าถึงเพื่อป้องกันการละเมิดข้อมูล'
        },{
          q: 'สามารถปรับแต่งระบบ Patona ได้ไหม?',
          a: 'สามารถปรับแต่งได้ตามความต้องการในบางฟีเจอร์ โดยอาจมีค่าใช้จ่ายเพิ่มเติม'
        },
        {
          q: 'มีการอัปเดตระบบหรือไม่?',
          a: 'Patona มีการอัปเดตระบบอย่างต่อเนื่อง เพื่อเพิ่มฟีเจอร์ใหม่ ๆ ปรับปรุงประสิทธิภาพ และรักษาความปลอดภัยให้ทันสมัยอยู่ตลอดเวลา โดยคุณสามารถแนะนำ หรือแจ้งปัญหาการใช้งานได้ผ่านช่องทางการติดต่อของเรา'
        },
        {
          q: 'สามารถใช้ระบบ Patona แบบฟรีได้นานแค่ไหน?',
          a: 'คุณสามารถใช้ฟีเจอร์พื้นฐานได้โดยไม่มีค่าใช้จ่ายตลอดไป แต่หากต้องการฟีเจอร์เพิ่มเติม สามารถอัปเกรดเป็นแพ็กเกจที่ต้องการได้ในภายหลัง'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.bg {
  background-image: url('~/assets/img/home/BG2.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}

.accordion-item {
  margin-bottom: 24px;
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

.col-7 {
  width: 62%;
}

.col-5 {
  width: 38%;
}

@media (max-width: 767px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
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
    font-size: 18px !important;
    line-height: 18px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (min-width: 768px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
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
    font-size: 18px !important;
    line-height: 18px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (min-width: 1200px) {
  .p-spacing {
    padding-top: 120px;
    padding-bottom: 120px;
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
}
</style>