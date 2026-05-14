<template>
  <div id="FooterMenu" class="font-df">
      <div class="bg">
        <div style="background: #090F27;opacity: 0.95;">
          <!-- footer desktops ------------------------------------------------------------- -->
        <div class="container d-none d-md-block">
          <div class="p-5 ps-xl-0 pe-xl-0">
            <div class="row mt-4">
              <div class="col-lg-4 col-12">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img src="~/assets/img/Footer/Logo with system__.png" alt="logo-footer.svg"></nuxt-link>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Address:</p>
                <p class="text-s-20 color-FFFFFF mt-2">
                  Akita Fulfillment Co.,Ltd.<br/>4Simplex, 3rd Floor, No. 10/39<br/>Ratchadapisek Road, Chankasem,<br/>Chatuchak, Bangkok 10900<br/>Thailand
                </p>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Contact:</p>
                <p class="text-s-20 color-FFFFFF mt-2">02 0263250</p>
                <div class="d-flex mt-4">
                  <a href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/Facebook.png" alt="facebook icon" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/Instagram.png" alt="Instagram.png" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/X.png" alt="X" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/LinkedIn.png" alt="LinkedIn.png" loading="lazy"></a>
                  <a class="ms-2" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img src="~/assets/img/Footer/Youtube.png" alt="Youtube.png" loading="lazy"></a>
                </div>
              </div>
              <div class="col-lg-8 col-12">
                <div class="row">
                  <div class="col-lg-2 col-12" style="width: 25% !important">
                  </div>
                  <div class="col-lg-2 col-12" style="width: 25% !important">
                    <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Product</a></p>
                    <p class="text-s-20 mb-2"><a href="/#Features" class="text-white">Features</a></p>
                    <p class="text-s-20 mb-2"><a href="#Services" class="text-white">Pricing</a></p>
                    <p class="text-s-20 mb-2"><a href="#Question" class="text-white">FAQs</a></p>
                  </div>
                  <div class="col-lg-2 col-12" style="width: 25% !important">
                    <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Resources</a></p>
                    <p class="text-s-20 mb-2"><nuxt-link to="/resources" class="text-white">คู่มือการใช้งาน</nuxt-link></p>
                    <p class="text-s-20 mb-2"><nuxt-link to="/resources#ReleaseNotes" class="text-white">Release Notes</nuxt-link></p>
                  </div>
                  <div class="col-lg-2 col-12" style="width: 25% !important">
                    <p class="text-s-20 font-bd"><nuxt-link to="/about-us" class="text-white">ติดต่อเรา</nuxt-link></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 63px;">
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                <a href="tel:0900967526" target="_blank"><p class="text-w-500 text-s-20 text-white">© Akita Fulfillment Co.,Ltd. (c) All rights reserved.</p></a>
              </div>
              <div class="col-7 text-end">
                <span class="text-s-20 text-white me-3" style="text-decoration: underline;">Privacy Policy</span>
                <span class="text-s-20 text-white me-3" style="text-decoration: underline;">Terms of Service</span>
                <span class="text-s-20 text-white me-3" style="text-decoration: underline;">Cookies Settings</span>
              </div>
            </div>
          </div>
        </div>
        <!-- footer mobile ------------------------------------------------------------- -->
        <div class="container d-block d-md-none">
          <div class="p-3 ps-xl-0 pe-xl-0">
            <div class="row mt-4">
              <div class="col-lg-4 col-12 mb-5">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img src="~/assets/img/Footer/Logo with system__.png" alt="logo-footer.svg"></nuxt-link>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Address:</p>
                <p class="text-s-20 color-FFFFFF mt-2">
                  Akita Fulfillment Co.,Ltd.<br/>4Simplex, 3rd Floor, No. 10/39<br/>Ratchadapisek Road, Chankasem,<br/>Chatuchak, Bangkok 10900<br/>Thailand
                </p>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Contact:</p>
                <p class="text-s-20 color-FFFFFF mt-2">02 0263250</p>
                <div class="d-flex mt-4">
                  <a href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/Facebook.png" alt="facebook icon" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/Instagram.png" alt="Instagram.png" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/X.png" alt="X" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="~/assets/img/Footer/LinkedIn.png" alt="LinkedIn.png" loading="lazy"></a>
                  <a class="ms-2" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img src="~/assets/img/Footer/Youtube.png" alt="Youtube.png" loading="lazy"></a>
                </div>
              </div>
              <div class="col-lg-2 col-6">
                <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Product</a></p>
                <p class="text-s-20 mb-2"><a href="/#Features" class="text-white">Features</a></p>
                <p class="text-s-20 mb-2"><a href="#Services" class="text-white">Pricing</a></p>
                <p class="text-s-20 mb-2"><a href="#Question" class="text-white">FAQs</a></p>
              </div>
              <div class="col-lg-2 col-6">
                <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Resources</a></p>
                <p class="text-s-20 mb-2"><nuxt-link to="/resources" class="text-white">คู่มือการใช้งาน</nuxt-link></p>
                <p class="text-s-20 mb-2"><nuxt-link to="/resources#ReleaseNotes" class="text-white">Release Notes</nuxt-link></p>
              </div>
            </div>
            <hr class="mb-4 mt-4"/>
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <a href="tel:0900967526" target="_blank"><p class="text-w-500 text-s-20 text-white">© Akita Fulfillment Co.,Ltd. (c) All rights reserved.</p></a>
              </div>
            </div>
            <div class="row mt-4 mb-5">
              <div class="col-4">
                <span class="text-s-20 text-white" style="text-decoration: underline;">Privacy Policy</span>
              </div>
              <div class="col-4">
                <span class="text-s-20 text-white" style="text-decoration: underline;">Terms of Service</span>
              </div>
              <div class="col-4">
                <span class="text-s-20 text-white" style="text-decoration: underline;">Cookies Settings</span>
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
  name: 'FooterMenu',
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
p{
  margin-bottom: 0;
}
.mb-2{
  margin-bottom: 12px !important;
}
.text-s-20{
  line-height: 28.77px;
}
.font-Heavent{
    font-family: 'Heavent', 'Prompt';
}
.hover-manu a:hover{
  color: #FFFFFF !important;
  font-weight: 400;
}

.hover-manu a {
  color: #D1D5DB !important;
  display: inline-block;
  position: relative;
}

a{
  color: unset;
}
a:hover{
  color: #FFF !important;
}
.footer-icon{
  width: 40px;
  height: 40px;
  border-radius: 32px;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.text-s-20{
  line-height: 20px;
}
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .bg{
    background-image: url('~@/assets/img/Footer/bg.jpg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .bg{
      background-image: url('~@/assets/img/Footer/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    }
    .hover-manu p{
      line-height: 23.97px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .bg{
    background-image: url('~@/assets/img/Footer/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .bg{
    background-image: url('~@/assets/img/Footer/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .bg{
    background-image: url('~@/assets/img/Footer/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center -1050px;
  }
  .hover-manu p{
    line-height: 28.77px;
  }
}
</style>