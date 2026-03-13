<template>
  <div class="profile-container">
    <div class="content-wrapper">
      <!-- 顶部个人信息区域 -->
      <div class="profile-header">
        <div class="profile-info">
          <div class="avatar">
            <van-image round :src="'https://modao.cc/agent-py/media/user_assets/2026-02-09/d73bca2a166944b2bb625b2f1844c6b7.png'" width="72px" height="72px" />
          </div>
          <div class="user-info">
            <h2 class="username">心恬的铲屎日记</h2>
            <p class="user-id">ID: 88521099</p>
          </div>
        </div>
      </div>

      <!-- 统计数据区域 -->
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-value">12</div>
          <div class="stat-label">关注</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">2.5k</div>
          <div class="stat-label">粉丝</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">156</div>
          <div class="stat-label">获赞</div>
        </div>
      </div>

      <!-- 功能列表 -->
      <div class="feature-list">
        <div class="feature-item cell-with-icon heart-icon">
          <div class="feature-icon">
            <svg aria-hidden="true" class="text-2xl" data-icon="mdi:heart" height="1.2em" role="img" viewBox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" fill="currentColor"></path></svg>
          </div>
          <div class="feature-title">我的收藏</div>
          <div class="feature-arrow">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
        <div class="feature-item cell-with-icon calendar-icon">
          <div class="feature-icon">
            <svg aria-hidden="true" class="text-2xl" data-icon="mdi:calendar-check" height="1.2em" role="img" viewBox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.47 8.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17z" fill="currentColor"></path></svg>
          </div>
          <div class="feature-title">训练记录</div>
          <div class="feature-arrow">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
        <div class="feature-item cell-with-icon card-icon">
          <div class="feature-icon">
            <svg aria-hidden="true" class="text-2xl" data-icon="mdi:credit-card" height="1.2em" role="img" viewBox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 7H4V8h16Z" fill="currentColor"></path></svg>
          </div>
          <div class="feature-title">订单管理</div>
          <div class="feature-arrow">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
        <div class="feature-item cell-with-icon cog-icon">
          <div class="feature-icon">
            <svg aria-hidden="true" class="text-2xl" data-icon="mdi:cog" height="1.2em" role="img" viewBox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0-.46.18-.5.42l-.37 2.65c-.63-.26-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46c-.12-.22-.07-.49.12-.64z" fill="currentColor"></path></svg>
          </div>
          <div class="feature-title">通用设置</div>
          <div class="feature-arrow">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
      </div>

      <!-- 退出登录按钮 -->
      <div class="logout-container">
        <van-button type="default" class="logout-btn">退出登录</van-button>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="bottom-nav">
      <BottomNav />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BottomNav from '../../components/BottomNav.vue'

const router = useRouter()
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFBF0;
  position: relative;
}

.content-wrapper {
  flex: 1;
  padding-bottom: 60px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.profile-header {
  background-color: #ffe0b2;
  height: 240px;
  padding: 30px 20px;
  position: relative;
  display: flex;
  align-items: center;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  top: -20px;
  width: 100%;
  max-width: calc(100% - 40px);
}

.avatar {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}

.user-info {
  flex: 1;
}

.username {
  font-size: 20px;
  font-weight: bold;
  color: #5d4037;
  margin-bottom: 4px;
}

.user-id {
  font-size: 14px;
  color: #666666;
}

.stats-container {
  display: flex;
  background-color: #ffffff;
  border-radius: 12px;
  margin: 0 20px;
  padding: 10px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 60px;
  position: relative;
  top: -30px;
  z-index: 10;
}

.stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
  color: #5d4037;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #666666;
}

.feature-list {
  margin: 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  height: 52px;
  font-size: 16px;
  color: #5d4037;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-bottom: none;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.feature-icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-title {
  flex: 1;
  font-size: 16px;
  color: #5d4037;
}

.feature-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
}

.heart-icon svg {
  color: #FFB74D;
}

.calendar-icon svg {
  color: #81C784;
}

.card-icon svg {
  color: #4FC3F7;
}

.cog-icon svg {
  color: #BA68C8;
}

.logout-container {
  margin: 0 20px 30px;
}

.logout-btn {
  width: 100%;
  border-radius: 0;
  font-size: 16px;
  color: #fca5a5;
  border-color: transparent;
  background-color: transparent;
  padding: 12px 0;
}
</style>