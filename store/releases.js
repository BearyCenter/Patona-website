export const state = () => ({
  releasesNote: [],
  selectedItem: null
})

export const mutations = {
  setReleases(state, data) {
    state.releasesNote = data
  },
  setSelectedItem(state, item) {
    state.selectedItem = item
  }
}

export const getters = {
  getReleases: state => state.releasesNote,
  getSelectedItem: state => state.selectedItem
}