<template>
    <section class="banner-section position-relative overflow-hidden">
        <div class="container">
            <div class="row align-items-center bg-height flex-column flex-md-row">
                <!-- Left Content -->
                <div class="col-md-6 col-12 text-center text-md-start z-1 p-0">
                    <div class="px-0">
                        <h1 class="font-bd banner-title color-1F2937 mb-0">
                            พาโตนะ ระบบจัดการร้านค้า
                        </h1>
                        <p class="font-md banner-subtitle mt-3 mb-3 mt-xl-4 mb-xl-4 color-1F2937">
                            ระบบหลังบ้านที่ใช้งานง่ายและมีประสิทธิภาพ<br class="d-none d-xl-block" />
                            คนเดียวก็เอาอยู่!
                        </p>

                        <div class="d-flex flex-wrap justify-content-center justify-content-md-start mt-4 mb-100">
                            <a target="_blank" href="https://accounts.sellsuki.com/registration?error=&flow=e592685a-d546-4a00-bce6-6db992bc978c&return_to=https%3A%2F%2Fsellercenter.patona.online%2F&theme=patona"
                                class="btn-gradient banner-btn mt-0 mt-xl-3">
                                <img src="~/assets/img/home/Packages/cursor-arrow-rays.png" alt="cursor-arrow-rays.png"
                                    class="icon me-2" />
                                <span class="text">เริ่มใช้งานฟรี</span>
                            </a>
                        </div>

                        <!-- Partner Logos -->
                        <div class="partner-logos">
                            <p class="partner-title">พาร์ทเนอร์ร่วมกับ</p>
                            <div
                                class="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center">
                                <img class="me-4 mb-3 margin-mobile" src="~/assets/img/home/thpost.png" alt="thpost" />
                                <img class="me-4 mb-3 margin-mobile" src="~/assets/img/home/kex.png" alt="kex" />
                                <img class="me-4 mb-3 margin-mobile" src="~/assets/img/home/DHL_Logo 1.png" alt="DHL" />
                                <img class="me-4 mb-3 margin-mobile" src="~/assets/img/home/jt.png" alt="jt" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Video -->
                <div class="col-md-6 col-12 text-center z-0 mt-4 mt-md-0">
                    <video class="banner-video" autoplay loop muted playsinline>
                        <source src="/animations/Home_page_Patona_Animate.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* === Main Background === */
.banner-section {
    background-image: url('~@/assets/img/home/Hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 0px;
}

@media screen and (max-width: 400px) {
    .bg-height {
        padding: 32px 24px !important;
        min-height: 632px;
    }
    .banner-section {
        background-size: 120% !important;
        margin-top: 64px;
    }
    .margin-mobile {
        margin-right: 12px !important;
        margin-left: 0px !important;
        height: 14px;
    }
}

/* === Background for mobile === */
@media (max-width: 768px) {
    .banner-section {
        background-image: url('~@/assets/img/home/Hero-m.png');
        background-size: 100%;
        margin-top: 64px;
    }
}

@media (max-width: 1200px) {
    .banner-section {
        margin-top: 64px;
    }
}

/* === Height control === */
.bg-height {
    padding: 64px 24px;
    min-height: 560px;
}

@media (min-width: 400px) {
    .bg-height {
        min-height: 605px;
    }
}

@media (min-width: 768px) {
    .bg-height {
        margin-top: 0px;
        padding: 0;
        min-height: 400px;
    }
}

@media (min-width: 1200px) {
    .bg-height {
        margin-top: 0px;
        padding: 0;
        min-height: 962px;
    }
}

@media (min-width: 1920px) {
    .bg-height {
        padding: 0;
        min-height: 962px;
    }
}

/* === Typography responsive === */
.banner-title {
    font-size: 36px;
    line-height: 1;
}

.banner-subtitle {
    font-size: 18px;
    line-height: 1;
}

.partner-title {
    font-size: 16px;
    line-height: 1;
}

.banner-btn {
    font-size: 20px;
    padding: 0.5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 400px) {
    .banner-title {
        font-size: 44px;
        line-height: 1;
    }
    .banner-subtitle {
        font-size: 20px;
        line-height: 1;
    }
}

@media (min-width: 768px) {
    .banner-title {
        font-size: 44px;
        line-height: 1;
    }

    .banner-subtitle {
        font-size: 20px;
        line-height: 1;
    }

    .partner-title {
        font-size: 16px;
        line-height: 1;
    }

    .banner-btn {
        font-size: 24px;
        padding: 0.5rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (min-width: 1200px) {
    .banner-title {
        font-size: 72px;
        line-height: 1;
    }

    .banner-subtitle {
        font-size: 36px;
        line-height: 1;
    }

    .partner-title {
        font-size: 28px;
        line-height: 1;
    }

    .banner-btn {
        font-size: 28px;
        padding: 0.5rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* === Video === */
.banner-video {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
}

@media (max-width: 767px) {
    .banner-video {
        width: 100%;
        max-width: 100%;
    }
}

@media (min-width: 768px) {
    .banner-video {
        width: 110%;
        max-width: 110%;
        margin-left: -80px;
    }
}

@media (min-width: 1200px) {
    .banner-video {
        margin-left: -115px;
        width: 125%;
        max-width: 125%;
    }
}

@media (min-width: 1920px) {
    .banner-video {
        margin-left: -115px;
        width: 125%;
        max-width: 125%;
    }
}

/* === Partner Logos positioning === */
.mb-100 {
    margin-bottom: 20px;
}

.partner-logos {
    text-align: left;
    position: absolute;
    bottom: 20px;
}

.partner-logos img {
    max-height: 16px;
}

@media (min-width: 768px) {
    .mb-100 {
        margin-bottom: 60px;
    }
    .partner-logos {
        text-align: left;
        position: absolute;
        bottom: 20px;
    }
}

@media (min-width: 1200px) {
    .mb-100 {
        margin-bottom: 160px;
    }

    .partner-logos {
        text-align: left;
        position: absolute;
        bottom: 50px;
    }

    .partner-logos img {
        max-height: 28px;
    }
}
</style>
