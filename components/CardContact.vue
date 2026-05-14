<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-md-0 p-0">
        <div class="card d-none d-md-block">
          <img
            src="~/assets/img/CTA/30 3.png"
            alt="30 3.png"
            style="position: absolute; bottom: 0; right: 90px"
          />
          <img
            src="~/assets/img/CTA/30 2.png"
            alt="30 2.png"
            style="position: absolute; bottom: 0; left: 90px"
          />
          <img
            src="~/assets/img/CTA/30 5.png"
            alt="30 5.png"
            style="position: absolute; top: 0; right: 0"
          />
          <img
            src="~/assets/img/CTA/30 6.png"
            alt="30 6.png"
            style="position: absolute; top: 0; left: 0"
          />
          <img
            src="~/assets/img/CTA/30 4.png"
            alt="30 4.png"
            style="position: absolute;left: 50%;bottom: 0;transform: translateX(-50%);"
          />
          <div class="card-body text-center">
            <p class="text-s-60 font-bd gradient-text mb-md-5 mb-4">
              พา <span class="color-1F2937 bg-1F2937">ธุรกิจของคุณ</span> โต <span class="color-1F2937 bg-1F2937">ไปกับเรา</span> นะ
            </p>
            <div class="d-flex text-center justify-content-center">
              <a
                href="mailto:support.akita@sellsuki.com"
                class="btn-main me-3"
                ><img
                  class="me-2"
                  src="~/assets/img/CTA/envelope.png"
                  alt="envelope.png"
                />support.akita@sellsuki.com</a
              >
              <a
                href="https://lin.ee/5ljYXPo" target="_blank"
                class="btn-sub"
                ><img
                  class="me-2"
                  src="~/assets/img/CTA/chat-bubble-oval-left-ellipsis.png"
                  alt="chat-bubble-oval-left-ellipsis.png"
                />แชทผ่านไลน์</a
              >
            </div>
          </div>
        </div>

        <div class="card d-block d-md-none" style="min-height: 438px;">
          <img
            src="~/assets/img/CTA/Mobile/1.png"
            alt="30 3.png"
            style="position: absolute; top: 50px; left: 0px"
          />
          <img
            src="~/assets/img/CTA/Mobile/2.png"
            alt="30 2.png"
            style="position: absolute; bottom: 0; left: 0px"
          />
          <img
            src="~/assets/img/CTA/Mobile/4.png"
            alt="30 5.png"
            style="position: absolute; top: 3px; right: 0"
          />
          <img
            src="~/assets/img/CTA/Mobile/3.png"
            alt="30 6.png"
            style="position: absolute; bottom: 0; right: 0"
          />
          <img
            src="~/assets/img/CTA/Mobile/5.png"
            alt="30 4.png"
            style="position: absolute;left: 50%;bottom: 0;transform: translateX(-50%);"
          />
          <div class="card-body text-center">
            <p class="font-bd gradient-text mt-5 mb-4" style="font-size: 36px;line-height: 36px;">
              พา <span class="color-1F2937 bg-1F2937">ธุรกิจของคุณ<br/></span> โต <span class="color-1F2937 bg-1F2937">ไปกับเรา</span> นะ
            </p>
            <div class="text-center justify-content-center">
              <a
                href="mailto:support.akita@sellsuki.com"
                class="btn-main me-3"
                ><img
                  class="me-2"
                  src="~/assets/img/CTA/envelope.png"
                  alt="envelope.png"
                />support.akita@sellsuki.com</a
              >
              <a
                href="https://lin.ee/5ljYXPo" target="_blank"
                class="btn-sub mt-3"
                ><img
                  class="me-2"
                  src="~/assets/img/CTA/chat-bubble-oval-left-ellipsis.png"
                  alt="chat-bubble-oval-left-ellipsis.png"
                />แชทผ่านไลน์</a
              >
            </div>
          </div>
        </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      windowWidth: 0
    }
  },
  computed: {
    slidesPerPage() {
      return this.windowWidth <= 576 ? 1 : 2
    }
  },
  methods: {
    // ...existing methods...
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
.card {
  background: linear-gradient(236.24deg, #D9E3FF 33.77%, #F4BC9E 75.9%),
linear-gradient(79.31deg, rgba(255, 255, 255, 0) 5.76%, rgba(255, 255, 255, 0.3) 47.05%, rgba(255, 255, 255, 0) 88.35%);

  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px #7B64AF12,0px 5px 5px 0px #7B64AF0F,0px 12px 7px 0px #7B64AF0A,0px 20px 8px 0px #7B64AF03,0px 32px 9px 0px #7B64AF00;

}

.gradient-text {
  background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.gradient-text .color-1F2937 {
  background: none !important;
  -webkit-background-clip: initial !important;
  -webkit-text-fill-color: #1F2937 !important;
  background-clip: initial !important;
  color: #1F2937 !important;
}

.bg-1F2937 {
  background: none; 
  -webkit-background-clip: initial; 
  -webkit-text-fill-color: initial; 
  color: #1F2937;
}

.btn-main {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #EC5E2A;
  color: #fff !important;
  font-size: 28px;
  line-height: 28px;
  font-family: 'Heavent-med';
  border: none;
  border-radius: 32px;
  padding: 14px 24px;
  min-width: 0;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  text-decoration: none !important;
  white-space: nowrap;
}

.btn-sub {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #142257;
  color: #fff !important;
  font-size: 28px;
  line-height: 28px;
  font-family: 'Heavent-med';
  border: none;
  border-radius: 32px;
  padding: 14px 24px;
  min-width: 0;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  text-decoration: none !important;
  white-space: nowrap;
}

.btn-main img {
  object-fit: contain;
  margin-right: 8px;
}

.btn-sub img {
  object-fit: contain;
  margin-right: 8px;
}

a:visited,
a:link,
a:hover,
a:active {
  color: #fff !important;
}

@media only screen and (max-width: 600px) {
  .btn-sub {
    font-size: 24px;
    padding: 8px 16px;
  }
  .btn-main {
    font-size: 24px;
    padding: 8px 16px;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px;
  }
  .card-body {
    padding: 55px 40px;
    position: relative;
    z-index: 9;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px;
  }
  .card-body {
    padding: 55px 40px;
    position: relative;
    z-index: 9;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .card-body {
    padding: 112px 40px;
    position: relative;
    z-index: 9;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
  .card-body {
    padding: 112px;
    position: relative;
    z-index: 9;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
  .card-body {
    padding: 135px;
    position: relative;
    z-index: 9;
  }
}
</style>
