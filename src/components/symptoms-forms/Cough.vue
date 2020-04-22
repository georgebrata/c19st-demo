<template>
  <el-form class="cough-form">
    <p>Ai avut reprize de tuse mai lungi de 5 minute in ultimele 24h?</p>

    <el-radio v-model="hasCough" :label="true">Da</el-radio>
    <el-radio v-model="hasCough" :label="false">Nu</el-radio>
    <div v-if="hasCough">
      <p>Cate astfel de reprize ai avut in ultimele 24h?</p>
      <el-input-number v-model="coughCount" :min="1" :max="100"></el-input-number>
    </div>
    <div class="action-btns">
      <el-button icon="el-icon-back" @click="$emit('cancel')">Inapoi</el-button>
      <el-button type="primary" @click="addSymptom">Salveaza</el-button>
    </div>
  </el-form>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Cough",
  data() {
    return {
      value: null,
      hasCough: null,
      coughCount: 1
    };
  },
  methods: {
    addSymptom() {
      this.$emit("add-symptom", {
        type: "cough",
        value: this.hasCough ? this.coughCount : 0,
        date: new Date()
      });
    }
  }
};
</script>


<style scoped>
</style>
