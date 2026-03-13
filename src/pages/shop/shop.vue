<template>
  <div class="shop-container">
    <!-- 顶部标题栏 -->
    <header class="header">
      <h1 class="header-title">宠物商城</h1>
      <van-icon name="shopping-cart-o" class="cart-icon" />
    </header>

    <!-- 内容区 -->
    <main class="content">
      <!-- Banner 轮播 -->
      <div class="banner">
        <div class="banner-content">
          <div class="promo-text">
            <h2 class="promo-title">新人福利</h2>
            <p class="promo-desc">首次下单立减 20 元</p>
          </div>
        </div>
        <div class="promo-tag">
          <img src="https://modao.cc/agent-py/media/generated_images/2026-01-29/f46a3b637924403e9689fcfb1fc084b6.jpg" alt="PROMO" />
        </div>
      </div>

      <!-- 商品网格 -->
      <div class="products-grid">
        <div class="product-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pet%20food%20bag%2C%20blue%20packaging&image_size=square" alt="全价成犬粮" class="product-image" />
          <h3 class="product-name">全价成犬粮 5kg</h3>
          <p class="product-price">¥199</p>
          <div class="add-to-cart">
            <van-icon name="plus" />
          </div>
        </div>
        <div class="product-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pet%20supplement%20bottles%2C%20green%20packaging&image_size=square" alt="宠物专用护毛素" class="product-image" />
          <h3 class="product-name">宠物专用护毛素</h3>
          <p class="product-price">¥329</p>
          <div class="add-to-cart">
            <van-icon name="plus" />
          </div>
        </div>
        <div class="product-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pet%20shampoo%20bottles%2C%20blue%20packaging&image_size=square" alt="宠物洗澡沐浴露" class="product-image" />
          <h3 class="product-name">宠物洗澡沐浴露</h3>
          <p class="product-price">¥29</p>
          <div class="add-to-cart">
            <van-icon name="plus" />
          </div>
        </div>
        <div class="product-item">
          <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pet%20nutritional%20supplement%20liquid%2C%20green%20bottle&image_size=square" alt="营养件食液" class="product-image" />
          <h3 class="product-name">营养件食液</h3>
          <p class="product-price">¥139</p>
          <div class="add-to-cart">
            <van-icon name="plus" />
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
import BottomNav from '../../components/BottomNav.vue'

const router = useRouter()
</script>

<style scoped>
.shop-container {
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
}

.cart-icon {
  font-size: 20px;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.banner {
  background-color: #ffcc80;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 128px;
}

.banner-content {
  flex: 1;
  z-index: 1;
}

.promo-title {
  font-size: 20px;
  font-weight: bold;
  color: #5D4037;
  margin-bottom: 8px;
}

.promo-desc {
  font-size: 14px;
  color: #795548;
}

.promo-tag {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  z-index: 0;
}

.promo-tag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.product-item {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(215, 204, 200, 0.15);
  position: relative;
}

.product-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
}

.product-name {
  font-size: 14px;
  color: #5D4037;
  margin-bottom: 8px;
  line-height: 1.4;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #FF5722;
  margin-bottom: 8px;
}

.add-to-cart {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FFAB91;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}


</style>