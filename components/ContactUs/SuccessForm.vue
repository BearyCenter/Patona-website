<template>
    <div>
        <div class="modal fade" id="sussessModal" aria-hidden="true" aria-labelledby="sussessModalLabel2" tabindex="-1">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div class="row">
                            <div class="col-12">
                                <img class="img-fluid" src="~/assets/img/Character-Patona.png" />
                            </div>
                            <div class="col-12 color-1F2937">
                                <p class="text-s-60 font-bd mt-3">ส่งฟอร์มเรียบร้อย!</p>
                                <p class="text-s-28 font-df d-none d-lg-block">เราได้รับข้อมูลของคุณแล้ว ทีมงานของเราจะรีบทำการติดต่อกลับไป<br/> เพื่อนัดหมายการให้คำปรึกษากับคุณ!</p>
                                <p class="text-s-28 font-df d-block d-lg-none">เราได้รับข้อมูลของคุณแล้ว<br/> ทีมงานของเราจะรีบทำการติดต่อกลับไป<br/> เพื่อนัดหมายการให้คำปรึกษากับคุณ!</p>
                                <button class="btn-patona mt-4 text-s-24" data-bs-dismiss="modal" aria-label="Close">ตกลง</button>
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
    methods: {
    }
}
</script>

<style scoped>
    p {
        margin-bottom:0 !important;
    }
    .text-s-28 {
        line-height: 28px;
    }
    .btn-patona {
        width: 184px !important;
        height: 40px !important;
        color: #FFFFFF !important;
        background-color: #EC5E2A !important;
        border: 1px solid #EC5E2A !important;
        box-sizing: border-box !important;
        border-radius: 20px !important;
    }
  /* ----------------------- model ----------------- */
  .header-model {
    font-weight: 700;
    line-height: 72px;
    text-align: center;
  }
  .modal-footer {
    border-top: 0px;
  }
  .modal-content{
    border-radius: 16px;
  }
  .modal-header {
    border-bottom: 0px;
  }
  .modal-body{
    padding-top: 50px;
    padding-bottom: 100px;
  }
  .modal-custom-size {
    border-radius: 16px;
    background-color: #F0FDF4;
  }
  .btn-close{
    margin-right: 15px;
    margin-top: 10px;
  }

  .modal-dialog {
        max-width: 750px;
    }
</style>
