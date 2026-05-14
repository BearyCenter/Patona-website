<template>
  <div id="packages" class="bg">
    
    <!-- Hero Section -->
    <section class="hero-section">
      <Banner
        :bannerData="{
          bgImage: require('~/assets/img/Packages/Hero.png'),
          bgImageTablet: require('~/assets/img/Packages/Hero-t.png'),
          header: 'แพ็กเกจ',
          textD: 'เลือกแพ็กเกจที่ใช่ สำหรับธุรกิจของคุณ! Patona มีตัวเลือกที่ยืดหยุ่น<br/>ครอบคลุมทุกขนาดธุรกิจ พร้อมฟีเจอร์ครบครัน ใช้งานง่าย คุ้มค่าในทุกระดับการเติบโต',
          textT: 'เลือกแพ็กเกจที่ใช่ สำหรับธุรกิจของคุณ!<br/>Patona มีตัวเลือกที่ยืดหยุ่น ครอบคลุมทุกขนาดธุรกิจ<br/>พร้อมฟีเจอร์ครบครัน ใช้งานง่าย คุ้มค่าในทุกระดับการเติบโต',
          textM: 'เลือกแพ็กเกจที่ใช่ สำหรับธุรกิจของคุณ!<br/>Patona มีตัวเลือกที่ยืดหยุ่น ครอบคลุมทุกขนาดธุรกิจ<br/>พร้อมฟีเจอร์ครบครัน ใช้งานง่าย คุ้มค่าในทุกระดับการเติบโต',
        }"
      />
    </section>

    <section id="Pricing">
      <Pricing />
    </section>

    <section id="table">
      <Table />
    </section>

    <section id="CardContact">
      <div class="container">
        <CardContact class="pt-4 p-bottom-spacing"/>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '~/components/Banner';
import Pricing from '~/components/Packages/Pricing';
import Table from '~/components/Packages/Table';
import CardContact from '~/components/CardContact';
import Preloader from '~/components/Preloader';

export default {
  name: "packages",
  components: {
    Banner,
    Pricing,
    Table,
    CardContact,
    Preloader
  },
  layout: "Layout",
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == "th-TH" ? "th-TH" : "en-TH",
      title: 'Packages',
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

.p-bottom-spacing {
  padding-bottom: 120px;
}

@media (max-width: 767px) {
  .p-bottom-spacing {
    padding-bottom: 60px;
  }
}
</style>
