<template>
  <div class="today">
    <h1>Buna 👋</h1>
    <div class="source" v-if="symptoms.length">
      <el-row :gutter="12">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-if="fatigueSymptoms.length">
          <symptom-card :symptoms="fatigueSymptoms" type="fatigue" @update="saveData"></symptom-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-if="feverSymptoms.length">
          <symptom-card :symptoms="feverSymptoms" type="fever" @update="saveData"></symptom-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-if="coughSymptoms.length">
          <symptom-card :symptoms="coughSymptoms" type="cough" @update="saveData"></symptom-card>
        </el-col>
      </el-row>
    </div>
    <h3 v-else>
      Cum te simti azi?
    </h3>
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
      return JSON.parse(localStorage.getItem(key)) || [];
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
    this.symptoms = this.get("c19st");
  }
};
</script>
<style>
.el-col {
  margin-bottom: 1rem;
}
</style>