<template>
  <div class="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Image File Upload</h2>

    <!-- File Input -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">Choose an image file:</label>
      <input
        type="file"
        accept="image/*"
        @change="handleFileChange"
        class="block w-full text-sm file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100 transition"
      />
    </div>

    <!-- Image Preview -->
    <div v-if="file" class="mb-4 bg-gray-50 p-4 rounded-md border border-gray-200">
      <p class="text-sm text-gray-700"><strong>File Name:</strong> {{ file.name }}</p>
      <p class="text-sm text-gray-700"><strong>File Size:</strong> {{ formattedFileSize }}</p>
      <img :src="previewUrl" alt="Preview" class="mt-3 rounded max-h-64" />
    </div>

    <!-- Upload Button -->
    <button
      :disabled="!file || uploading"
      @click="uploadFile"
      class="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span v-if="uploading">Uploading...</span>
      <span v-else>Upload</span>
    </button>

    <!-- Status Messages -->
    <p v-if="message" class="text-center mt-4 text-sm text-green-600">{{ message }}</p>
    <p v-if="error" class="text-center mt-4 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageUpload",
  data() {
    return {
      file: null,
      previewUrl: null,
      message: "",
      error: "",
      uploading: false,
    };
  },
  computed: {
    formattedFileSize() {
      if (!this.file) return "";
      const sizeInKB = this.file.size / 1024;
      return sizeInKB < 1024
        ? `${sizeInKB.toFixed(2)} KB`
        : `${(sizeInKB / 1024).toFixed(2)} MB`;
    },
  },
  methods: {
    handleFileChange(event) {
      const selected = event.target.files[0];
      this.file = selected;
      this.message = "";
      this.error = "";
      this.previewUrl = selected ? URL.createObjectURL(selected) : null;
    },
    async uploadFile() {
      if (!this.file) {
        this.error = "Please select an image to upload.";
        return;
      }

      this.uploading = true;
      this.message = "";
      this.error = "";

      const formData = new FormData();
      formData.append("file", this.file);

      try {
        const res = await axios.post("http://172.23.1.130:3000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        this.message = res.data.message || "Image uploaded successfully!";
        this.file = null;
        this.previewUrl = null;
        this.$refs.fileInput.value = "";
      } catch (err) {
        this.error = err.response?.data?.message || "Upload failed.";
      } finally {
        this.uploading = false;
      }
    },
  },
};
</script>
