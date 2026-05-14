<template>
  <transition name="slide">
    <div v-if="visible" class="offcanvas show" tabindex="-1"
      style="visibility: visible; width: 100%; height: 100vh; background: white; position: fixed; top: 0; left: 0; z-index: 1050;">
      <!-- Header -->
      <div class="offcanvas-header border-bottom">
        <img src="~/assets/img/v2/Logo with system__.png" alt="Sellsuki" height="44" style="margin-left: -10px;" />
        <button type="button" class="btn-close text-reset" @click="$emit('close')"></button>
      </div>

      <!-- Body -->
      <div class="offcanvas-body overflow-auto p-4 color-1F2937">
        <ul class="list-unstyled">

          <a @click="$emit('close')" href="/#Features" class="text-decoration-none w-100">
            <li>
              <div
                class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2">
                บริการ
              </div>
            </li>
          </a>

          <nuxt-link @click.native="$emit('close')" to="/packages" class="text-decoration-none w-100">
            <li>
              <div
                class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2">
                แพ็กเกจ
              </div>
            </li>
          </nuxt-link>

          <li>
            <div class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2">
              คู่มือการใช้งาน
              <img @click="toggle('Software')" v-if="isOpen.Software" class="pe-2"
                src="~/assets/img/mobile/chevron-up.png" alt="chevron-down" />
              <img @click="toggle('Software')" v-else class="pe-2" src="~/assets/img/mobile/chevron-down.png"
                alt="chevron-down" />
            </div>
            <transition name="slide-toggle">
              <ul v-show="isOpen.Software" class="ps-4">

                <li>
                  <div class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2">
                    <nuxt-link @click.native="$emit('close')" to="/resources" class="text-decoration-none w-100">
                      <p class="text-s-24 font-df mb-1"><img class="me-1" src="~/assets/img/menu/book-open.png" alt="book-open.png"> คู่มือการใช้งาน</p>
                    </nuxt-link>
                  </div>
                </li>

                <li>
                  <div class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2">
                    <nuxt-link @click.native="$emit('close')" to="/resources#ReleaseNotes" class="text-decoration-none w-100">
                      <p class="text-s-24 font-df mb-1"><img class="me-1" src="~/assets/img/menu/document-text.png" alt="document-text.png"> Release Notes</p>
                    </nuxt-link>
                  </div>
                </li>
              </ul>
            </transition>
          </li>
          <a href="https://www.sellsuki.co.th/blog" target="_blank" @click="$emit('close')"
            class="text-decoration-none w-100">
            <li>
              <div
                class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2">
                บทความที่น่าสนใจ
              </div>
            </li>
          </a>
          <nuxt-link @click.native="$emit('close')" to="/contact-us" class="text-decoration-none w-100">
            <li>
              <div
                class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2">
                ติดต่อเรา
              </div>
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: {
        Software: false,
        Akita: false,
        Patona: false,
        Oc2plus: false,
        Business: false,
        BusinessSolutions: false,
        LINEAgency: false
      }
    };
  },
  created() {
    // รีเซ็ตทุก menu เป็น false เมื่อ component ถูกสร้าง
    Object.keys(this.isOpen).forEach(key => {
      this.isOpen[key] = false;
    });
  },
  watch: {
    // รีเซ็ตทุก menu เป็น false เมื่อ visible เปลี่ยน
    visible(newVal) {
      if (newVal) {
        Object.keys(this.isOpen).forEach(key => {
          this.isOpen[key] = false;
        });
      }
    }
  },
  methods: {
    toggle(menu) {
      this.isOpen[menu] = !this.isOpen[menu];
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide up/down with max-height */
.slide-toggle-enter-active,
.slide-toggle-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-toggle-enter,
.slide-toggle-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-toggle-enter-to,
.slide-toggle-leave {
  max-height: 500px;
  /* ปรับตามความสูงของเนื้อหา */
  opacity: 1;
}

.text-s-24 {
  line-height: 24px;
}

.text-s-20 {
  line-height: 20px;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  padding: 0px !important;
}

.offcanvas-header {
  padding: 10px 1.5em;
}

.btn-coming-soom {
  background-color: #FFFBEB;
  border: 1px solid #FEF3C7;
  padding: 0px 8px;
  color: #D97706;
  font-size: 18px;
  font-weight: 500;
  border-radius: 16px;
}
</style>
