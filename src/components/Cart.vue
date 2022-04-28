<template>
  <div class="cart-panel">
    <div class="container cart-container" id="cart-container">
      <div class="cart-title">購物籃</div>
      <div class="cart-products d-flex flex-column">
        <div 
          class="cart-product d-flex"
          v-for="item in items"
          :key="item.id"
        >
          <div class="product-image">
            <img :src="item.image" :alt="item.name">
          </div>
          <div class="product-info d-flex flex-column">
            <div class="product-name-price d-flex">
              <p class="product-name">{{item.name}}</p>
              <p class="product-price">${{item.subTotal.toLocaleString('en-US')}}</p>
            </div>
            <div class="product-counter">
              <span 
                class="minus product-count-btn"
                @click.stop.prevent="productCountBtnClicked(item.id)"
              >
                -
              </span>
              <span class="product-count">{{item.count}}</span>
              <span 
                class="plus product-count-btn"
                @click.stop.prevent="productCountBtnClicked(item.id)"
              >
                +
              </span>
            </div>
          </div>
        </div>

      </div>
      <div class="cart-total-check d-flex flex-column">
        <div class="cart-shipping">
          <span class="cart-shipping-title">運費</span>
          <span class="cart-shipping-price">{{addShipping()}}</span>
        </div>
        <div class="cart-total">
          <span class="cart-total-title">小計</span>
          <span class="cart-total-price">${{calculateTotal}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData={
  items: [
    {
      id: 1,
      name: '破壞補丁修身牛仔褲',
      image: 'https://upload.cc/i1/2022/03/25/n5MSYs.png',
      price: 3999,
      subTotal: 3999,
      count: 1,
    },
    {
      id: 2,
      name: '刷色直筒牛仔褲',
      image: 'https://upload.cc/i1/2022/03/25/tV6EMq.png',
      price: 1299,
      subTotal: 1299,
      count: 1,
    },
  ]
}

export default {
  name: 'Cart',
  props: {
    shippingFee: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      items: {
        id: -1,
        count: 1,
        subTotal: 0
      },
      shipping: 0,
      total: 0
    }
  },
  created() {
    this.fetchItem()
  },
  methods: {
    fetchItem() {
      this.items = dummyData.items
    },
    productCountBtnClicked(id) {
      const target = event.target
      const itemId = this.items[id - 1]

      if (target.classList.contains('plus')) {
        itemId.count++
      } else if (target.classList.contains('minus') && itemId.count>0) {
        itemId.count--
      } 
      itemId.subTotal = itemId.count * itemId.price
      
    },
    addShipping() {
      if (this.shippingFee === 0) {
        return this.shipping = '免費'
      } else {
        return this.shipping = '$' + this.shippingFee.toLocaleString('en-US')
      }
    }
  },
  computed: {
    calculateTotal() {
      let arr = [this.shippingFee]
      for (let item of this.items) {
        arr.push(item.subTotal)
      }
      
      const total = arr.reduce((prevVal,currentVal) => prevVal + currentVal, 0)
      return total.toLocaleString('en-US')
    }
  }
}
</script>