<template>
  <div class="training-container">
    <!-- 顶部标题栏 -->
    <header class="header">
      <h1 class="header-title">训练中心</h1>
      <van-icon name="notes" class="notes-icon" />
    </header>

    <!-- 内容区 -->
    <main class="content">
      <!-- 今日进度 -->
      <div class="progress-card">
        <div class="progress-header">
          <h2 class="progress-title">今日进度</h2>
        </div>
        <div class="progress-row">
          <div class="progress-value">85%</div>
          <van-progress :percentage="85" :color="'#4CAF50'" stroke-width="8" :radius="6" :show-pivot="false" />
        </div>
        <p class="progress-desc">再完成1个"随行"训练即可达成今日目标！</p>
      </div>

      <!-- 推荐课程 -->
      <div class="courses-section">
        <h2 class="section-title">推荐课程</h2>
        <div class="course-item">
          <div class="course-icon dog-icon">
            <svg aria-hidden="true" class="text-3xl" data-icon="mdi:dog-side" height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m19 3l-4 4l3 3l1-1l1 1l2-2l-3-3zM3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h7v6h2V11l-3-3l-1 1H5z" fill="currentColor"></path></svg>
          </div>
          <div class="course-details">
            <h3 class="course-name">基础坐下训练</h3>
            <p class="course-info">3节课时 · 难度 ⭐⭐</p>
          </div>
          <van-button type="primary" class="course-btn" size="mini">去学习</van-button>
        </div>
        <div class="course-item">
          <div class="course-icon hand-icon">
            <svg aria-hidden="true" class="text-3xl" data-icon="mdi:hand-okay" height="1em" role="img" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13.3 19.26l5.66-5.65l2.12 2.12l-5.66 5.65zm3.2-8.13l-3.1-3.08a1.7 1.7 0 0 0-.4-.29l-1.12-4.29a1.001 1.001 0 0 0-1.94.49L11 8.03L8.67 3.19c-.23-.5-.83-.69-1.33-.48c-.5.24-.71.84-.47 1.34l1.69 3.54l-3.37-3.34c-.39-.39-1.03-.39-1.42 0c-.39.4-.38 1.03.01 1.42l3.72 3.7l-.7.27l-1.08.43l-1.91 1.32s-.81 1.05-.88 1.5c-.08.45.79 2.71.79 2.71h.01c.16.34.5.58.9.58a1 1 0 0 0 1-1c0-.1-.03-.18-.06-.27l.02-.01L5 13.17l1.23-.98c.47.02 1.48.1 1.97.13c2.73 2.45.15 3.41.15 3.41l-3.46 1.06l-.17.14a.94.94 0 0 0-.3.75l.02 1.07l6.43-.5c.38.01.74-.13 1.02-.4l4.61-4.6c.53-.54.55-1.55 0-2.12" fill="currentColor"></path></svg>
          </div>
          <div class="course-details">
            <h3 class="course-name">握手接球进阶</h3>
            <p class="course-info">5节课时 · 难度 ⭐⭐⭐</p>
          </div>
          <van-button type="default" class="course-btn disabled" size="mini">待解锁</van-button>
        </div>
      </div>
    </main>

    <!-- 底部导航 -->
    <BottomNav />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BottomNav from '../../components/BottomNav.vue'

const router = useRouter()
</script>

<style scoped>
.training-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9ff;
}

.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #f8f9ff;
  border-bottom: 1px solid #F0F0F0;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}

.notes-icon {
  font-size: 20px;
  color: #333333;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.progress-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
}

.progress-header {
  margin-bottom: 16px;
}

.progress-title {
  font-size: 14px;
  font-weight: bold;
  color: #a1887f;
  margin-bottom: 12px;
}

.progress-value {
  font-size: 28px;
  font-weight: bold;
  color: #a1887f;
  margin-bottom: 16px;
}

.progress-desc {
  font-size: 14px;
  color: #5d4037;
  margin-top: 12px;
}

.progress-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.progress-row .progress-value {
  font-size: 24px;
  font-weight: bold;
  color: #a1887f;
  min-width: 60px;
  margin-bottom: 0;
}

.progress-row .van-progress {
  flex: 1;
}

.courses-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
}

.course-item {
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.course-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
}

.dog-icon {
  background-color: #FFF8E1;
  color: #FFB74D;
}

.hand-icon {
  background-color: #F3E5F5;
  color: #BA68C8;
}

.course-details {
  flex: 1;
}

.course-name {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 4px;
}

.course-info {
  font-size: 14px;
  color: #666666;
}

.course-btn {
  border-radius: 20px;
  font-size: 14px;
  padding: 4px 16px;
}

.course-btn:not(.disabled) {
  background-color: #FF9800;
  border-color: #FF9800;
  color: white;
}

.course-btn.disabled {
  background-color: #F5F5F5;
  border-color: #F5F5F5;
  color: #9E9E9E;
}


</style>