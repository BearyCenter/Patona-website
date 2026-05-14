<template>
  <div>
    <div class="d-block d-md-none d-xl-block">
      <div class="mt-70"
        :class="{ 'bg-img': bannerData.header === 'แพ็กเกจ', 'bg-img-resources': bannerData.header === 'คู่มือการใช้งาน', 'bg-img-contact': bannerData.header === 'ติดต่อเรา' }"
        :style="{ backgroundImage: `url('${bannerData.bgImage}')` }">
        <div class="bg-color w-100 h-100">
          <div class="container h-100 d-flex justify-content-center align-items-center">
            <div class="row w-100">
              <div class="col-12">
                <h1 class="font-bd text-s-52 color-1F2937">
                  {{ bannerData.header }}
                </h1>
                <p class="font-df text-s-28 mt-3 color-6B7280 d-none d-xl-block" v-html="bannerData.textD">
                </p>

                <p class="font-df text-s-28 mt-3 color-6B7280 d-none d-md-block d-xl-none" v-html="bannerData.textT">
                </p>

                <p class="font-df text-s-28 mt-3 color-6B7280 d-block d-md-none" v-html="bannerData.textM">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-md-block d-xl-none">
      <div class="mt-70"
        :class="{ 'bg-img': bannerData.header === 'แพ็กเกจ', 'bg-img-resources': bannerData.header === 'คู่มือการใช้งาน', 'bg-img-contact': bannerData.header === 'ติดต่อเรา' }"
        :style="{ backgroundImage: `url('${bannerData.bgImageTablet}')` }">
        <div class="bg-color w-100 h-100">
          <div class="container h-100 d-flex justify-content-center align-items-center">
            <div class="row w-100">
              <div class="col-12">
                <h1 class="font-bd text-s-52 color-1F2937">
                  {{ bannerData.header }}
                </h1>
                <p class="font-df text-s-28 mt-3 color-6B7280 d-none d-xl-block" v-html="bannerData.textD">
                </p>

                <p class="font-df text-s-28 mt-3 color-6B7280 d-none d-md-block d-xl-none" v-html="bannerData.textT">
                </p>

                <p class="font-df text-s-28 mt-3 color-6B7280 d-block d-md-none" v-html="bannerData.textM">
                </p>
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
  props: {
    bannerData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.mt-70 {
  margin-top: 65px;
}

.bg-img-mobile {
  background-repeat: no-repeat !important;
  background-size: 140%;
  background-position: bottom right -20px !important;
}

.bg-color {
  width: 100%;
  height: 100%;
  background: linear-gradient(90.01deg, #D9E3FF 0.01%, rgba(231, 207, 207, 0.55) 34%, rgba(244, 188, 158, 0.05) 67.99%),
    linear-gradient(90deg, #FFFFFF 40.73%, rgba(255, 255, 255, 0) 57.44%);

}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 767px) {
  .container {
    min-height: 400px;
  }

  .row {
    margin-bottom: 100px;
  }

  .bg-img {
    min-height: 400px;
    background-position: bottom;
    background-size: 120% !important;
  }

  .bg-color {
    background: linear-gradient(180.01deg, #D9E3FF 0.01%, rgba(231, 207, 207, 0.55) 34%, rgba(244, 188, 158, 0.05) 67.99%),
      linear-gradient(180deg, #FFFFFF 40.73%, rgba(255, 255, 255, 0) 57.44%);
  }

  .container {
    min-height: 400px;
  }

  .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .bg-img-contact {
    background-position: right 60%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
  }

  .bg-img-resources {
    background-position: center 100% !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .container {
    min-height: 200px;
  }

  .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .bg-color {
    width: 100%;
    height: 100%;
    background: linear-gradient(90.03deg, #D9E3FF 0.03%, rgba(231, 207, 207, 0.55) 40.88%, rgba(244, 188, 158, 0.05) 76.73%),
      linear-gradient(90deg, #FFFFFF 37.5%, rgba(255, 255, 255, 0) 67.31%);
  }

  .bg-img {
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-img-resources {
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-img-contact {
    background-position: right 60%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 60%;
  }
}

@media (min-width: 1000px) {
  .container {
    min-height: 225px;
  }
  .bg-img {
    min-height: 225px;
  }
  .bg-img-resources {
    min-height: 225px;
  }
}

@media (min-width: 1200px) {
  .container {
    min-height: 300px;
  }

  .text-s-52 {
    font-size: 52px !important;
    line-height: 52px !important;
  }

  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
  }

  .bg-img {
    background-position: right;
    background-repeat: no-repeat !important;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-img-resources {
    background-position: center 85% !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-img-contact {
    background-position: right 82%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 60%;
  }
}

@media (min-width: 1440px) {
  .bg-img-resources {
    background-position: right 85% !important;
    background-size: 80% !important;
    background-repeat: no-repeat !important;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-color {
    width: 100%;
    height: 100%;
    background: linear-gradient(90.01deg, #D9E3FF 0.01%, rgba(231, 207, 207, 0.55) 39%, rgba(244, 188, 158, 0.05) 72.99%),
      linear-gradient(90deg, #FFFFFF 45.73%, rgba(255, 255, 255, 0) 62.44%);
  }
}

@media (min-width: 1900px) {
  .bg-img-resources {
    background-position: right 85% !important;
    background-size: 55% !important;
    background-repeat: no-repeat !important;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-img {
    background-size: 55% !important;
  }

  .bg-color {
    width: 100%;
    height: 100%;
    background: linear-gradient(90.01deg, #D9E3FF 0.01%, rgba(231, 207, 207, 0.55) 44%, rgba(244, 188, 158, 0.05) 77.99%),
      linear-gradient(90deg, #FFFFFF 50.73%, rgba(255, 255, 255, 0) 67.44%);
  }
}
</style>