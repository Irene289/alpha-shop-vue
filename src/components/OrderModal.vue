<template>
  <div class="modal" tabindex="-1" :class="{'d-none': dNone}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">已收到訂單</h3>
        </div>
        <hr>
        <div class="modal-body">
          <p>訂購人：{{orderData.name}} {{orderData.gender}}</p>
          <p>電話：{{orderData.tel}}</p>
          <p>Email：{{orderData.email}}</p>
          <p>地址：{{orderData.city}}{{orderData.address}}</p>
          <p>運送方式：{{orderData.shipmentType}}</p>
          <hr>
          <p>刷卡金額：{{orderData.total}}</p>
          <hr>
          <p>持卡人：{{orderData.cardName}}</p>
          <p>卡號：{{orderData.cardNumber}}</p>
          <p>有效期限：{{orderData.cardValidDate}}</p>
          <p>CVC / CCV：{{orderData.cardCVC}}</p>
        </div>
        <div class="modal-footer">
          <button 
            type="button" 
            class="btn" 
            data-bs-dismiss="modal"
            @click.stop.prevent="handleCloseBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderData: {
      type: Object,
      default: () => ({
        gender: "先生",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        cardName: "",
        cardNumber: "",
        cardValidDate: "",
        cardCVC: "",
        shipmentType: "標準運送",
        total: ""
      })
    },
    dNone: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleCloseBtn() {
      this.$emit('toggle-modal')
    }
  }
}
</script>




