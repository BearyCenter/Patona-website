<template>
  <div class="bg p-spacing">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="m-auto text-section text-center mb-4 pt-1">
            <span class="text-ranbow text-s-18 font-bd m-0 p-1">Features</span>
          </div>
          <p class="text-s-44 font-bd color-1F2937 mb-2 pb-2 mb-xl-5 pb-xl-5">
            ที่ Patona มี <br/><span class="color-EC5E2A">Features</span> อะไรบ้าง
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <!-- Tabs -->
          <div class="tab-container ps-3">
            <div class="tab-wrap-main">
              <div class="tab-scroll-wrapper">
                <ul class="tab-scroll-list">
                  <li
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="tab-wrap cursor-pointer"
                    :class="{ active: activeTab === tab }"
                    @click="activeTab = tab"
                  >
                <div class="d-xl-flex d-none  flex-column align-items-center" :class="{ 'mt-1': tab === 'ระบบจัดการพัสดุ' }">
                  <img v-if="activeTab === tab" :src="require(`~/assets/img/home/Features/${tab}-h.png`)" :alt="tab">
                  <img v-else :src="require(`~/assets/img/home/Features/${tab}.png`)" :alt="tab">
                  <p class="text-s-16 font-md color-1F2937 mt-3">{{ tab }} <span v-if="tab === 'ระบบจัดการพัสดุ'" class="ms-1 mb-1 btn-coming-soon">Coming soon</span></p>
                </div>
                <div class="d-flex d-xl-none flex-column align-items-center" :class="{ 'mt-1': tab === 'ระบบจัดการพัสดุ' }">
                  <img v-if="activeTab === tab" :class="{ 'mt-3': tab !== 'ระบบจัดการพัสดุ' }" :src="require(`~/assets/img/home/Features/${tab}-h.png`)" :alt="tab">
                  <img v-else :class="{ 'mt-3': tab !== 'ระบบจัดการพัสดุ' }" :src="require(`~/assets/img/home/Features/${tab}.png`)" :alt="tab">
                  <span v-if="tab === 'ระบบจัดการพัสดุ'" class="btn-coming-soon text-s-14">Coming soon</span>
                  <p class="text-s-16 font-md color-1F2937 mb-0 mt-1" :class="{ 'mt-2 mb-2': tab !== 'ระบบจัดการพัสดุ' }">{{ tab }}</p>
                </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

          <!-- Tab content -->
        <div class="col-12 ps-3 pe-3">
          <div class="h-700 mt-5 pt-2">
            <div v-if="activeTab === 'ระบบ OMS'">
              <OmsSection />
            </div>
            <div v-if="activeTab === 'ระบบ POS'">
              <PosSection />
            </div>
            <div v-if="activeTab === 'ระบบจัดการสต็อก'">
              <StockSection />
            </div>
            <div v-if="activeTab === 'ระบบจัดการลูกค้า'">
              <CustomerSection />
            </div>
            <div v-if="activeTab === 'ระบบจัดการพัสดุ'">
              <ShippingSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import OmsSection from '~/components/Home/Features/OmsSection'
import PosSection from '~/components/Home/Features/PosSection'
import StockSection from '~/components/Home/Features/StockSection'
import CustomerSection from '~/components/Home/Features/CustomerSection'
import ShippingSection from '~/components/Home/Features/ShippingSection'

export default {
  components: {
    OmsSection,
    PosSection,
    StockSection,
    CustomerSection,
    ShippingSection
  },
  data() {
    return {
      tabs: [
        'ระบบ OMS',
        'ระบบ POS',
        'ระบบจัดการสต็อก',
        'ระบบจัดการลูกค้า',
        'ระบบจัดการพัสดุ'
      ],
      activeTab: 'ระบบ OMS'
    }
  }
}
</script>

<style scoped>
.p-spacing {
  padding-top: 60px;
}
img {
  width: 32px;
  height: 32px;
}
.tab-scroll-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.tab-scroll-wrapper::-webkit-scrollbar {
  display: none; /* Safari + Chrome */
}
.tab-scroll-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 10px;
}

.tab-scroll-list {
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;
  width: max-content;
}

.tab-scroll-list::-webkit-scrollbar {
  display: none;
}

.tab-wrap {
  flex: 0 0 auto;
  min-width: 140px;
  text-align: center;
  padding: 10px 8px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: transparent;
}
.text-s-16 {
  line-height: 16px !important;
}
.text-ranbow,
.text-ranbow > * {
  background: linear-gradient(61.26deg, #142257 8.22%, #EC5E2A 75.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mt-spacing {
  margin-top: 60px;
}

.tab-wrap-main {
  position: relative;
}

/* เส้นเทาพื้นหลังโค้งซ้ายขวาครอบแถบ */
.tab-wrap-main::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #ddd;
  border-radius: 8px;
  z-index: 0;
}

.tab-wrap-main ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tab-wrap {
  flex: 1 1 0;
  text-align: center;
  padding: 10px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.tab-wrap button {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #555;
}

/* เส้นส้ม animation เมื่อ active */
.tab-wrap::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 3px;
  width: 0;
  background-color: #f60;
  transition: all 0.3s ease;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 8px;
}

.tab-wrap.active::after {
  width: 100%;
}
</style>
