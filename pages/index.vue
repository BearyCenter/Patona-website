<template>
  <div id="BusinessConsulting">
    
    <!-- Hero Section -->
    <section class="hero-section">
      <Banner />
    </section>

    <section id="ProblemStatement">
      <ProblemStatement />
    </section>

    <section id="Features">
      <Features class="d-none d-md-block" />
      <FeaturesMobile class="d-block d-md-none" />
    </section>

    <section id="Services">
      <Services class="d-none d-md-block" />
      <ServicesMobile class="d-block d-md-none" />
    </section>

    <section id="Packages">
      <Packages />
    </section>

    <section id="Question">
      <Question />
    </section>
  </div>
</template>

<script>
import ProblemStatement from '~/components/Home/ProblemStatement'
import Features from '~/components/Home/Features'
import Services from '~/components/Home/Services'
import Packages from '~/components/Home/Packages'
import Question from '~/components/Home/Question'
import Banner from '../components/Home/Banner'
import ServicesMobile from '~/components/Home/ServicesMobile'
import FeaturesMobile from '~/components/Home/FeaturesMobile'
import Preloader from '~/components/Preloader'

export default {
  name: 'home',
  components: {
    ProblemStatement,
    Features,
    Services,
    Packages,
    Question,
    Banner,
    ServicesMobile,
    FeaturesMobile,
    Preloader
  },
  layout: 'Layout',
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
      title: 'Home',
      route: process.env.MAIN_API_URL + this.$route.path,
      description:
        'พาโตนะ ระบบจัดการร้านค้า ระบบหลังบ้านที่ใช้งานง่ายและมีประสิทธิภาพคนเดียวก็เอาอยู่!',
    })
  },
  head: {
    script: [
      {
        src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
        body: true
      }
    ]
  },
  data() {
    return {
      isHidden: false,
      lang: this.$i18n.locale || 'th-TH',
      responseData: [],
      animation1: false,
      showDiv: false,
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Add the scroll event listener
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Clean up the listener
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  },
}
</script>

<style scoped>

</style>
