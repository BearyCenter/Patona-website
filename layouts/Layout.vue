<template>
  <div>
    <!-- <Cookie/> -->
     <!-- GTM noscript -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZPJNV5L"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <div class="d-none d-xl-block">
      <nav class="navbar navbar-expand-lg fixed-top" style="z-index: 999">
        <div class="container">
          <div class="ml-2">
            <ul class="navbar-nav text-s-16 text-w-500">
              <a href="/">
                <img src="~/assets/img/v2/Logo.svg" alt="sellsuki-logo" loading="lazy"
                  class="d-inline-block align-text-top cover-img sellsuki-logo" />
              </a>
              <a href="/#Features">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">บริการ</div>
                </li>
              </a>
              <a href="/packages">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">แพ็กเกจ</div>
                </li>
              </a>
              <li @mouseenter="isHovered = true" @mouseleave="isHovered = false" id="คู่มือการใช้งาน"
                class="nav-item navbar-item margin-menu menu-container">
                <a class="nav-link" aria-current="page" href="#"><span class="ms-2"
                    :class="{ 'hover-main': isHovered }">คู่มือการใช้งาน</span>
                  <img class="ms-2" :src="isHovered
                    ? require('~/assets/img/menu/chevron-down-hover.png')
                    : require('~/assets/img/menu/chevron-down.png')
                    " alt="chevron-down.png" />
                </a>
                <transition name="fade">
                  <div v-if="isHovered" class="submenu">
                    <a href="/resources" class="text-s-24 font-md color-1F2937 hover-submenu"
                      @mouseover="hoveredItem = 'book'" @mouseleave="hoveredItem = null"><img class="me-2"
                        :src="hoveredItem === 'book'
                          ? require('~/assets/img/menu/book-open-flat-colored.png')
                          : require('~/assets/img/menu/book-open.png')
                          " alt="book-open.png" />คู่มือการใช้งาน</a>
                    <a href="/resources#ReleaseNotes" class="text-s-24 font-md color-1F2937 hover-submenu"
                      @mouseover="hoveredItem = 'document'" @mouseleave="hoveredItem = null"><img
                        class="me-2" :src="hoveredItem === 'document'
                          ? require('~/assets/img/menu/document-text-flat-colored.png')
                          : require('~/assets/img/menu/document-text.png')
                          " alt="document-text.png" />Release Notes</a>
                  </div>
                </transition>
              </li>
              <a href="https://www.sellsuki.co.th/blog">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{ $t("Menu.Blog") }}</div>
                </li>
              </a>
              <nuxt-link :to="localePath('contact-us')">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{ $t("Menu.ContactUs") }}</div>
                </li>
              </nuxt-link>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <nuxt-link class="text-lang" v-if="$i18n.locale == 'en'" :to="switchLocalePath('th-TH')" href="#">
              <div class="d-flex text-lang" style="
                border: 1px solid #ebedf3;
                background-color: #f9fafb;
                border-radius: 32px;
                padding: 0px 8px 0px 0px;
              ">
                <img src="~/assets/img/Footer/Thumb.png" alt="Thumb.png" />
                <span class="font-md text-s-24">EN</span>
              </div>
            </nuxt-link>
            <nuxt-link class="text-lang" v-else :to="switchLocalePath('en')" href="#">
              <div class="d-flex" style="
                  border: 1px solid #ebedf3;
                  background-color: #f9fafb;
                  border-radius: 32px;
                  padding: 0px 8px 0px 0px;
                ">
                <img src="~/assets/img/Footer/Thumb.png" alt="Thumb.png" />
                <span class="font-md text-s-24">TH</span>
              </div>
            </nuxt-link>
            <a href="https://sellercenter.patona.online/" class="btn-White text-s-24 font-md text-center ms-3">
              <span>เข้าสู่ระบบ</span>
            </a>
            <a href="https://accounts.sellsuki.com/registration?error=&flow=e592685a-d546-4a00-bce6-6db992bc978c&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona"
              class="btn-gradient text-s-24 font-md text-center ms-3">
              <span>สมัครเลย</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div class="d-block d-xl-none">
      <MobileMenu :visible="showMenu" @close="showMenu = false" />
      <header>
        <div class="side-bg"></div>
        <nav class="nav-bar">
          <a href="/" class="nav-branding"><img src="~/assets/img/v2/Logo with system__.png" alt="sellsuki-logo"
              loading="lazy" style="margin-left: -10px" /></a>

          <img @click="showMenu = true" src="~/assets/img/mobile/bars-3.png" alt="bars-3" />
        </nav>
      </header>
    </div>
    <nuxt />
    <Footer />
    <div>
      <div class="fabs animate__animated animate__bounce" @click="isActive = !isActive"
        style="bottom: 80px !important; z-index: 99">
        <div class="click-up" :class="{ 'bg-white': !isActive }">
          <img v-if="isActive" src="~/assets/img/chat-bubble-left-right.png" alt="chevron-up.png" />
          <img v-else src="~/assets/img/x-mark.png" alt="chevron-up.png" />
        </div>
      </div>
      <div class="fabs animate__animated animate__bounce" @click="scrollToTop">
        <div class="click-up mt-3">
          <img src="~/assets/img/chevron-up.png" alt="chevron-up.png" />
        </div>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'line'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up" style="margin-bottom: 155px">
        <a target="_blank" rel="noopener" href="https://lin.ee/5ljYXPo">
          <div v-if="statusButton === 'line'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 110px">
              LINE : @patona
            </p>
            <img class="tooltip-arrow" src="~/assets/img/menu/Line/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/img/line-logo.png" alt="line-logo.png" />
          </div>
        </a>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'call'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-03" style="margin-bottom: 222px">
        <a target="_blank" rel="noopener" href="tel:0900967526">
          <div v-if="statusButton === 'call'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 115px">
              Call : 020263250
            </p>
            <img class="tooltip-arrow" src="~/assets/img/menu/Line/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/img/phone.png" alt="phone.png" />
          </div>
        </a>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'email'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-05" style="margin-bottom: 289px">
        <a target="_blank" rel="noopener" href="mailto:customersolutionteam@sellsuki.com">
          <div v-if="statusButton === 'email'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 220px">
              Email : support.akita@sellsuki.com
            </p>
            <img class="tooltip-arrow" src="~/assets/img/menu/Line/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/img/envelope.png" alt="envelope.png" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenuMobile from "@/components/Menu/MainMenuMobile";
