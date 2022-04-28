<template>
  <div id="step-control" class="stepper-panel">
    <div class="section-title-checkout">
      <h4>結帳</h4>
    </div>
    <div class="container stepper-container justify-content-between">
      <div 
        class="step" 
        v-for="step in steps"
        :key="step.id"
      >
        <div 
          v-if="step.id === currentStep"
          class="circle-container d-inline-block active"
        >
          <!-- step num here -->
        </div>
        <div 
          v-else-if="step.id <= prevStep"
          class="circle-container d-inline-block checked"
        >
        </div>
        <div 
          v-else
          class="circle-container d-inline-block"
        >
          <!-- step num here -->
        </div>
        <span 
          class="connect-line d-inline-block" v-show="step.id !== 1"
        >
        </span>
        <div 
          class="label-container d-inline-block"
          :class="{active: step.id <= currentStep}"
        >
          {{step.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    prevStep: {
      type: Number,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      steps: [
        {
          id: 1,
          title: '寄送地址',
        },
        {
          id: 2,
          title: '運送方式',
        },
        {
          id: 3,
          title: '付款資訊',
        }
      ],
    }
  }
}
</script>
