<template>
  <el-form class="fatigue-form">
    <p>Care e starea ta generala in momentul de fata?</p>

    <el-form-item>
      <el-rate v-model="value" show-text :texts="ratingTexts" :colors="ratingColors"></el-rate>
    </el-form-item>
    <div class="action-btns">
      <el-button icon="el-icon-back" @click="$emit('cancel')">Inapoi</el-button>
      <el-button type="primary" @click="addSymptom">Salveaza</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "Fatigue",
  data() {
    return {
      value: null,
      ratingTexts: [
        "stare foarte rea",
        "stare rea",
        "stare ok",
        "stare buna",
        "sanatos tun"
      ],
      ratingColors: ["#ff0000", "#FF9900", "#F7BA2A"]
    };
  },
  methods: {
    addSymptom() {
      this.$emit("add-symptom", {
        type: "fatigue",
        value: this.value,
        date: new Date()
      });
    }
  }
};
</script>


<style scoped>
</style>
