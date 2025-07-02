<template>
  <router-link class="max-w-4xl mx-auto bg-white p-6 border border-gray-300 text-[12pt] leading-relaxed font-khmer">
    <!-- Header -->
    <div class="text-center mb-4">
      <h2 class="font-bold">ព្រះរាជាណាចក្រកម្ពុជា</h2>
      <h3 class="font-semibold">ជាតិ សាសនា ព្រះមហាក្សត្រ</h3>
      <h4 class="mt-4 underline font-bold">សេចក្ដីជូនដំណឹង</h4>
    </div>

    <!-- Body -->
    <div class="mb-4 space-y-2">
      <p>សូមជម្រាបជូន លោកគ្រូ/អ្នកគ្រូថា៖ <span class="font-bold underline">..............................................................</span></p>
      <p>និស្សិតថ្នាក់ទី <span class="text-red-600 font-bold underline">ដើមឯក</span> ឆ្នាំសិក្សា <span class="text-red-600 font-bold underline">២០២៤-២០២៥</span> បានសុំអនុញ្ញាតឲ្យចាកចេញពីថ្នាក់រៀនរយៈពេល <span class="text-red-600 font-bold underline">.......ថ្ងៃ</span> ដោយមានមូលហេតុដូចខាងក្រោម៖</p>
    </div>

    <!-- Reason Textarea -->
    <textarea class="w-full border border-gray-400 h-32 mb-4" placeholder="សូមបញ្ជាក់មូលហេតុ..."></textarea>

    <!-- Four Boxes Section -->
    <div class="grid grid-cols-2 border border-black divide-x divide-y divide-black text-center text-sm font-medium">
      <div class="p-4">មេប្រតិបត្តិការសិក្សាឯកទេស</div>
      <div class="p-4">មេប្រតិបត្តិការសិក្សា</div>
      <div class="p-4">មេគ្រប់គ្រងប្រតិបត្តិការសិក្សាឯកទេស</div>
      <div class="p-4">មេគ្រប់គ្រងប្រតិបត្តិការសិក្សា</div>
    </div>

    <!-- Footer Comment Section -->
    <div class="mt-6">
      <h5 class="font-bold underline mb-2">សេចក្ដីយោបល់របស់ស្ថាប័នសិក្សា</h5>
      <textarea class="w-full border border-gray-400 h-24"></textarea>
    </div>
  </router-link>
</template>

<script setup>
// You can add logic or state later if needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanuman&display=swap');

.font-khmer {
  font-family: 'Hanuman', serif;
}
</style>
