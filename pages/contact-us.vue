<template>
  <div id="packages" class="bg">
    
    <!-- Hero Section -->
    <section class="hero-section">
      <Banner
        :bannerData="{
          bgImage: require('~/assets/img/Contact/Hero.jpg'),
          bgImageTablet: require('~/assets/img/Contact/Hero.jpg'),
          header: 'ติดต่อเรา',
          textD: 'ทีมงาน Patona พร้อมช่วยเหลือคุณทุกขั้นตอน<br/>ติดต่อเราได้ง่าย ๆ เพื่อให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น ไม่มีสะดุด',
          textT: 'ทีมงาน Patona พร้อมช่วยเหลือคุณทุกขั้นตอน<br/>ติดต่อเราได้ง่าย ๆ เพื่อให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น ไม่มีสะดุด',
          textM: 'ทีมงาน Patona พร้อมช่วยเหลือคุณทุกขั้นตอน<br/>ติดต่อเราได้ง่าย ๆ เพื่อให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น ไม่มีสะดุด',
        }"
      />
    </section>

    <section id="CardDetailContact">
      <CardDetailContact />
    </section>

    <section id="Map">
      <Map />
    </section>

    <section class="d-block d-xl-none">
      <div class="container">
        <CardContact class="p-spacing-CardContact"/>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '~/components/Banner';
import CardDetailContact from '~/components/ContactUs/CardDetailContact';
import Map from '~/components/ContactUs/Map';
import Preloader from '~/components/Preloader';

export default {
  name: "contact-us",
  components: {
    Banner,
    CardDetailContact,
    Map,
    Preloader
  },
  layout: "Layout",
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == "th-TH" ? "th-TH" : "en-TH",
      title: 'Contact Us',
      route: process.env.MAIN_API_URL + this.$route.path,
      description:
        "พาโตนะ ระบบจัดการร้านค้า ระบบหลังบ้านที่ใช้งานง่ายและมีประสิทธิภาพคนเดียวก็เอาอยู่!",
    });
  },
  data() {
    return {
      lang: this.$i18n.locale || "th-TH",
    };
  },
};
</script>

<style scoped>
.bg {
  background-image: url('~/assets/img/home/BG2.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}

.p-spacing-CardContact {
  padding-bottom: 60px;
}
</style>
