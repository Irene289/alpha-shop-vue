<template>
    <main id="main-content" class="main-content d-grid">

    <!-- stepper -->
    <Stepper 
      :current-step="currentStep"
      :prev-step="prevStep"
    />

    <!-- form start -->
    <div class="form-panel">
      <div class="container form-container">
        <form id="a-form">
          <div class="form-content">
            <!-- Step 1 寄送地址 -->
            <div class="part" v-show="step === 1">
              <div class="section-title">
                <label for="">寄送地址</label>
              </div>
              <div class="part-form-row">
                <div class="form-row form-row-1">
                  <label>稱謂</label>
                  <div class="select-wrapper">
                    <select name="a-type" id="a-title">
                      <option value="">先生</option>
                      <option value="">小姐</option>
                    </select>
                  </div>
                </div>
                <div class="form-row form-row-2">
                  <label>姓名</label>
                  <input type="text" placeholder="請輸入姓名">
                </div>
                <div class="form-row form-row-3">
                  <label>電話</label>
                  <input type="text" placeholder="請輸入行動電話">
                </div>
                <div class="form-row form-row-4">
                  <label>Email</label>
                  <input type="text" placeholder="請輸入電子郵件">
                </div>
                <div class="form-row form-row-5">
                  <label>縣市</label>
                  <div class="select-wrapper">
                    <select name="a-type" id="a-county" required>
                      <option value="" disabled selected>請選擇縣市</option>
                      <option 
                        :value="city.name" 
                        v-for="city in cities" 
                        :key="city.id"
                      >
                        {{city.name}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-row form-row-6">
                <label>地址</label>
                <input type="text" placeholder="請輸入地址">
              </div>
              </div>
            </div>
            <!-- Step 2 運送方式 -->
            <div class="part part-shipping" v-show="step === 2">
              <div class="section-title">
                <label for="">運送方式</label>
              </div> 
              <div class="d-column" >
                <div 
                  class="d-flex part-shipping__outline"
                  v-for="shipment in shipments"
                  :key="shipment.id"
                >
                  <input 
                    name="shipping-type" type="radio" 
                    value="standard"
                    :checked="shipment.isChecked"
                    @click="selectedShipment(shipment.id)"
                  >
                  <label for="" class="part-shipping__layout">
                    <div class="part-shipping__layout-top">
                      <span class="shipping-description-1">{{shipment.name}}</span>
                      <span class="shipping-description-2">{{shipment.price === 0 ? '免費' : '$' + shipment.price.toLocaleString('en-US')}}</span>
                    </div>
                    <div class="part-shipping__layout-bottom">
                      <span class="shipping-description-3">{{shipment.leadTime}}</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <!-- Step 3 付款資訊 -->
            <div class="part" v-show="step === 3">
              <div class="section-title">
                <label for="">付款資訊</label>
              </div>
              <div class="part-form-row"> 
                <div class="form-row form-row-7"><label for="">持卡人姓名</label><input id="account-name" type="text" placeholder="John Doe"></div>
                <div class="form-row form-row-8"><label for="">卡號</label><input id="account-number" class="w-50" type="text"  placeholder="1111 2222 3333 4444"></div>
                <div class="form-row form-row-9"><label for="">有效期限</label><input id="account-expiration-date" type="text"  placeholder="MM/YY"></div>
                <div class="form-row form-row-10"><label for="">CVC / CCV</label><input id="account-cvc" type="text"  placeholder="123"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- form end -->

    <!-- cart -->
    <Cart 
      :shipping-fee="shippingFee"
    />

    <!-- btn -->
    <BtnControl 
      :step="step"
      :current-router="currentRouter"
      @after-btn-clicked="afterBtnClicked"
    />
    <!-- stepName: {{$route.params.stepName}} -->

  </main>
</template>

<style lang="scss">
  // import scss globally
  @import '../assets/scss/main.scss';
</style>

<script>
import { v4 as uuidv4 } from "uuid"
import Stepper from './../components/Stepper'
import Cart from './../components/Cart'
import BtnControl from './../components/BtnControl'

const dummyData = {
  shipments: [
    {
      id: 1,
      name: '標準運送',
      price: 0,
      priceDescription: '免費',
      leadTime: '約 3~7 個工作天',
      isChecked: true
    },
    {
      id: 2,
      name: 'DHL 貨運',
      price: 500,
      priceDescription: '',
      leadTime: '48 小時內送達',
      isChecked: false
    }
  ]
}

export default {
  name: 'AlphaShop',
  components: {
    Stepper,
    Cart,
    BtnControl,
  },
  props: ['stepName'],
  data() {
    return {
      step: 1,
      currentStep: 1,
      prevStep: 0,
      shipments: [],
      shippingFee: 0,
      cities: [
        {
          id: uuidv4(),
          name: '台北市'
        },
        {
          id: uuidv4(),
          name: '新北市'
        },
        {
          id: uuidv4(),
          name: '基隆市'
        },
        {
          id: uuidv4(),
          name: '桃園市'
        },
        {
          id: uuidv4(),
          name: '新竹市'
        },
        {
          id: uuidv4(),
          name: '新竹縣'
        },
        {
          id: uuidv4(),
          name: '苗栗縣'
        },
        {
          id: uuidv4(),
          name: '台中市'
        },
        {
          id: uuidv4(),
          name: '彰化縣'
        },
        {
          id: uuidv4(),
          name: '南投縣'
        },
        {
          id: uuidv4(),
          name: '雲林縣'
        },
        {
          id: uuidv4(),
          name: '嘉義市'
        },
        {
          id: uuidv4(),
          name: '嘉義縣'
        },
        {
          id: uuidv4(),
          name: '台南市'
        },
        {
          id: uuidv4(),
          name: '高雄市'
        },
        {
          id: uuidv4(),
          name: '屏東縣'
        },
        {
          id: uuidv4(),
          name: '宜蘭縣'
        },
        {
          id: uuidv4(),
          name: '花蓮縣'
        },
        {
          id: uuidv4(),
          name: '台東縣'
        },
        {
          id: uuidv4(),
          name: '澎湖縣'
        },
        {
          id: uuidv4(),
          name: '金門縣'
        },
        {
          id: uuidv4(),
          name: '連江縣'
        }
      ],
      router: [
        {
          id: 1,
          title: 'address'
        },
        {
          id: 2,
          title: 'shipment'
        },
        {
          id: 3,
          title: 'payment'
        },
      ],
      currentRouter: 'address',
    }
  },
  created() {
    this.fetchShipments()
  },
  methods: {
    fetchShipments() {
      this.shipments = dummyData.shipments
    },
    afterBtnClicked(e) {
      const btnClicked = e.target.classList
      if (btnClicked.contains('btn-primary')) {
        if (this.step >= 3) return
        this.step++
        this.currentStep = this.step
        this.prevStep = this.step - 1
      } else if (btnClicked.contains('btn-outline')) {
        this.step--
        this.currentStep = this.step
        this.prevStep = this.step - 1
      }
      this.currentRouter = this.router[this.step - 1].title
    },
    selectedShipment(shipId) {
      let selected = this.shipments.filter(shipment => shipment.id === shipId)
      this.shippingFee = selected[0].price
    }
  },
}
</script>
