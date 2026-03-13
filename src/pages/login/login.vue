<template>
  <div class="login-container">
    <!-- 欢迎页面 -->
    <div v-if="showWelcome" class="logo-section">
      <div class="logo">
        <svg aria-hidden="true" class="paw-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.36 1.77-.29 3.35-1.47 3.53c-1.17.18-2.43-1.11-2.8-2.89c-.37-1.77.3-3.35 1.48-3.54m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73s-2.67-.39-3.46-1.96S1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72s-2.33 2.45-3.46 1.96s-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6m-1.67 10.78c.04.94-.68 1.98-1.54 2.37c-1.79.82-3.91-.88-5.9-.88s-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c1.41-1.41 2.41-4.06 4.42-4.06c2 0 3.06 2.61 4.41 4.06c1.11 1.22 2.96 2.25 3.03 3.88" fill="currentColor"></path>
        </svg>
      </div>
      <h1 class="app-name">宠萌生活</h1>
      <p class="app-slogan">给毛孩子最温柔的陪伴</p>
      <div class="pet-image">
        <img src="https://modao.cc/agent-py/media/generated_images/2026-01-29/afd2ffc07fec40ae89b9b1dd0d6fbc40.jpg" alt="宠物图标" />
      </div>
      <van-button color="#ffb74d" class="start-btn" @click="showWelcome = false">点击开始</van-button>
    </div>

    <!-- 登录表单页面 -->
    <div v-else class="login-section">
      <h2 class="welcome-text">欢迎回来</h2>
      <p class="login-desc">输入信息开始云养宠</p>
      <div class="form-group">
        <div class="field-label">手机号</div>
        <van-field
          v-model="phone"
          type="tel"
          placeholder="请输入手机号"
          :border="false"
        />
      </div>
      <div class="form-group">
        <div class="field-label">验证码</div>
        <van-field
          v-model="code"
          placeholder="请输入验证码"
          :border="false"
        >
          <template #button>
            <van-button 
              size="small" 
              type="default" 
              class="get-code-btn"
              :disabled="countdown > 0"
              @click="startCountdown"
            >
              {{ countdown > 0 ? `${countdown}秒后重新获取` : '获取' }}
            </van-button>
          </template>
        </van-field>
      </div>
      <van-button color="#ffb74d" class="login-btn" @click="login">立即登录</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const showWelcome = ref(true)
const phone = ref('')
const code = ref('')
const countdown = ref(0)
let timer = null

const login = () => {
  // 简单的登录验证
  if (phone.value && code.value) {
    // 登录成功后跳转到首页
    router.push('/home')
  }
}

const startCountdown = () => {
  if (phone.value) {
    // 显示提示
    showToast('验证码已发送，请注意查收')
    // 开始倒计时
    countdown.value = 60
    timer = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  } else {
    // 手机号为空，显示提示
    showToast('请输入手机号')
  }
}

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  background-color: #FFFBF0;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
}

.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffb74d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(255, 183, 77, 0.3);
}

.paw-icon {
  font-size: 50px;
  color: white;
  width: 60px;
  height: 60px;
}

.app-name {
  font-size: 28px;
  font-weight: bold;
  color: #5D4037;
  margin-bottom: 12px;
}

.app-slogan {
  font-size: 16px;
  color: #795548;
  margin-bottom: 40px;
  text-align: center;
}

.pet-image {
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
  animation: bounce 2s infinite;
}

.pet-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.start-btn {
  width: 240px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffb74d;
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(255, 183, 77, 0.3);
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #f5a742;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 183, 77, 0.4);
}

.login-section {
  width: 100%;
  max-width: 360px;
  background-color: white;
  border-radius: 20px;
  padding: 40px 32px;
  box-shadow: 0 4px 20px rgba(215, 204, 200, 0.2);
  margin-top: 40px;
  margin-bottom: 40px;
}

.welcome-text {
  font-size: 24px;
  font-weight: bold;
  color: #5D4037;
  margin-bottom: 12px;
  text-align: left;
}

.login-desc {
  font-size: 16px;
  color: #795548;
  margin-bottom: 32px;
  text-align: left;
}

.form-group {
  margin-bottom: 24px;
}

.field-label {
  font-size: 16px;
  color: #795548;
  margin-bottom: 12px;
  font-weight: 500;
}

/* 自定义输入框样式 */
:deep(.van-field__control) {
  background-color: #FAF8F1;
  border-radius: 12px;
  height: 50px;
  font-size: 16px;
  padding-left: 16px;
}

/* 确保输入框与标签对齐 */
:deep(.van-field) {
  margin-left: 0;
  padding-left: 0;
}

.get-code-btn {
  color: #ffb74d;
  border: none;
  font-size: 14px;
  padding: 0 16px;
}

.login-btn {
  width: 100%;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  box-shadow: 0 4px 12px rgba(255, 183, 77, 0.3);
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 183, 77, 0.4);
}
</style>