<template>
  <div class="container p-spacing">
    <div class="row p-0 mb-5">
      <div class="col-12 text-s-24 color-6B7280 d-xl-block d-lg-none d-md-none d-none">
        <div class="card-patona" style="height: 268px;">
          <img
            src="~/assets/img/Resources/Character-1.png"
            alt="Character-1.png"
            style="position: absolute; top: -80px; left: 15px;z-index: 0;"
          >
          <img
            src="~/assets/img/Resources/Character-2.png"
            alt="Character-2.png"
            style="position: absolute; top: -108px; right: 270px;z-index: 0;"
          >
          <div class="card-body p-0">
            <img
              class="img-patona"
              src="~/assets/img/Resources/Character-Patona.png"
              alt="Character-Patona.png"
            />
            <div class="row color-1F2937">
              <div class="col-12">
                <p class="text-s-52 font-bd mb-0 mt-2 index-1">เริ่มใช้ฟรี</p>
                <p class="text-s-28 mb-0 index-1">
                  ทดลองใช้งาน Patona ระบบจัดการออเดอร์ และสต๊อก ฟรี!
                </p>
                <a
                  href="https://accounts.sellsuki.com/registration?error=&flow=1b29a11b-63da-4ac0-a0c2-7fe2b419f505&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona"
                  target="_blank"
                  class="button-color mt-3 index-1"
                  ><span>สมัครใช้งาน ฟรี!</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 text-s-24 color-6B7280 d-xl-none d-lg-block d-md-block d-none">
        <div class="card-patona" style="height: 143px;">
          <img
            src="~/assets/img/Resources/Character-1-tablet.png"
            alt="Character-1.png"
            style="position: absolute; top: -12px; left: 30px;z-index: 0;"
          >
          <img
            src="~/assets/img/Resources/Character-2-tablet.png"
            alt="Character-2.png"
            style="position: absolute; top: -8px; right: 150px;z-index: 0;"
          >
          <div class="card-body p-0">
            <img
              class="img-patona"
              style="height: 186px;width: 272px;"
              src="~/assets/img/Resources/Character-Patona.png"
              alt="Character-Patona.png"
            />
            <div class="row color-1F2937">
              <div class="col-12">
                <p class="text-s-28 font-bd mb-0 index-1">เริ่มใช้ฟรี</p>
                <p class="text-s-20 mb-0 index-1">
                  ทดลองใช้งาน Patona ระบบจัดการออเดอร์ และสต๊อก ฟรี!
                </p>
                <a
                  href="https://accounts.sellsuki.com/registration?error=&flow=1b29a11b-63da-4ac0-a0c2-7fe2b419f505&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona"
                  target="_blank"
                  class="button-color mt-2 index-1"
                  ><span>สมัครใช้งาน ฟรี!</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 color-6B7280 d-md-none d-block pd-custom-none">
        <div class="card-patona" style="height: 179px">
          <div class="card-body p-0">
            <div class="row color-1F2937">
              <div class="col-12 mb-2">
                <img
                  width="214px"
                  height="200px"
                  src="~/assets/img/Resources/Character-Patona-m.png"
                  alt="Character-Patona-m.png"
                  style="position: absolute;bottom: 0;right: 0"
                />
                <div class="d-flex">
                  <span class="text-s-28 font-bd mb-1">เริ่มใช้ฟรี</span>
                </div>
                <p class="text-s-20 mb-0">
                  ทดลองใช้งาน Patona<br/>
                  ระบบจัดการออเดอร์<br/>
                  และสต๊อก ฟรี!
                </p>
              </div>
              <div class="col-5 text-center d-inline">
                <a
                  href="https://accounts.sellsuki.com/registration?error=&flow=1b29a11b-63da-4ac0-a0c2-7fe2b419f505&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona"
                  target="_blank"
                  class="button-color ps-2 pe-2 text-s-20"
                  ><span>สมัครใช้งาน ฟรี!</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-s-52 {
  line-height: 52px;
}

.text-s-44 {
  line-height: 44px;
}

.text-s-24 {
  line-height: 24px;
}

.text-s-36 {
  line-height: 36px;
}

.text-s-20 {
  line-height: 20px;
}
a {
  color: #ffffff;
}
a:hover {
  color: #ffffff !important;
}
.index-1 {
  z-index: 1;
  position: relative;
}
.button-color {
  color: #ffffff !important;
  background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
  line-height: 28px;
  padding: 8px 20px;
  border-radius: 32px;
  border: none;
  display: inline-block;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(34, 197, 94, 0.08);
  cursor: pointer;
}

.button-color:hover,
.button-color:focus {
  background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
  color: #fff !important;
  text-decoration: none;
  outline: none;
}

.text-hl {
  background-color: #fcd34d;
  border-radius: 16px;
  padding: 4px 10px 3px 10px;
  position: absolute;
  margin-top: 8px;
  margin-left: 10px;
}

.card-patona {
  position: relative;
  background: linear-gradient(
    87.76deg,
    rgba(50, 169, 255, 0.25) -2.52%,
    rgba(236, 94, 42, 0.25) 64.06%
  ) !important;
}

@media only screen and (max-width: 430px) {
  .text-s-44 {
    font-size: 36px !important;
  }
  .button-color {
    font-size: 16px !important;
    line-height: 16px !important;
    padding: 6px 8px !important;
  }
  .card-patona {
    padding: 24px 16px !important;
  }
  .pd-custom-none {
    padding: 0 !important;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .p-spacing {
    padding-top: 50px;
  }
  .card-patona {
    border-radius: 16px;
    padding: 24px 24px;
  }
  .button-color {
    font-size: 20px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .card-patona {
    border-radius: 16px;
    padding: 24px 24px;
  }
  .img-patona {
    position: absolute;
    right: 68px;
    bottom: 0;
    margin-top: 0 !important;
  }
  .button-color {
    font-size: 24px !important;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .p-spacing {
    padding-top: 50px;
  }
  .card-patona {
    border-radius: 16px;
    padding: 24px 24px;
  }
  .img-patona {
    position: absolute;
    right: 68px;
    bottom: 0;
    margin-top: 0 !important;
  }
  .button-color {
    font-size: 24px !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .p-spacing {
    padding-top: 50px;
  }
  .card-patona {
    border-radius: 16px;
    padding: 24px;
  }
  .img-patona {
    position: absolute;
    right: 68px;
    bottom: 0;
    margin-top: 0 !important;
  }
  .button-color {
    font-size: 24px !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .p-spacing {
    padding-top: 120px;
  }
  .card-patona {
    border-radius: 16px;
    padding: 60px 50px;
    position: relative; /* เพิ่มบรรทัดนี้ */
  }
  .img-patona {
    position: absolute;
    right: 142px;
    bottom: 0;
    margin-top: 0 !important;
  }
  .button-color {
    font-size: 28px !important;
  }
}

@media screen and (max-width: 1450px) and (min-width: 1400px) {
  .img-patona {
    margin-top: 20px;
    position: absolute;
  }
}
</style>
