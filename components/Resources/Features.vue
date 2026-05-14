<template>
    <div class="container p-spacing">
        <form class="d-flex align-items-center" @submit.prevent="onSearch">
            <div class="input-group" style="max-width: 350px;">
            <span class="input-group-text bg-white border-end-0">
                <img src="~/assets/img/Resources/magnifying-glass.png" alt="ค้นหา" style="width: 20px; height: 20px;" />
            </span>
            <input
                type="text"
                v-model="searchText"
                class="form-control border-start-0 text-s-24 ps-0 py-0"
                placeholder="ค้นหา"
            />
            </div>
            <button type="submit" class="btn-search ms-3 text-s-24 color-FFFFFF">ค้นหา</button>
        </form>
        <div class="row mt-5">
            <div class="col-12 p-0">
                <div class="tab-container ps-3 pe-3">
                    <div class="tab-wrap-main">
                    <ul>
                        <li
                        v-for="(tab, index) in tabs"
                        :key="index"
                        class="tab-wrap cursor-pointer"
                        :class="{ active: activeTab === tab }"
                        @click="activeTab = tab"
                        >
                        <div class="d-flex flex-column align-items-center">
                            <p class="text-s-28 font-md color-1F2937 mt-3">{{ tab }}</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-start">
          <template v-if="filteredCards.length > 0">
            <div
              class="col-md-4 col-6 mt-5"
              v-for="(card, idx) in filteredCards"
              :key="idx"
            >
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <img :src="card.icon" :alt="card.title" />
                    <p class="text-s-28 font-bd color-1F2937 ms-2 mt-3 ms-xl-3 mt-xl-3">{{ card.title }}</p>
                  </div>
                  <p class="text-s-24 font-df color-6B7280 mt-xl-2 mt-0 mb-0">{{ card.desc }}</p>
                </div>
              </div>
            </div>
          </template>
          <div v-else class="col-12 no-data">
            <img src="~/assets/img/Resources/Patona_Icon_5 1.png" alt="Patona_Icon_5 1.png">
            <p class="text-s-28 font-df color-1F2937 mt-3">ไม่มีข้อมูล</p>
          </div>
          <div class="col-12 text-center mt-4 mt-xl-5" v-if="hasMore">
            <button class="btn btn-outline-orange font-md mt-3" @click="showCount += 9">
              โหลดเพิ่มเติม
            </button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        'ทั้งหมด',
        'ระบบ OMS',
        'ระบบ POS',
        'ระบบจัดการสต็อก',
        'ระบบจัดการลูกค้า',
        'ระบบจัดการพัสดุ',
      ],
      activeTab: 'ทั้งหมด',
      searchText: '',
      cards: [
        {
          category: 'ระบบ OMS',
          icon: require('~/assets/img/Resources/clipboard-document-list.png'),
          title: 'รายการขาย',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบ POS',
          icon: require('~/assets/img/Resources/clipboard-document-check.png'),
          title: 'การจัดการสินค้า',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบจัดการสต็อก',
          icon: require('~/assets/img/Resources/identification.png'),
          title: 'รายชื่อลูกค้า',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบ OMS',
          icon: require('~/assets/img/Resources/clipboard-document-list.png'),
          title: 'Feature 4',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบ POS',
          icon: require('~/assets/img/Resources/clipboard-document-check.png'),
          title: 'Feature 5',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบจัดการสต็อก',
          icon: require('~/assets/img/Resources/identification.png'),
          title: 'Feature 6',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบ OMS',
          icon: require('~/assets/img/Resources/clipboard-document-list.png'),
          title: 'Feature 7',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบ POS',
          icon: require('~/assets/img/Resources/clipboard-document-check.png'),
          title: 'Feature 8',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบจัดการสต็อก',
          icon: require('~/assets/img/Resources/identification.png'),
          title: 'Feature 9',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบ POS',
          icon: require('~/assets/img/Resources/clipboard-document-check.png'),
          title: 'Feature 10',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          category: 'ระบบจัดการสต็อก',
          icon: require('~/assets/img/Resources/identification.png'),
          title: 'Feature 11',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
      ],
      showCount: 9
    }
  },
  computed: {
    filteredCards() {
      let filtered = this.cards;
      if (this.activeTab !== 'ทั้งหมด') {
        filtered = filtered.filter(card => card.category === this.activeTab);
      }
      if (this.searchText.trim()) {
        const keyword = this.searchText.trim().toLowerCase();
        filtered = filtered.filter(card =>
          card.title.toLowerCase().includes(keyword) ||
          card.desc.toLowerCase().includes(keyword)
        );
      }
      return filtered.slice(0, this.showCount);
    },
    hasMore() {
      let filtered = this.cards;
      if (this.activeTab !== 'ทั้งหมด') {
        filtered = filtered.filter(card => card.category === this.activeTab);
      }
      if (this.searchText.trim()) {
        const keyword = this.searchText.trim().toLowerCase();
        filtered = filtered.filter(card =>
          card.title.toLowerCase().includes(keyword) ||
          card.desc.toLowerCase().includes(keyword)
        );
      }
      return filtered.length > this.showCount;
    }
  },
  methods: {
    onSearch() {
      // ฟังก์ชันนี้ไว้สำหรับ submit form 
    }
  }
}
</script>

<style scoped>
.p-spacing {
  padding-top: 120px;
}
.input-group-text {
  border-radius: 8px;
}
.form-control {
  border-radius: 8px;
}
.card-list-wrapper {
  /* min-height: 700px; */
}

.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  color: #6B7280;
}
.btn-outline-orange {
    border: 1px solid #EC5E2A;
    color: #EC5E2A;
    background-color: transparent;
    border-radius: 8px;
    padding: 0px 20px;
    font-size: 28px;
}
.card {
    border: 1.5px solid #E5E7EB !important;
    border-radius: 16px;
    background-color: #FFFFFF;
}
.card:hover {
    box-shadow: 0px 0px 0px 0px #11182717,0px 1px 2px 0px #11182717,0px 4px 4px 0px #11182714,0px 10px 6px 0px #1118270A,0px 18px 7px 0px #11182700,0px 27px 8px 0px #11182700;
}
.input-group-text {
  padding: 0.375rem 0.75rem;
  display: flex;
  align-items: center;
  background: #fff;
  border-right: none;
}
.form-control {
  border-left: none;
}

.form-control::placeholder {
  color: #9CA3AF;
}
.btn-search {
    background-color: #EC5E2A !important;
    border: none !important;
    border-radius: 8px !important;
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 38px;
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
  height: 8px;
  width: 100%;
  background-color: #ddd; /* สีเทา */
  transition: background-color 0.3s, width 0.3s;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 8px;
}

.tab-wrap.active::after {
  background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
  opacity: 0.5;
}

.tab-wrap-main ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 16px;
}

@media (max-width: 767px) {
  .card img {
    width: 32px;
    height: 32px;
  }
  .card-body {
    padding: 16px;
    height: 100%;
  }
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
  .card img {
    width: 32px;
    height: 32px;
  }
  .card-body {
    padding: 16px;
    height: 100%;
  }
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
  .card img {
    width: 48px;
    height: 48px;
  }
  .card-body {
    padding: 32px;
    height: 100%;
  }
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