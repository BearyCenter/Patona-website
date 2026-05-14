<template>
  <div class="bg p-spacing">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center text-xl-start">
          <div class="text-section mb-4 pt-1">
            <span class="text-ranbow text-s-24 font-bd m-0 p-1">Problem Statement</span>
          </div>
          <p class="text-s-60 font-bd color-1F2937 mb-3">ธุรกิจของคุณกำลังเจอ<span class="color-EC5E2A">ปัญหา</span>เหล่านี้อยู่ใช่หรือไม่?</p>
          <p class="text-s-28 font-df color-1F2937 mb-0">
            ไม่ว่าจะเป็นปัญหาเล็กหรือใหญ่ ให้ Patona ช่วยคุณในการจัดการ ด้วยฟีเจอร์ที่ออกแบบมาครอบคลุมการทำงาน ธุรกิจเติบโตได้อย่างมั่นใจ
          </p>
        </div>
      </div>
      <div class="row d-none d-md-block">
        <div class="col-12 p-0">
          <CardProblem class="mt-5"/>
        </div>
      </div>
      <div class="row d-block d-md-none">
        <div class="col-12 p-0">
          <CardProblemMobile class="mt-5"/>
        </div>
      </div>
    </div>
    <section class="bg-img mt-spacing">
      <div class="bg-color">
        <div class="container p-lg-0">
          <div class="row d-none d-xl-block">
            <div
              class="col-12 text-center color-FFFFFF d-flex"
              style="height: 400px"
            >
              <h2 class="text-s-60 font-bd m-auto">
                ลดความผิดพลาด เพิ่มยอดขาย และเติบโตไปด้วยกัน
              </h2>
            </div>
          </div>
          <div class="row d-none d-sm-block d-xl-none">
            <div
              class="col-12 text-center color-FFFFFF d-flex"
              style="height: 200px"
            >
              <h2 class="text-s-60 font-bd m-auto">
                ลดความผิดพลาด เพิ่มยอดขาย<br/> และเติบโตไปด้วยกัน
              </h2>
            </div>
          </div>
          <div class="row d-block d-sm-none">
            <div
              class="col-12 text-center color-FFFFFF d-flex"
              style="height: 400px"
            >
              <h2 class="text-s-36 font-bd m-auto">
                ลดความผิดพลาด<br/> เพิ่มยอดขาย<br/> และเติบโตไปด้วยกัน
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardProblem from '~/components/Home/Problem/CardProblem';
import CardProblemMobile from '~/components/Home/Problem/CardProblemMobile';
export default {
    name: 'ProblemStatement',
    components: {
        CardProblem,
        CardProblemMobile
    }
};
</script>

<style scoped>
.text-ranbow,
.text-ranbow > * {
  background: linear-gradient(61.26deg, #142257 8.22%, #EC5E2A 75.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-problem-statement {
    border-radius: 16px;
    border: 1px solid #E5E7EB;
    box-shadow: 0px 1px 3px 0px #FFC8AA12,0px 5px 5px 0px #FFC8AA0F,0px 12px 7px 0px #FFC8AA0A,0px 20px 8px 0px #FFC8AA03,0px 32px 9px 0px #FFC8AA00;
}

.card-problem-statement .card-body {
    padding: 24px;
}

.bg-img {
  background-image: url('~@/assets/img/home/img-bg-1.jpg');
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-color {
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(0, 0, 0, 0) 0%,
      rgba(46, 75, 186, 0.08) 100%
    ),
    linear-gradient(0deg, rgba(243, 189, 169, 0.15), rgba(243, 189, 169, 0.15));
}

@media (max-width: 767px) {
  .p-spacing {
    padding-top: 80px;
  }
  .mt-spacing {
    margin-top: 60px;
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
}

@media (min-width: 768px) {
  .bg {
    background-position: 100% -280px;
    background-image: url('~@/assets/img/home/BG1.png');
    background-repeat: no-repeat;
  }
  .p-spacing {
    padding-top: 80px;
  }
  .mt-spacing {
    margin-top: 60px;
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
}

@media (min-width: 1200px) {
  .bg {
    background-position: 100% -280px;
    background-image: url('~@/assets/img/home/BG1.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .p-spacing {
    padding-top: 126px;
  }
  .mt-spacing {
    margin-top: 100px;
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
