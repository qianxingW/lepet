<template>
  <div class="home-container">
    <!-- 顶部标题栏 -->
    <header class="header">
      <h1 class="header-title">主页</h1>
      <van-icon name="bell" class="notification-icon" />
    </header>

    <!-- 内容区 -->
    <main class="content">
      <!-- 宠物健康概览 -->
      <div class="health-overview">
        <div class="pet-info">
          <img src="https://modao.cc/agent-py/media/user_assets/2026-02-09/d73bca2a166944b2bb625b2f1844c6b7.png" alt="宠物头像" class="pet-avatar" />
          <div class="pet-details">
            <h3 class="pet-name">布丁 (布偶)</h3>
            <p class="pet-status">今天状态: 活泼</p>
          </div>
          <button class="details-btn">详情</button>
        </div>
        <div class="health-stats">
            <div class="stat-item">
              <span class="stat-label">步数</span>
              <span class="stat-value">5240</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">热量</span>
              <span class="stat-value">320</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">睡眠</span>
              <span class="stat-value">9h</span>
            </div>
          </div>
      </div>

      <!-- 快捷入口 -->
      <div class="quick-actions">
        <div class="action-item">
          <van-icon name="notes-o" class="action-icon" />
          <span class="action-label">记事本</span>
        </div>
        <div class="action-item" @click="goToAlbum">
          <van-icon name="photo-o" class="action-icon" />
          <span class="action-label">相册</span>
        </div>
        <div class="action-item">
          <van-icon name="shop" class="action-icon" />
          <span class="action-label">商城</span>
        </div>
        <div class="action-item" @click="goToHealth">
          <van-icon name="chart-trending-o" class="action-icon" />
          <span class="action-label">分析</span>
        </div>
      </div>

      <!-- 热门动态 -->
      <div class="hot-feeds">
        <div class="section-header">
          <h3 class="section-title">热门动态</h3>
          <button class="more-btn">查看更多</button>
        </div>
        <div class="feed-item">
          <img src="http://k.sinaimg.cn/n/sinakd20260204ac/640/w960h1280/20260204/daaf-6c1e4f72d1d58a734aa08c9df33b736a.jpg/w700d1q75cms.jpg?by=cms_fixed_width" alt="动态图片" class="feed-image" />
          <p class="feed-content">今天的阳光真好，带布丁去公园撒欢啦！✨</p>
          <div class="feed-actions">
            <span class="action" @click="toggleLike">
              <van-icon :name="isLiked ? 'like' : 'like-o'" :color="isLiked ? '#ee0a24' : '#A1887F'" />
              <span>{{ likeCount }}</span>
            </span>
            <span class="action">
              <van-icon name="chat-o" />
              <span>12</span>
            </span>
            <span class="action">10分钟前</span>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航 -->
    <BottomNav />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import BottomNav from '../../components/BottomNav.vue'

const router = useRouter()

// 点赞功能
const isLiked = ref(false)
const likeCount = ref(128)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  likeCount.value += isLiked.value ? 1 : -1
}

// 跳转到相册页面
const goToAlbum = () => {
  router.push('/album')
}

// 跳转到健康页面
const goToHealth = () => {
  router.push('/health')
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFBF0;
}

.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #FFFBF0;
  border-bottom: 1px solid #E0DAD6;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
  color: #5D4037;
  margin: 0;
}

.notification-icon {
  font-size: 20px;
  color: #5D4037;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.health-overview {
  background-color: #FFE0B2;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(215, 204, 200, 0.15);
}

.pet-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.pet-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
  border: 2px solid white;
}

.pet-details {
  flex: 1;
}

.pet-name {
  font-size: 18px;
  font-weight: bold;
  color: #5D4037;
  margin-bottom: 4px;
}

.pet-status {
  font-size: 14px;
  color: #795548;
}

.details-btn {
  padding: 6px 12px;
  border-radius: 16px;
  background-color: white;
  border: none;
  color: #795548;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.health-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  flex: 1;
  text-align: center;
  background-color: #FFF3E0;
  border-radius: 12px;
  padding: 16px 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.stat-label {
  display: block;
  font-size: 12px;
  color: #795548;
  margin-bottom: 4px;
}

.stat-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #5D4037;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.action-item {
  background-color: white;
  border-radius: 12px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(215, 204, 200, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(215, 204, 200, 0.2);
}

.action-icon {
  font-size: 24px;
  margin-bottom: 8px;
  color: #5D4037;
}

.action-label {
  font-size: 12px;
  color: #795548;
  text-align: center;
}

.hot-feeds {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #5D4037;
  margin: 0;
}

.more-btn {
  font-size: 14px;
  color: #795548;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.feed-item {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(215, 204, 200, 0.15);
}

.feed-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.feed-content {
  padding: 16px;
  font-size: 14px;
  color: #795548;
  margin-bottom: 12px;
  line-height: 1.4;
}

.feed-actions {
  display: flex;
  gap: 16px;
  color: #A1887F;
  padding: 0 16px 16px;
  align-items: center;
  height: 24px;
}

.feed-actions .action {
  display: flex;
  align-items: center;
  gap: 4px;
}

.feed-actions .action {
  font-size: 14px;
}

.bottom-nav {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid #E0DAD6;
  padding: 0 20px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex: 1;
}


</style>