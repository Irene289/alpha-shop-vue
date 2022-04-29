<template>
  <div id="btn-control" class="control-panel d-flex justify-content-between">
    <button 
      class="btn btn-outline" 
      @click.stop.prevent="onBtnClicked($event)"
      v-show="step !== 1"
    >
      <span class="btn-left btn-arrow">&#8592;</span
      ><span class="btn-right">上一步</span>
    </button>
    <button 
      class="btn btn-primary" 
      :class="{'btn-primary-only': step === 2}"
      @click.stop.prevent="onBtnClicked($event)"
      v-show="step !== 3"
    >
      <span class="btn-left">下一步</span
      ><span class="btn-right btn-arrow">&#8594;</span>
    </button>
    <button 
      class="btn btn-primary" 
      @click.stop.prevent="onBtnClicked"
      v-show="step === 3"
    >
      <span class="btn-left">確認下單</span
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'BtnControl',
  props: {
    step: {
      type: Number,
      required: true,
    },
    router: {
      type: Array,
      required: true
    }
  },
  methods: {
    onBtnClicked(e) {
      this.$emit('after-btn-clicked', e)
    }
  },
}
</script>
