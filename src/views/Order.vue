<template>
<div class="order" style="background:#ccc;">
<Loading :active="isLoading"></Loading>
<NavbarView></NavbarView>
<MainImage :title='title'></MainImage>
<div class="mt-5 p-3 d-block d-lg-flex">
  <div class="order-1" style="width:100%">
    <div class="couponPart text-center">
      <div class="coupon">
        <div class="couponImage fs-3">
          <div class="couponTxt">
            summer sale
            <br>セールコード:555
          </div>
        </div>
        <div class="couponNum m-auto d-flex">
          <input class="form-control" style="border-radius:0px" type="text" placeholder="輸入折扣碼:555" v-model="coupon">
          <button class="btn btn-base" type="button" style="color:#fff;border-radius:0px" @click="getCoupon">使用</button>
        </div>
      </div>
    </div>
    <div class="w-50 mt-5 mx-auto" v-if="cart.carts.length>0">
      <h2>
        注文リスト
      </h2>
      <div v-for="(item,id) in cart.carts" :key="id" class="p-2 d-flex justify-content-between" style="border-bottom:1px solid #fff">
          <div class="d-flex">
            <div>
              <img :src="item.product.imageUrl" :alt="item.product.title" style="height:100px;width:100px">
            </div>
            <div class="mx-3">{{item.product.title}}
              <br>NT ${{item.product.price}}/個
            </div>
          </div>
          <div>X{{item.qty}}</div>
      </div>
      <h3 class="mt-5">
        <span class="d-flex justify-content-between">
          <span>合計</span>NT ${{cart.total}}元
        </span>
        <span style="color:#ff0000" v-if="couponNT>0" class="d-flex justify-content-between">
          <span>summer sale</span>-NT ${{cart.total-couponNT}}元
        </span>
        <span v-if="couponNT>0" class="d-flex justify-content-between mb-5">
          <span>合計</span>NT ${{couponNT}}元
        </span>
      </h3>
    </div>
    <div class="w-50 mt-5 mx-auto" v-else>
    </div>
  </div>

  <div class="order-0" style="width:100%">
    <h2 class="w-50 mx-auto p-2" style="border-bottom:1px solid #000">
      ユーザー情報
    </h2>
    <div class="mb-5 row justify-content-center w-100 mx-auto">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="name" class="form-label">名前<span class="px-1" style="color: #f00;">*</span></label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="名前"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage
            name="姓名"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">メールアドレス<span class="px-1" style="color: #f00;">*</span></label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="メールアドレス"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage
            name="email"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label"><span class="px-1" style="color: #f00;">電話番号</span></label>
          <Field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="電話番号"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage
            name="電話"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">アドレス<span class="px-1" style="color: #f00;">*</span></label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="アドレス"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage
            name="地址"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="payment" class="form-label">お支払い方法<span class="px-1" style="color: #f00;">*</span></label>
          <select id="payment" class="form-select w-100" v-model="payMethod">
            <option value="信用卡">カード</option>
            <option value="ATM">ATM</option>
            <option value="超商繳費">コンビニ決済</option>
            <option value="ApplePay">ApplePay</option>
            <option value="LinePay">LinePay</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">コメント</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger"
          :disabled="Object.keys(errors).length > 0 || cart.carts.length === 0"
          >
          注文
        </button>
        </div>
      </Form>
    </div>
  </div>
</div>
<FooterView></FooterView>
</div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
import MainImage from '@/components/MainImage.vue'

export default {
  data () {
    return {
      title: 'お支払い方',
      loadingStatus: {
        loadingItem: ''
      },
      isLoading: false,
      cart: {
        carts: []
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon: '',
      couponNT: '',
      payMethod: 'カード'
    }
  },
  components: {
    NavbarView,
    FooterView,
    MainImage
  },
  mounted () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((response) => {
          this.cart = response.data.data
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((response) => {
        this.$refs.form.resetForm() // vee validate 的方法 form reset
        this.$router.push(`/pay/${this.payMethod}`)
        this.getCart()
        this.$httpMessageState(response, '送出訂單')
        this.isLoading = false
      }).catch((err) => {
        this.$httpMessageState(err.response, '送出訂單')
      })
    },
    getCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon
      }
      this.$http.post(url, { data: coupon })
        .then((response) => {
          this.couponNT = parseInt(response.data.data.final_total)
          this.coupon = ''
        })
        .catch()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/base/all.scss';
.couponImage{
  background: url('../assets/pic/main-page/coupon.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size:50% 100%;
  text-align: center;
  height: 20rem;
  text-align: center;
  color:#fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .couponTxt{
    background: $base-color;
    text-align: center;
    margin: auto;
    width: 30%;
    border-radius: 1rem;
  }
}
.couponNum{
  width: 50%;
}

@include media-breakpoint-down(lg) {
  .couponImage{
    background-size:80% 100%;
  }
  .couponNum{
    width: 80%;
  }
}
</style>
