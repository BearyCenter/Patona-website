<template>
  <div class="container p-spacing">
    <iframe
      width="100%"
      height="500"
      frameborder="0"
      style="border:0"
      :src="mapUrl"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
    name: "Map",
    data() {
        return {
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.617758031672!2d100.5750999!3d13.801901299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9965e38b7d%3A0x58274f3a60db01fe!2z4LmA4LiL4Lil4Liq4Li44LiB4Li0!5e0!3m2!1sth!2sth!4v1753642125201!5m2!1sth!2sth',
        };
    },
}
</script>

<style scoped>
@media (max-width: 767px) {
  .p-spacing {
    padding-top: 40px;
    padding-bottom: 60px;
  }
}
@media (min-width: 768px) {
  .p-spacing {
    padding-top: 40px;
    padding-bottom: 60px;
  }
}
@media (min-width: 1200px) {
  .p-spacing {
    padding-top: 80px;
    padding-bottom: 120px;
  }
}
</style>