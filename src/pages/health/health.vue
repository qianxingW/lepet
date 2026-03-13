<template>
  <div class="health-container">
    <!-- 顶部标题栏 -->
    <header class="header">
      <div class="header-left" @click="goBack">
        <van-icon name="arrow-left" class="back-icon" />
      </div>
      <h1 class="header-title">健康概览</h1>
      <div class="header-right">
        <van-icon name="heart" class="heart-icon" />
      </div>
    </header>

    <!-- 内容区 -->
    <main class="content">
      <!-- 体重趋势图表 -->
      <div class="weight-trend">
        <h2 class="section-title">体重趋势(kg)</h2>
        <div class="chart-container">
          <div class="chart-grid">
            <div class="grid-line">18</div>
            <div class="grid-line">15</div>
            <div class="grid-line">12</div>
            <div class="grid-line">9</div>
            <div class="grid-line">6</div>
            <div class="grid-line">3</div>
            <div class="grid-line">0</div>
          </div>
          <div class="chart-data">
            <div class="chart-line"></div>
            <div class="chart-dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div class="chart-labels">
              <span>01.20</span>
              <span>01.22</span>
              <span>01.24</span>
              <span>01.26</span>
              <span>01.28</span>
              <span>01.25</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-container">
        <div class="stat-card water">
          <svg aria-hidden="true" class="stat-icon" data-icon="mdi:food" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z" fill="currentColor"></path></svg>
          <div class="stat-content">
            <div class="stat-label">饮水量</div>
            <div class="stat-value">450ml</div>
          </div>
        </div>
        <div class="stat-card calorie">
          <svg aria-hidden="true" class="stat-icon" data-icon="mdi:bone" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-.77.29-1.47.76-2c-.47-.53-.76-1.23-.76-2a3 3 0 0 1 3-3a3 3 0 0 1 3 3c1.33.08 2.67.17 4 .17s2.67-.09 4-.17a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 .77-.29 1.47-.76 2c.47.53.76 1.23.76 2a3 3 0 0 1-3 3a3 3 0 0 1-3-3c-1.33-.08-2.67-.17-4-.17s-2.67.09-4 .17" fill="currentColor"></path></svg>
          <div class="stat-content">
            <div class="stat-label">卡路里</div>
            <div class="stat-value">1.2k</div>
          </div>
        </div>
      </div>

      <!-- 下次提醒 -->
      <div class="reminder-container">
        <h2 class="section-title">下次提醒</h2>
        <div class="reminder-item vaccine">
          <div class="reminder-icon">
            <svg aria-hidden="true" data-icon="mdi:needle" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z" fill="currentColor"></path></svg>
          </div>
          <div class="reminder-content">
            <div class="reminder-title">狂犬疫苗</div>
            <div class="reminder-date">2026-02-15 - 宠物医院</div>
          </div>
        </div>
        <div class="reminder-item deworm">
          <div class="reminder-icon">
            <svg aria-hidden="true" data-icon="mdi:shimmer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.6 9.6L9 15L7.4 9.6L2 8l5.4-1.6L9 1l1.6 5.4L16 8zm6.4 4.6l4-2.2l-2.2 4l2.2 4l-4-2.2l-4 2.2l2.2-4l-2.2-4zM10 16l-1.7 3l1.7 3l-3-1.7L4 22l1.7-3L4 16l3 1.7z" fill="currentColor"></path></svg>
          </div>
          <div class="reminder-content">
            <div class="reminder-title">驱虫提醒</div>
            <div class="reminder-date">2026-02-05 - 居家进行</div>
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
.health-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFFFF;
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
  background-color: #FFFFFF;
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
.heart-icon {
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

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
}

/* 体重趋势图表 */
.weight-trend {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.chart-container {
  position: relative;
  height: 200px;
  display: flex;
}

.chart-grid {
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 12px;
  border-right: 1px solid #F0F0F0;
}

.grid-line {
  font-size: 12px;
  color: #999999;
  line-height: 1;
}

.chart-data {
  flex: 1;
  height: 100%;
  position: relative;
  padding: 0 12px;
}

.chart-line {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #FFB74D;
  border-radius: 1px;
}

.chart-dots {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #FFB74D;
}

.chart-labels {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}

.chart-labels span {
  font-size: 12px;
  color: #999999;
}

/* 统计卡片 */
.stats-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.stat-card {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-card.water {
  background-color: #E8F5E8;
}

.stat-card.calorie {
  background-color: #FFF3E0;
}

.stat-icon {
  font-size: 24px;
  margin-right: 12px;
}

.stat-card.water .stat-icon {
  color: #4CAF50;
}

.stat-card.calorie .stat-icon {
  color: #FF9800;
}

.stat-label {
  font-size: 14px;
  color: #666666;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}

/* 下次提醒 */
.reminder-container {
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.reminder-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #F0F0F0;
}

.reminder-item:last-child {
  border-bottom: none;
}

.reminder-icon {
  margin-right: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.reminder-icon > svg {
  width: 16px !important;
  height: 16px !important;
  max-width: 16px !important;
  max-height: 16px !important;
  flex-shrink: 0 !important;
  min-width: 16px !important;
  min-height: 16px !important;
}

.reminder-item.vaccine .reminder-icon {
  background-color: #FCE4EC;
  color: #E91E63;
}

.reminder-item.deworm .reminder-icon {
  background-color: #E3F2FD;
  color: #2196F3;
}

.reminder-title {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 4px;
}

.reminder-date {
  font-size: 12px;
  color: #999999;
}
</style>