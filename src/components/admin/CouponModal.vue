<template>
<div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          <span v-if="isNew">クーポンを増やす</span>
          <span v-else>クーポン編輯</span>
        </h5>
        <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="title">タイトル</label>
          <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
            placeholder="クーポンのタイトル">
        </div>
        <div class="mb-3">
          <label for="coupon_code">クーポンコード</label>
          <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
            placeholder="クーポンコード">
        </div>
        <div class="mb-3">
          <label for="due_date">締切</label>
          <input type="date" class="form-control" id="due_date"
            v-model="due_date">
        </div>
        <div class="mb-3">
          <label for="price">割引</label>
          <input type="number" class="form-control" id="price"
          min="0" v-model.number="tempCoupon.percent" placeholder="割引を入力">
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox"
              :true-value="1"
              :false-value="0"
              v-model="tempCoupon.is_enabled" id="is_enabled">
            <label class="form-check-label" for="is_enabled">
              起用
            </label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"
          @click="$emit('update-coupon', tempCoupon)"> {{ isNew ? 'クーポン増やす' : 'クーポン更新' }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tempCoupon: {},
      due_date: ''
    }
  },
  emits: ['update-coupon'],
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = dateAndTime
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
