<template>
  <footer class="bottom-nav">
    <div class="nav-item" :class="{ active: activeTab === 'home' }" @click="navigateTo('/home')">
      <van-icon name="wap-home" class="nav-icon" />
      <span class="nav-label">首页</span>
    </div>
    <div class="nav-item" :class="{ active: activeTab === 'shop' }" @click="navigateTo('/shop')">
      <van-icon name="shop" class="nav-icon" />
      <span class="nav-label">商城</span>
    </div>
    <div class="nav-item add-btn">
      <div class="add-icon">
        <van-icon name="add" class="nav-icon" />
      </div>
    </div>
    <div class="nav-item" :class="{ active: activeTab === 'training' }" @click="navigateTo('/training')">
      <van-icon name="send-gift" class="nav-icon" />
      <span class="nav-label">训练</span>
    </div>
    <div class="nav-item" :class="{ active: activeTab === 'profile' }" @click="navigateTo('/profile')">
      <van-icon name="user" class="nav-icon" />
      <span class="nav-label">我的</span>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

// 计算当前激活的标签
const activeTab = computed(() => {
  const path = route.path
  if (path === '/home' || path === '/') return 'home'
  if (path === '/shop') return 'shop'
  if (path === '/training') return 'training'
  if (path === '/profile') return 'profile'
  return ''
})

const navigateTo = (path) => {
  router.push(path)
}
</script>

<script>
import { computed } from 'vue'

export default {
  setup() {
    return {
      activeTab: computed(() => {
        const path = this.$route.path
        if (path === '/home' || path === '/') return 'home'
        if (path === '/shop') return 'shop'
        if (path === '/training') return 'training'
        if (path === '/profile') return 'profile'
        return ''
      })
    }
  }
}
</script>

<style scoped>
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

.nav-item.active {
  color: #FFAB91;
}

.nav-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.nav-label {
  font-size: 12px;
}

.add-btn {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.add-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #FF6B6B;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.add-icon .nav-icon {
  color: white;
  font-size: 28px;
  margin-bottom: 0;
}
</style>