import Footer from "@/components/Menu/Footer";
import MobileMenu from "~/components/Menu/MobileMenu";
export default {
  layout: null,
  components: {
    MainMenuMobile,
    Footer,
    MobileMenu,
  },
  data() {
    return {
      isActive: true,
      status: true,
      menu: "",
      menuMein: "Business Solutions",
      activeMainMenu: "Business Solutions",
      statusButton: "none",
      showMenu: false,
      isHovered: false,
      hoveredItem: null,
    };
  },
  computed: {
    title() {
      //return this.$store.state.title
    },
  },
  mounted() {
    if (this.lang == "th-TH") {
      this.status = true;
    } else {
      this.status = false;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
@import url("~/assets/styles/css/customNew.css");

.navbar,
.navbar-nav,
.nav-item,
.nav-link {
  display: flex;
  align-items: center;
  height: 100%;
}

.text-lang .d-flex>img,
.text-lang .d-flex>span {
  display: flex;
  align-items: center;
}

.text-lang .d-flex {
  display: flex;
  align-items: center;
}

.btn-gradient {
  display: inline-block;
  padding: 8px 22px !important;
}

.btn-White {
  display: inline-block;
  padding: 8px 22px !important;
  line-height: 100%;
  font-family: 'Heavent-med', sans-serif;
  color: #323C4C !important;
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
}

a {
  color: unset !important;
}

.custom-delay-03 {
  animation-delay: 0.3s !important;
}

.custom-delay-05 {
  animation-delay: 0.5s !important;
}

.custom-delay-07 {
  animation-delay: 0.7s !important;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.nav-item p a {
  color: #ffffff !important;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#progress {
  display: none;
}

.tooltip-arrow {
  margin-top: 23px;
  position: absolute;
  right: 68px;
}

.tooltip-fabs {
  position: absolute;
  right: 72px;
  padding: 6px 10px;
  background-color: #FFFFFF;
  border-radius: 4px;
  margin-top: 12px;
  font-size: 18px;
  line-height: 18px;
  color: #1F2937;
}

.menu-container {
  position: relative;
  display: inline-block;
}

.bg-white {
  background-color: #ffffff !important;
}

.hover-main {
  color: #ec5e2a !important;
}

.hover-submenu:hover {
  color: #ec5e2a !important;
}

.submenu {
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 16px;
  min-width: 175px;
  z-index: 1000;
}

.submenu a {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 8px 0px;
}

.submenu a:hover {
  color: #ec5e2a;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.align-self-center {
  text-align: center;
}

.text-s-20 {
  line-height: 20px;
}

.click-up {
  cursor: pointer;
  border-radius: 32px;
  padding: 12px;
  background: #FFFFFF;
  box-shadow: -1px -6px 4px 0px #ffffff59 inset, 1px 1px 4px 0px #ffffff59 inset,
    0px 3px 10px 0px #0000000d;
}

.icon-back {
  border-radius: 27px;
  border: 1px solid #ff6603;
  background: #ffefe5;
  display: inline-flex;
  padding: 7.5px 10.5px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
}

.nav-custom {
  padding-top: 9px;
  padding-bottom: 9px;
  background: #fff;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.1),
    0px 1px 2px 0px rgba(17, 24, 39, 0.1),
    0px 4px 4px 0px rgba(17, 24, 39, 0.09),
    0px 10px 6px 0px rgba(17, 24, 39, 0.05),
    0px 18px 7px 0px rgba(17, 24, 39, 0.01),
    0px 27px 8px 0px rgba(17, 24, 39, 0), 0px 0px 1px 0px rgba(17, 24, 39, 0.3);
}

.hover-manu a p:hover {
  color: #f38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151c !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}

.hover-manu a p:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: #f38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.hover-manu a p:hover:after {
  width: 100%;
}

.menu-bar li:hover div {
  color: #ffffff !important;
  border: 0;
}

.navbar-nav {
  flex-direction: row !important;
}

.opct-02 {
  opacity: 0.5 !important;
}

.switch {
  position: relative;
  display: inline-block;
}

.switch>span {
  position: absolute;
  top: -3px;
  pointer-events: none;
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked~.off {
  color: #fff;
}

input.check-toggle-round-flat:checked~.on {
  color: #f36f25;
}

.switch {
  border: 1px solid rgba(243, 91, 31, 0.2);
  border-radius: 16px;
}

.switch>span.on {
  left: 0;
  padding-left: 0px;
  color: #fff;
}

.switch>span.off {
  right: 0;
  padding-right: 4px;
  color: #f36f25;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.check-toggle+label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat+label {
  padding: 2px;
  width: 75px;
  height: 23px;
  background-color: #fff;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat+label:before,
input.check-toggle-round-flat+label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat+label:before {
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: #fff;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat+label:after {
  top: 0px;
  left: -2px;
  bottom: 0px;
  width: 40px;
  background-color: #f36f25;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked+label {}

input.check-toggle-round-flat:checked+label:after {
  margin-left: 38px;
}

.nav-link {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.btn-lang span {
  color: #f35b1f !important;
}

.btn-lang {
  background: #ffffff;

  border: 1px solid rgba(243, 91, 31, 0.2);
  border-radius: 20px;
  line-height: 0.5 !important;
  position: relative;
  padding: 1px 10px 0px 0px;
}

.nav-sp {
  height: 78px;
}

.navbar {
  padding-top: 3px;
  padding-bottom: 3px;
  background: #fff;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.1),
    0px 1px 2px 0px rgba(17, 24, 39, 0.1),
    0px 4px 4px 0px rgba(17, 24, 39, 0.09),
    0px 10px 6px 0px rgba(17, 24, 39, 0.05),
    0px 18px 7px 0px rgba(17, 24, 39, 0.01),
    0px 27px 8px 0px rgba(17, 24, 39, 0), 0px 0px 1px 0px rgba(17, 24, 39, 0.3);
}

.nav-link {
  font-size: 24px;
  color: #09193a !important;
}

.hover-manu a p:hover {
  color: #f38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151c !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}

.hover-manu a p:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: #f38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.hover-manu a p:hover:after {
  width: 100%;
}

.menu-bar li:hover div {
  color: #ffffff !important;
  border: 0;
}

/* Extra small devices (phones, 525px and down) */
@media only screen and (max-width: 525px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .sellsuki-logo {
    margin-right: 0px;
  }

  .margin-menu {
    padding-right: 12px;
    padding-left: 12px;
  }

  .navbar-nav {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .sellsuki-logo {
    margin-right: 0px;
  }

  .margin-menu {
    padding-right: 12px;
    padding-left: 12px;
  }

  .navbar-nav {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .sellsuki-logo {
    margin-right: 65px;
  }

  .margin-menu {
    padding-right: 16px;
    padding-left: 16px;
  }
}

header {
  background-color: #262626;
}

.btn-account {
  background-color: #32a9ff;
  width: 100%;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
}

.opct-02 {
  opacity: 0.5 !important;
}

/* need a solution for the next 2 properties */
li {
  list-style: none;
}

a {
  text-decoration: none;
}

ol,
ul {
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.side-bg.active {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  background-color: #000000;
  overflow-x: hidden;
  transition: 0.5s;
  opacity: 0.5;
}

.active-lang {
  background: #f6ece0;
  color: #50151c !important;
  font-weight: bold !important;
}

.nav-bar {
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5em;
  z-index: 999;
  position: fixed;
  top: 0px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  box-shadow: 0 0 0 0 rgba(17, 24, 39, 0.1), 0 1px 2px 0 rgba(17, 24, 39, 0.1),
    0 4px 4px 0 rgba(17, 24, 39, 0.09), 0 10px 6px 0 rgba(17, 24, 39, 0.05),
    0 18px 7px 0 rgba(17, 24, 39, 0.01), 0 27px 8px 0 rgba(17, 24, 39, 0),
    0 0 1px 0 rgba(17, 24, 39, 0.3);
}

.nav-branding {
  font-size: 2rem;
  font-weight: 600;
  transition: color 500ms ease;
}

.nav-branding:hover,
.nav-branding:focus {
  color: dodgerblue;
}

.nav-menu {
  position: fixed;
  left: -100%;
  top: 0;
  flex-direction: column;
  background-color: #03193c;
  width: 100%;
  height: 100%;
  transition: 750ms;
  z-index: 9999;
  margin-top: 0;
}

.nav-menu.active {
  left: 0;
}

.navbar-brand {
  font-size: 24px !important;
  color: #fff !important;
}

.nav-link {
  transition: 400ms ease;
}

.hamburger {
  cursor: pointer;
  z-index: 9999;
  margin-top: 5px;
}

.bar {
  display: block;
  background-color: #212529;
  width: 24px;
  /* The following 2 properties are essential in creating the "X" when the hamburger is clicked. If you change just 1 of the 2, then you need to find the proper combination for the other one */
  height: 2px;
  margin: 6px auto;

  /*    -webkit-transition: all 300ms ease;  */
  transition: all 300ms ease-in-out;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background-color: #fff;
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background-color: #fff;
}

.switch {
  position: relative;
  display: inline-block;
}

.switch>span {
  position: absolute;
  top: -3px;
  pointer-events: none;
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked~.off {
  color: #fff;
}

input.check-toggle-round-flat:checked~.on {
  color: #fff;
}

.switch {
  border: 1px solid #f35b1f80;
  border-radius: 16px;
}

.switch>span.on {
  left: 0;
  padding-left: 0px;
  color: #fff;
}

.switch>span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.check-toggle+label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat+label {
  padding: 2px;
  width: 77px;
  height: 25px;
  background-color: #03193c;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat+label:before,
input.check-toggle-round-flat+label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat+label:before {
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: #03193c;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat+label:after {
  top: 0px;
  left: -2px;
  bottom: 0px;
  width: 40px;
  background-color: #f36f25;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked+label {}

input.check-toggle-round-flat:checked+label:after {
  margin-left: 38px;
}

@media (min-width: 1200px) {
  .nav-menu {
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
    width: auto;
  }

  .hamburger {
    display: none;
  }
}
</style>
