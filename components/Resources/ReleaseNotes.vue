<template>
  <div class="container p-spacing">
    <p class="text-s-60 font-bd color-1F2937 text-center pb-4">Release Notes</p>
    <div class="border-E5E7EB mt-5">
      <div class="bg-F3F4F6 p-4">
        <div class="row">
          <div class="col-12">
            <form class="d-flex align-items-center">
              <div class="input-group" style="max-width: 350px">
                <span class="input-group-text bg-white border-end-0">
                  <img
                    src="~/assets/img/Resources/magnifying-glass.png"
                    alt="ค้นหา Release Note"
                    style="width: 20px; height: 20px"
                  />
                </span>
                <input
                    v-model.trim="searchTerm"
                    type="text"
                    class="form-control border-start-0 text-s-24 ps-0 py-0"
                    placeholder="ค้นหา Release Note"
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-FFFFFF99 p-4">
        <div v-for="(release, index) in filteredReleases" :key="index">
          <div class="pb-5">
          <div class="row mb-3">
            <div class="col-12 d-flex">
              <div class="w-4"></div>
              <div class="w-96">
                <p class="text-s-24 font-md color-6B7280">
                  เดือนที่มีการอัพเดต
                </p>
              </div>
            </div>
          </div>

          <div
            class="row position-relative"
          >
            <div class="vertical-line p-0"></div>

            <div class="col-12 d-flex">
              <div class="w-4">
                <img
                  class="dropdown-icon"
                  src="~/assets/img/Resources/Dropdown icon.png"
                  alt="Dropdown icon"
                />
              </div>
              <div class="w-96">
                <span class="text-s-24 font-md color-FFFFFF" :class="index % 2 === 0 ? 'text-bg-orange' : 'text-bg-blue'">{{
                  release.month
                }}</span>
                <span class="text-s-20 font-md color-6B7280 mb-0 ms-3">{{
                  release.items.length
                }}</span>
              </div>
            </div>

            <div class="row mt-3">
              <div class="w-4"></div>
              <div class="col-12 d-flex">
                <div class="w-4"></div>
                <div class="w-96">
                  <!-- Header -->
                  <div class="text-row pt-2 pb-4">
                    <div class="text-left text-s-20 font-md color-6B7280 mb-0">
                      Features
                    </div>
                    <div
                      class="text-middle text-s-20 font-md color-6B7280 mb-0"
                    >
                      Version
                    </div>
                    <div class="text-right text-s-20 font-md color-6B7280 mb-0">
                      วิธีใช้
                    </div>
                  </div>

                  <!-- Items -->
                  <div
                    class="text-row pt-2 pb-2"
                    v-for="(item, i) in release.items"
                    :key="i"
                  >
                    <div class="text-left text-s-20 font-md color-1F2937 mb-0">
                      {{ item.feature }}
                    </div>
                    <div
                      class="text-middle text-s-20 font-md color-1F2937 mb-0"
                    >
                      <span class="text-bg-white">{{ item.version }}</span>
                    </div>
                    <div class="text-right text-s-20 font-md color-6B7280 mb-0">
                      <button
                        @click="goToDetail(item)"
                        class="btn btn-orange-no-radius text-s-18"
                        :disabled="!item.enabled"
                      >
                        อ่านรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
  data() {
    return {
      searchTerm: '',
      releasesNote: []
    }
  },
  computed: {
    filteredReleases() {
      if (!this.searchTerm) return this.releasesNote

      const keyword = this.searchTerm.toLowerCase()

      return this.releasesNote
        .map(release => {
          const filteredItems = release.items.filter(item => {
            return (
              item.feature.toLowerCase().includes(keyword) ||
              item.version.toLowerCase().includes(keyword)
            )
          })

          if (filteredItems.length) {
            return {
              ...release,
              items: filteredItems
            }
          }
          return null
        })
        .filter(Boolean)
    }
  },
  mounted() {
    const { default: mockData } = require('~/mockup/releasesData')
    this.releasesNote = mockData
  },
  methods: {
    goToDetail(item) {
      this.$store.commit('releases/setSelectedItem', item)
      this.$router.push(`/releases/${item.version}`)
    }
  }
}
</script>

<style scoped>
.w-4 {
  width: 4%;
}
.w-96 {
  width: 96%;
}
.m-spacing {
  margin-top: 60px;
  margin-bottom: 60px;
}
p {
  margin: 0 !important;
}
a {
  width: 440px;
}
.input-group-text {
  border-radius: 8px;
}
.form-control {
  border-radius: 8px;
}
.text-bg-orange {
  background-color: #ec5e2a;
  padding: 1px 12px;
  border-radius: 16px;
}
.text-bg-blue {
  background-color: #142257;
  padding: 1px 12px;
  border-radius: 16px;
}
.text-bg-white {
  border: 1px solid #e5e7eb;
  background-color: white;
  padding: 1px 12px;
  border-radius: 16px;
}
.bg-F3F4F6 {
  background-color: #f3f4f6;
  border-radius: 16px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.bg-FFFFFF99 {
  backdrop-filter: blur(4px);
  background-color: #ffffff99;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
.border-E5E7EB {
  border: 1px solid #e5e7eb;
  border-radius: 16px;
}
.vertical-line {
  position: absolute;
  left: 21px;
  top: 30px;
  width: 1px;
  height: 90%;
  background: #e5e7eb;
  z-index: 1;
}
.text-row {
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 16px;
}

.text-left {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-middle {
  width: 200px;
  white-space: nowrap;
}

.text-right {
  width: 128px;
  white-space: nowrap;
}
.btn-orange-no-radius {
  background-color: #ec5e2a;
  color: white;
  border: none;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-white {
  background-color: white;
  border-radius: 32px;
  border: none;
  padding: 12px 32px;
  cursor: pointer;
  display: inline-block;
}

.gradient-text {
  font-size: 28px;
  font-family: "Heavent-med", sans-serif;
  background: linear-gradient(85.07deg, #ff6603 4.64%, #ff0101 97.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* fallback */
  display: inline-block;
  line-height: 1;
}

.btn-gradient {
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  box-shadow: 0px 0px 0px 8px #ffa63233, 0px 2px 4px 0px #afad9c40;
}

.btn-gray {
  display: inline-block;
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  font-size: 28px;
  line-height: 100%;
  font-family: "Heavent-med", sans-serif;
  color: #1f2937 !important;
  background: #fff;
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0px 2px 4px 0px #1018280d, 0px 0px 0px 8px #98a2b324;
}

.accordion-item {
  margin-bottom: 0px;
  border: none;
}

.accordion-button:not(.collapsed) {
  color: #1f2937;
  background-color: #ffffff;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236B7280' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-size: 16px 16px; /* ปรับขนาดตามต้องการ */
  width: 16px;
  height: 16px;
}

.accordion-button:focus {
  box-shadow: none;
  outline: none;
}

.accordion-button {
  line-height: 22px;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.accordion-body {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.accordion-button {
  border-bottom: none !important;
  box-shadow: none !important;
}

#heading {
  position: sticky;
  top: 65px;
  z-index: 10;
}

@media (max-width: 767px) {
  .p-spacing {
    padding-bottom: 60px;
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
  .p-spacing {
    padding-bottom: 60px;
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
  .p-spacing {
    padding-bottom: 120px;
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
