<template>
  <div class="container p-spacing">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="card">
          <div class="card-body">
            <img src="~/assets/img/Contact/Button1.png" alt="Button1.png" />
            <h2 class="text-s-28 font-bd color-1F2937 mt-4">
              ช่องทางการติดต่อ
            </h2>
            <p class="text-s-24 font-df color-6B7280 mb-4">
              เวลาทำการ: วันจันทร์ - ศุกร์ เวลา 9.00 - 18.00 (หยุดวันนักขัตฤกษ์)
            </p>
            <div class="contact-info">
              <div class="info-row">
                <span class="info-label text-s-24 font-bd">ที่อยู่บริษัท</span>
                <span class="info-value text-s-24">
                  Akita Fulfillment Co., Ltd.<br />
                  10/39, 3rd Floor, Ratchadaphisek Road, Chandrakasem,<br />
                  Chatuchak, Bangkok 10900
                </span>
              </div>

              <div class="info-row">
                <span class="info-label text-s-24 font-bd">อีเมล</span>
                <span class="info-value text-s-24">support.akita@sellsuki.com</span>
              </div>

              <div class="info-row">
                <span class="info-label text-s-24 font-bd">เบอร์โทรศัพท์</span>
                <span class="info-value text-s-24">090-096-7526, 02-026-3250</span>
              </div>

              <div class="info-row">
                <span class="info-label text-s-24 font-bd">LINE</span>
                <span class="info-value text-s-24">@patona</span>
              </div>

              <div class="info-row mb-0">
                <span class="info-label text-s-24 font-bd">Facebook</span>
                <span class="info-value text-s-24">Patona - พาโทนะ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mt-4 mt-md-0">
        <div class="card">
          <div class="card-body">
            <img src="~/assets/img/Contact/Button2.png" alt="Button2.png" />
            <h2 class="text-s-28 font-bd color-1F2937 mt-4">พูดคุยกับเรา</h2>
            <p class="text-s-24 font-df color-6B7280 mb-4">
              ติดต่อสอบถามข้อมูล และแจ้งปัญหาการใช้งาน
            </p>
            <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
              <div class="mb-1">
                <label for="name" class="form-label text-s-24 font-md color-1F2937">ชื่อ-นามสกุล</label>
                <input type="text" class="form-control" :class="{
                  'border border-danger': validate && !form.name,
                }" v-model="form.name" id="name" name="name" placeholder="ชื่อ-นามสกุล" />
                <!-- <div v-if="validate">
                  <p v-if="!form.name || form.name.startsWith(' ')"
                    class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                    โปรดระบุชื่อของคุณให้ถูกต้อง
                  </p>
                </div> -->
              </div>

              <div class="row">
                <div class="col-md-6 mb-1">
                  <label for="phone" class="form-label text-s-24 font-md color-1F2937">เบอร์โทรศัพท์</label>
                  <input type="text" class="form-control" placeholder="เบอร์โทรศัพท์" :class="{
                    'border border-danger': validate && !form.phone,
                  }" v-model="form.phone" id="phone" name="phone" />
                  <!-- <div v-if="validate">
                    <p v-if="!form.phone || form.phone.startsWith(' ')"
                      class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                      โปรดระบุเบอร์โทรของคุณให้ถูกต้อง
                    </p>
                  </div> -->
                </div>
                <div class="col-md-6 mb-1">
                  <label for="email" class="form-label text-s-24 font-md color-1F2937">อีเมล</label>
                  <input type="email" class="form-control" placeholder="อีเมล" :class="{
                    'border border-danger': validate && !form.email,
                  }" v-model="form.email" id="email" name="email" />
                  <!-- <div v-if="validate">
                    <p v-if="!form.email || form.email.startsWith(' ')"
                      class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                      โปรดระบุ E-mail ของคุณให้ถูกต้อง
                    </p>
                  </div> -->
                </div>
              </div>

              <div class="mb-1">
                <label for="message" class="form-label text-s-24 font-md color-1F2937">ข้อความ</label>
                <textarea class="form-control" rows="4" placeholder="ข้อความ"
                  :class="{ 'border border-danger': validate && !form.message }" id="message" name="message"
                  v-model="form.message"></textarea>
              </div>

              <button v-if="isFormValid" type="submit" class="submit-button mt-4" data-bs-target="#sussessModal"
                data-bs-toggle="modal" data-bs-dismiss="modal">
                <img src="~/assets/img/Contact/paper-airplane.png" alt="paper-airplane.png" />
                <span class="ms-1 font-md">ส่งข้อความ</span>
              </button>
              <button v-else type="submit" class="submit-button mt-4">
                <img src="~/assets/img/Contact/paper-airplane.png" alt="paper-airplane.png" />
                <span class="ms-1 font-md">ส่งข้อความ</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <SuccessForm />
  </div>
</template>

<script>
import SuccessForm from "~/components/ContactUs/SuccessForm";
export default {
  name: "ContactUs",
  components: {
    SuccessForm,
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      lang: this.$i18n.locale || "th-TH",
      validate: false,
      success: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.name != "" &&
        this.form.phone != "" &&
        this.form.email != "" &&
        this.form.message != ""
      );
    },
  },
  methods: {
    submitForm() {
      if (
        this.form.name.startsWith(" ") ||
        this.form.phone.startsWith(" ") ||
        this.form.email.startsWith(" ") ||
        this.form.message.startsWith(" ")
      ) {
        this.validate = true;
        return false;
      }
      if (!this.isFormValid) {
        this.validate = true;
        return false;
      }
      this.success = true;
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.p-spacing {
  padding-top: 60px;
}
.button img {
  margin-top: -3px;
}
input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

.card {
  border: 1.5px solid #e5e7eb !important;
  border-radius: 16px;
}

.contact-info {
  display: grid;
  gap: 12px 8px;
  color: #1f2937;
}

.info-row {
  display: contents;
}

.info-label {
  font-weight: bold;
  white-space: nowrap;
}

.info-value {
  word-break: break-word;
  overflow-wrap: break-word;
}

.info-label {
  margin-bottom: 12px;
}

.info-value {
  margin-bottom: 12px;
}

.contact-form {
  margin: 0 auto;
}

label {
  display: block;
  margin: 10px 0 5px;
  margin-bottom: 4px !important;
}

.form-control {
  padding: 4px 16px;
  height: 40px;
}

input,
textarea {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

textarea {
  height: 85px !important;
  resize: vertical;
}

.submit-button:hover {
  background-color: #d3541c;
}

@media (max-width: 767px) {
  .contact-info {
    grid-template-columns: 100px 1fr;
  }
  .submit-button {
    background-color: #ec5e2a;
    color: white;
    padding: 4px 20px;
    border: none;
    border-radius: 32px;
    width: 100%;
    font-size: 24px !important;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .card-body {
    padding: 24px;
  }

  .card {
    min-height: 460px;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
}

@media (min-width: 768px) {
  .contact-info {
    grid-template-columns: 114px 1fr;
  }
  .submit-button {
    background-color: #ec5e2a;
    color: white;
    padding: 4px 16px;
    border: none;
    border-radius: 32px;
    font-size: 24px !important;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .card-body {
    padding: 24px;
  }

  .card {
    min-height: 555px;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
}

@media (min-width: 1200px) {
  .contact-info {
    grid-template-columns: 160px 1fr;
  }

  .submit-button {
    background-color: #ec5e2a;
    color: white;
    padding: 4px 20px;
    border: none;
    border-radius: 32px;
    font-size: 28px !important;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .card-body {
    padding: 32px;
  }

  .card {
    min-height: 568px;
  }

  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
}
</style>
