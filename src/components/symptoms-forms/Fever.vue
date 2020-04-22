<template>
  <el-form class="fever-form">
    <p>Temperatura</p>
    <el-form-item>
      <el-slider
        :step=".1"
        :min="34"
        :max="41"
        :marks="marks"
        :format-tooltip="formatTooltip"
        v-model="temperature"
      ></el-slider>
    </el-form-item>
    <div class="action-btns">
      <el-button icon="el-icon-back" @click="$emit('back')">Inapoi</el-button>
      <el-button type="primary" @click="addSymptom">Salveaza</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "Fever",
  data() {
    return {
      isModalVisible: false,
      marks: {
        35: "35°C",
        37: "37°C",
        40: "40°C"
      },
      date: new Date(),
      temperature: 37
    };
  },
  methods: {
    formatTooltip(value) {
      return value + " °C";
    },
    addSymptom() {
      this.$emit("add-symptom", {
        type: "fever",
        value: this.temperature,
        date: new Date()
      });
    }
  }
};
</script>


<style scoped>
.el-form-item__label {
  margin-top: -30px;
}
</style>
