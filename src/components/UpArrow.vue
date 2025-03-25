<template>
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="btn btn-danger position-fixed bottom-5 end-0 m-4 shadow"
      style="z-index: 1000;"
    >
      ↑
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const showButton = ref(false)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const handleScroll = () => {
    showButton.value = window.scrollY > 300
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  