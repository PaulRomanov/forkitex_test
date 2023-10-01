<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <img src="../assets/Logo.svg" alt="Логотип" />
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <div v-if="!menuOpen" class="burger-icon">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div v-else class="cross-icon">
          <div class="bar bar-cross"></div>
          <div class="bar bar-cross"></div>
        </div>
      </div>
      <div
        class="notification-box"
        :class="{ 'notification-visible': notificationVisible }"
        v-if="!menuOpen"
        @click="stopAnimation"
      >
        <span class="notification-count">6</span>
        <div class="notification-bell">
          <span class="bell-top"></span>
          <span class="bell-middle"></span>
          <span class="bell-bottom"></span>
          <span class="bell-rad"></span>
        </div>
      </div>
    </header>
    <nav class="menu" :class="{ 'menu-open': menuOpen }">
      <ul>
        <li><a href="#">Преимущества Теle2</a></li>
        <li><a href="#">Тарифы</a></li>
        <li><a href="#">Акции и спецпредложения</a></li>
        <li><a href="#">Промотариф Tele2</a></li>
        <li><a href="#">Технология eSIM</a></li>
        <li><a href="#">Подключение нового абонента</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      menuOpen: false,
      notificationVisible: false,
    };
  },
  mounted() {
    // Показать колокольчик на больших экранах
    if (window.innerWidth > 375) {
      this.notificationVisible = true;
    }

    // Отслеживаем изменения размера окна
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // Удаляем слушатель событий при размонтировании компонента
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleResize() {
      // Переключаем видимость колокольчика при изменении размера окна
      if (window.innerWidth > 375) {
        this.notificationVisible = true;
      } else {
        this.notificationVisible = false;
      }
    },
    stopAnimation() {
      // Остановить анимацию
      const bell = document.querySelector(".notification-bell");
      bell.style.animation = "none";

      // Убрать буллит 
      const bellMiddle = document.querySelector(".bell-middle");
      while (bellMiddle.firstChild) {
        bellMiddle.removeChild(bellMiddle.firstChild);
      }

      // Остановить анимацию для .bell-rad
      const bellRad = document.querySelector(".bell-rad");
      bellRad.style.animation = "none";

      // Скрыть .notification-count
      const notificationCount = document.querySelector(".notification-count");
      if (notificationCount) {
        notificationCount.remove();
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  width: 100%;
}

.logo img {
  width: 48px;
  height: 18px;
}

.burger-icon,
.cross-icon {
  flex-direction: column;
  cursor: pointer;
  margin-left: 10px;
}

.bar {
  width: 18px;
  height: 2px;
  background-color: #fff;
  margin: 4px 0;
  transition: transform 0.3s ease;
}
.bar-cross {
  height: 3px;
  margin: 12px 5px;
}

.cross-icon .bar:first-child {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.cross-icon .bar:last-child {
  transform: rotate(45deg) translate(-5px, -6px);
}
.menu-toggle {
  display: none;
}

.menu {
  display: block;
  width: 100%;
}

.menu-open .menu {
  display: block;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.menu li {
  padding: 10px 10px;
}

.menu a {
  color: #959597;
  text-decoration: none;
}

.menu a:hover {
  text-decoration: underline;
  color: #000;
}

@media (max-width: 376px) {
  .menu-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .menu {
    display: none;
  }
  .menu-open {
    display: block;
  }
  .menu li {
    padding: 10px 0;
    border-bottom: 1px solid #ededed;
  }
  .menu ul {
    flex-direction: column;
  }
}
.notification-box {
  position: fixed;
  z-index: 99;
  top: 19px;
  right: 65px;
  width: 27px;
  height: 27px;
  text-align: center;
}

.notification-bell {
  animation: bell 1s 1s both infinite;
}
.notification-bell * {
  display: block;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 0px 15px #fff;
}
.bell-top {
  width: 6px;
  height: 6px;
  border-radius: 3px 3px 0 0;
}
.bell-middle {
  width: 25px;
  height: 25px;
  margin-top: -1px;
  border-radius: 12.5px 12.5px 0 0;
}
.bell-bottom {
  position: relative;
  z-index: 0;
  width: 32px;
  height: 2px;
}
.bell-bottom::before,
.bell-bottom::after {
  content: "";
  position: absolute;
  top: -4px;
}
.bell-bottom::before {
  left: 1px;
  border-bottom: 4px solid #fff;
  border-right: 0 solid transparent;
  border-left: 4px solid transparent;
}
.bell-bottom::after {
  right: 1px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid transparent;
  border-left: 0 solid transparent;
}
.bell-rad {
  width: 8px;
  height: 4px;
  margin-top: 2px;
  border-radius: 0 0 4px 4px;
  animation: rad 1s 2s both infinite;
}
.notification-count {
  position: absolute;
  z-index: 1;
  top: -6px;
  right: -6px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  border-radius: 50%;
  background-color: #ff4927;
  color: #fff;
  animation: zoom 3s 3s both infinite;
}
@keyframes bell {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(30deg);
  }
  20% {
    transform: rotate(0);
  }
  80% {
    transform: rotate(0);
  }
  90% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes rad {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(6px);
  }
  20% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(-6px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
