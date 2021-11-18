<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="animated animated--1"></div>
    <div class="animated--logo animated--logo1">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="js"
        width="90"
        color="#fff"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
        ></path>
      </svg>
    </div>
    <div class="animated--logo animated--logo2">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="vuejs"
        width="90"
        color="#fff"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
        ></path>
      </svg>
    </div>
    <div class="animated animated--2"></div>

    <div class="greeting_wrapp">
      <span>Hi, new friend!</span>
      <p>Train Your Skills</p>
      <ul>
        <li>#Js</li>
        <li>#Vue</li>
        <li>#React</li>
      </ul>
    </div>

    <router-link class="paly_btn" :to="{ name: 'quiz' }"
      ><span class="play_lable">Start</span>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="play"
        width="34"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
        ></path>
      </svg>
      <span class="play_border"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.wrapper {
  position: relative;
  min-height: 100vh;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bg:after {
  content: "";
  height: 58vw;
  width: 156%;
  background-color: var(--primary);
  position: absolute;
  transform: rotate(-73deg);
}

.greeting_wrapp {
  padding: 140px 180px;
}

.greeting_wrapp p {
  font-size: 42px;
}

.greeting_wrapp li {
  font-size: 44px;
  list-style: none;
  color: var(--primary);
}

.paly_btn {
  display: block;
  position: relative;
  text-decoration: none;
  position: absolute;
  color: var(--darkGrey);
  left: calc(50% - 75px);
  top: 214px;
  width: 170px;
  height: 170px;
  background: var(--white);
  border-radius: 50%;
}

.play_lable {
  position: absolute;
  display: block;
  top: 20px;
  left: 10px;
  font-size: 23px;
}

.paly_btn svg {
  position: absolute;
  display: block;
  top: 66px;
  left: calc(50% - 10px);
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.paly_btn:hover svg {
  transform: scale(1.3);
}

.play_border {
  display: block;
  position: absolute;
  width: 54px;
  height: 2px;
  bottom: 34px;
  right: 4px;
  border-bottom: 2px dashed var(--darkGrey);
}

.animated {
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: solid 10px var(--white);
  right: 15%;
  bottom: 30%;
  box-shadow: inset 0 3px 6px 0 rgb(0 0 0 / 9%), 0 3px 6px 0 rgb(0 0 0 / 9%);
  animation: anima1 3s 1.5s infinite ease-in-out;
}

.animated--1 {
  right: 12%;
  bottom: 24%;
}

.animated--2 {
  right: 26%;
  bottom: 53%;
}

.animated--logo {
  position: absolute;
  animation: anima2 3s infinite ease-in-out;
}

.animated--logo1 {
  width: 140px;
  right: 34%;
  bottom: 18%;
}

.animated--logo2 {
  width: 140px;
  right: 10%;
  bottom: 62%;
}

@keyframes anima1 {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-5px);
  }

  75% {
    transform: translateY(5px);
  }

  0% {
    transform: translateY(0);
  }
}

@keyframes anima2 {
  0% {
    transform: translateY(0) scale(1) rotate(0);
  }

  25% {
    transform: translateY(-5px) scale(1.1) rotate(-5deg);
  }

  75% {
    transform: translateY(-5px) scale(1.1) rotate(5deg);
  }

  0% {
    transform: translateY(0) scale(1) rotate(0);
  }
}
</style>
