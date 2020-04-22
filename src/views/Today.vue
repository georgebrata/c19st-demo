<template>
  <div class="today">
    <h1>{{greeting}}</h1>
    <!-- <h2>Today is {{new Date().toLocaleString()}}</h2> -->
    <div class="source">
      <el-row :gutter="12">
        <el-col :xs="24" :sm="24" :md="12" :lg="8">
          <symptom-card :symptoms="fatigueSymptoms" type="fatigue" @update="saveData"></symptom-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8">
          <symptom-card :symptoms="feverSymptoms" type="fever" @update="saveData"></symptom-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8">
          <symptom-card :symptoms="coughSymptoms" type="cough" @update="saveData"></symptom-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>



<script>
import SymptomCard from "@/components/SymptomCard";
export default {
  name: "Today",
  components: { SymptomCard },
  data() {
    return {
      name: "George",
      symptoms: []
    };
  },
  computed: {
    greeting() {
      if (new Date().getHours() < 12) {
        return "Buna dimineata 🌤";
      } else if (new Date().getHours() < 17) {
        return "Buna 👋";
      } else {
        return "Buna seara 🌕";
      }
    },
    fatigueSymptoms() {
      return this.symptoms.filter(s => s.type === "fatigue");
    },
    feverSymptoms() {
      return this.symptoms.filter(s => s.type === "fever");
    },
    coughSymptoms() {
      return this.symptoms.filter(s => s.type === "cough");
    }
  },
  methods: {
    get(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    set(key, newSymptoms) {
      localStorage.setItem(key, JSON.stringify(newSymptoms));
    },
    saveData(newSymptom) {
      let payload = {
        type: newSymptom.type,
        value: newSymptom.value,
        date: new Date()
      };

      this.symptoms.push(payload);
      this.set(this.symptoms);

      this.$message({
        message: "Simptom adaugat cu success!",
        type: "success"
      });
    }
  },
  mounted() {
    this.symptoms = JSON.parse(localStorage.getItem("c19st"));
    console.log(this.symptoms);
  }
};
</script>
<style>
.el-col {
  margin-bottom: 1rem;
}
</style>