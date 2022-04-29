<template>
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
</template>