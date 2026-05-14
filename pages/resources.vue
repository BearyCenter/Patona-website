<template>
  <div id="resources" class="bg">
    
    <!-- Hero Section -->
    <section class="hero-section">
      <Banner
        :bannerData="{
          bgImage: require('~/assets/img/Resources/Hero.jpg'),
          bgImageTablet: require('~/assets/img/Resources/Hero-t.png'),
          header: 'คู่มือการใช้งาน',
          textD: 'เริ่มต้นใช้งาน Patona ฟรี! สามารถปรับแต่งและใช้งานได้ตามความต้องการของธุรกิจ<br/>รองรับการขยายตัว ให้ธุรกิจของคุณโตไปกับเรา',
          textT: 'เริ่มต้นใช้งาน Patona ฟรี! <br/>สามารถปรับแต่งและใช้งานได้ตามความต้องการของธุรกิจ<br/>รองรับการขยายตัว ให้ธุรกิจของคุณโตไปกับเรา',
          textM: 'เริ่มต้นใช้งาน Patona ฟรี!สามารถปรับแต่งและใช้งานได้ตามความ ต้องการของธุรกิจ รองรับการขยายตัว ให้ธุรกิจของคุณโตไปกับเรา',
        }"
      />
    </section>

    <!-- <section id="Features">
      <Features class="d-none d-md-block" />
      <FeaturesMobile class="d-block d-md-none" />
    </section> -->

    <section id="CardContact">
      <div class="container">
        <CardTestFree />
      </div>
    </section>

    <section class="p-top-spacing" id="ReleaseNotes">
      <ReleaseNotes class="d-none d-md-block" />
      <ReleaseNotesMobile class="d-block d-md-none" />
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
import CardContact from '~/components/CardContact';
import Features from '~/components/Resources/Features';
import CardTestFree from '~/components/Resources/CardTestFree';
import ReleaseNotes from '~/components/Resources/ReleaseNotes';
import FeaturesMobile from '~/components/Resources/FeaturesMobile';
import ReleaseNotesMobile from '~/components/Resources/ReleaseNotesMobile';
import Preloader from '~/components/Preloader';

export default {
  name: "resources",
  components: {
    Banner,
    Preloader,
    Features,
    CardContact,
    CardTestFree,
    ReleaseNotes,
    FeaturesMobile,
    ReleaseNotesMobile
  },
  layout: "Layout",
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == "th-TH" ? "th-TH" : "en-TH",
      title: 'Resources',
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

@media (max-width: 767px) {
  .p-bottom-spacing {
    padding-bottom: 60px;
  }
  .p-top-spacing {
    padding-top: 40px;
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
  .p-bottom-spacing {
    padding-bottom: 60px;
  }
  .p-top-spacing {
    padding-top: 40px;
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
    font-size: 20px !important;
    line-height: 20px !important;
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
  .p-bottom-spacing {
    padding-bottom: 120px;
  }
  .p-top-spacing {
    padding-top: 80px;
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
