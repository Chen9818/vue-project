<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>オーダー</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>使用者資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">名前</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話番号</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>アドレス</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>オーダーのの詳細</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">オーダー番号</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>注文日</th>
                    <td>{{ $filters.date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>決済日</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $filters.date(tempOrder.paid_date) }}
                      </span>
                      <span v-else>日時不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>決済狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success"
                        >支払い済み</strong
                      >
                      <span v-else class="text-muted">未払い</span>
                    </td>
                  </tr>
                  <tr>
                    <th>合計金額</th>
                    <td>
                      {{ $filters.currency(tempOrder.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">お支払い済</span>
                    <span v-else>未払い</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            キャンセル
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-paid', tempOrder)"
          >
            お支払い狀態
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
    order: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      status: {},
      modal: '',
      tempOrder: {},
      isPaid: false
    }
  },
  emits: ['update-paid'],
  watch: {
    order () {
      this.tempOrder = this.order
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
