<template>
  <div class="album-container">
    <!-- 顶部标题栏 -->
    <header class="header">
      <div class="header-left" @click="goBack">
        <van-icon name="arrow-left" class="back-icon" />
      </div>
      <h1 class="header-title">我的相册</h1>
      <div class="header-right">
        <van-icon name="more" class="more-icon" />
      </div>
    </header>

    <!-- 内容区 -->
    <main class="content">
      <!-- 相册网格 -->
      <div class="album-grid">
        <div class="album-item">
          <img src="https://modao.cc/agent-py/media/user_assets/2026-02-09/d73bca2a166944b2bb625b2f1844c6b7.png" alt="宠物照片" />
        </div>
        <div class="album-item">
          <img src="https://modao.cc/agent-py/media/generated_images/2026-01-29/afd2ffc07fec40ae89b9b1dd0d6fbc40.jpg" alt="宠物照片" />
        </div>
        <div class="album-item">
          <img src="http://k.sinaimg.cn/n/sinakd20260204ac/640/w960h1280/20260204/daaf-6c1e4f72d1d58a734aa08c9df33b736a.jpg/w700d1q75cms.jpg?by=cms_fixed_width" alt="宠物照片" />
        </div>
        <div class="album-item add-item">
          <div class="add-icon">
            <van-icon name="plus" size="24" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.album-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFBF0;
  position: relative;
}

.content {
  flex: 1;
  padding: 20px;
}

.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #FFFBF0;
  border-bottom: 1px solid #F0F0F0;
}

.header-left,
.header-right {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon,
.more-icon {
  font-size: 20px;
  color: #333333;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  flex: 1;
  text-align: center;
}

.album-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.album-item {
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.album-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.add-item {
  background-color: #F0F4F8;
  border: 2px dashed #E0E0E0;
}

.add-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #E3F2FD;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196F3;
}
</style>