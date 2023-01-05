<template>
  <aside class="sideBar">
    <div class="miniature">
      <img
        src="https://picsum.photos/60"
        alt="avatar"
        class="miniatureAvatar"
      />
      <div class="miniatureTextContainer">
        <h4 class="miniatureName">Ирина</h4>
        <p class="miniatureEmail">test@email.com</p>
      </div>
    </div>
    <div class="navContainer" v-bind:key="item.id" v-for="item in navItems">
      <router-link :to="item.to" class="navItem">
        <img :src="item.icon" :alt="item.name" class="navItemIcon" />
        <span class="navItemText">{{ item.name }}</span>
      </router-link>
    </div>
  </aside>
  <router-view />
</template>

<script>
import homeIcon from "@/assets/img/home.svg";
import createIcon from "@/assets/img/create.svg";

export default {
  data() {
    return {
      navItems: [
        { id: 1, name: "Все новости", icon: homeIcon, to: "/" },
        { id: 2, name: "Добавить запись", icon: createIcon, to: "/create" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.sideBar {
  position: fixed;
  width: 300px;
  height: 100%;
  box-shadow: 5px 0 5px -2px #b1b4c0;
}

.miniature {
  display: flex;

  .miniatureAvatar {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: 20px 15px;
  }

  .miniatureTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    .miniatureName {
      color: #74747a;
      font-weight: bold;
      font-size: 18px;
    }

    .miniatureEmail {
      color: #a6a7ab;
      font-size: 14px;
    }
  }
}

.navContainer {
  display: flex;
  flex-direction: column;

  .navItem {
    display: flex;
    justify-content: left;
    align-items: center;
    border-top: 1px solid var(--gray);
    cursor: pointer;
    color: var(--black);
    font-weight: bold;

    &:hover {
      background: #eaeaea;
    }
    &.router-link-exact-active {
      .navItemIcon {
        filter: var(--filterBlue);
      }
      .navItemText {
        color: var(--blue);
      }
    }
    .navItemIcon {
      width: 30px;
      height: 30px;
      margin: 20px 15px;
    }
  }
}
</style>
