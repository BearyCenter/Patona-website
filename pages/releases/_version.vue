<template>
  <div>
    
    <div class="page-wrapper">
      <div class="container">
        <div class="back-wrapper">
          <div class="back-link">
            <p>
              <nuxt-link to="/resources#ReleaseNotes" class="font-md color-1F2937" style="font-size: 24px;line-height: 24px;">
                <img class="me-1" src="~assets/img/Resources/arrow-left.svg" alt="arrow-left.svg"> กลับไปที่หน้าคู่มือการใช้งาน
              </nuxt-link>
            </p>
          </div>
          <div class="d-none d-md-block">
            <p class="text-s-24 font-bd color-1F2937 mb-1">Release Notes</p>
            <div v-for="item in sortedReleasesDesc" :key="item.id" class="releases">
              <nuxt-link :to="`/releases/${item.version}`" class="text-s-24 font-df color-1F2937 mb-0" :class="item.version === version ? 'text-version-active' : ''">
                v{{ item.version }}
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-if="item" class="card">
          <div class="card-body">
            <p class="text-s-60 font-bd color-1F2937 mb-0 pb-0 pb-xl-3">
              v{{ version }}
            </p>
            <hr class="mb-4" />
            <!-- แสดง Markdown เป็น HTML -->
            <div v-html="renderedDescription"></div>
          </div>
        </div>

        <div v-else class="card text-center">
          <p>ไม่พบรายละเอียด release นี้</p>
        </div>

        <div class="text-center mt-md-5 mt-4 mb-md-0 mb-4">
          <nuxt-link to="/resources#ReleaseNotes" class="text-s-28 btn-no-radius font-md color-1F2937">
            กลับไปที่หน้าคู่มือการใช้งาน
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from '~/components/Preloader';
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'version',
  layout: 'Layout',
  components: {
    Preloader
  },
  async asyncData({ params, store }) {
    const version = params.version
    let releasesNote = store.getters['releases/getReleases']
    if (!releasesNote || releasesNote.length === 0) {
      const { default: mockData } = require('~/mockup/releasesData')
      releasesNote = mockData
      store.commit('releases/setReleases', releasesNote)
    }

    const selectedItem = releasesNote
      .flatMap(r => r.items)
      .find(i => i.version === version)

    return {
      version,
      item: selectedItem || null,
      releasesNoteAll: releasesNote
    }
  },
  computed: {
    renderedDescription() {
      if (!this.item || !this.item.description) return ''
      const cleaned = this.cleanApiContent(this.item.description)
      return md.render(cleaned)
    },
    sortedReleases() {
      const allItems = this.releasesNoteAll.flatMap(r => r.items)
      return allItems.slice().sort((a, b) => {
        return a.version.localeCompare(b.version, undefined, { numeric: true })
      })
    },
    sortedReleasesDesc() {
      const allItems = this.releasesNoteAll.flatMap(r => r.items)
      return allItems.slice().sort((a, b) => {
        return b.version.localeCompare(a.version, undefined, { numeric: true })
      })
    }
  },
  methods: {
    dateFormat(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('th-TH-u-ca-gregory', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    },
    cleanApiContent(str) {
      if (!str) return ''
      return str
        .replace(/<p>\s*\\+\s*<\/p>/g, '') // ตัด <p>\</p>
        .replace(/\\\\n/g, '\n')           // case \\n
        .replace(/\\n/g, '\n')             // case \n
        .replace(/\\$/g, '')               // case \ ท้ายบรรทัด
        .replace(/\\/g, '')                // เคลียร์ backslash เดี่ยวๆ ที่เหลือ
    }
  }
}
</script>

<style scoped>
.page-wrapper {
  background-color: #F3F4F6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E5E7EB !important;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
}

.btn-no-radius {
  background-color: white;
  border: 1px solid #E5E7EB;
  color: #1F2937;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.text-bg-white {
  border: 1px solid #e5e7eb;
  background-color: white;
  padding: 1px 16px;
  border-radius: 16px;
}

.text-version-active {
  color: #EC5E2A !important;
  font-family: "Heavent-med" !important;
}

::v-deep hr {
  color: #E5E7EB;
}

::v-deep a:hover {
  color: #ec5e2ab9 !important;
  
}

::v-deep h1 {
  font-family: 'Heavent-body';
}

::v-deep h3 {
  font-family: 'Heavent-body';
}

@media (max-width: 767px) {
  .card {
    margin-top: 0px !important;
  }

  .card-body {
    padding: 24px;
  }

  .card {
    max-width: 100%;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .back-wrapper {
    position: relative;
  }

  .back-link {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .page-wrapper {
    padding: 64px 8px;
  }

  ::v-deep p {
    font-size: 20px;
    line-height: 20px;
  }

  ::v-deep h1 {
    font-family: 'Heavent-body';
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep h2 {
    font-family: 'Heavent-body';
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep h3 {
    font-family: 'Heavent-body';
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep li {
    font-size: 20px;
    line-height: 20px;
  }
}

@media (min-width: 768px) {
  .releases {
    line-height: 1.3;
  }
  .card {
    margin-top: 100px !important;
  }

  .card-body {
    padding: 24px;
  }

  .card {
    max-width: 488px;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .back-wrapper {
    position: absolute;
  }

  .page-wrapper {
    padding: 64px 0px;
  }

  .back-link {
    margin-top: 36px;
    margin-bottom: 38px;
  }

  ::v-deep p {
    font-size: 20px;
    line-height: 20px;
  }

  ::v-deep h1 {
    font-family: 'Heavent-body';
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep h2 {
    font-family: 'Heavent-body';
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep h3 {
    font-family: 'Heavent-body';
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep li {
    font-size: 20px;
    line-height: 20px;
  }
}

@media (min-width: 1200px) {
  .releases {
    line-height: 1.5;
  }
  .card {
    margin-top: 120px !important;
  }

  .card-body {
    padding: 40px;
  }

  .card {
    max-width: 875px;
  }

  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
  }

  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .text-s-60 {
    font-size: 60px !important;
    line-height: 60px !important;
  }

  .back-wrapper {
    position: absolute;
  }

  .page-wrapper {
    padding: 80px 20px;
  }

  .back-link {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  ::v-deep p {
    font-size: 24px;
    line-height: 24px;
  }

  ::v-deep h1 {
    font-family: 'Heavent-body';
    font-size: 36px;
    line-height: 36px;
  }

  ::v-deep h2 {
    font-family: 'Heavent-body';
    font-size: 36px;
    line-height: 36px;
  }

  ::v-deep h3 {
    font-family: 'Heavent-body';
    font-size: 36px;
    line-height: 36px;
  }

  ::v-deep li {
    font-size: 24px;
    line-height: 24px;
  }
}

@media (min-width: 1580px) {
  .card {
    max-width: 1028px;
  }
}
</style>
