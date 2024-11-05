<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <!-- 👉 Game Manager -->
  <VerticalNavGroup :item="{
    title: 'Games',
    // badgeContent: '5',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
  }">
    <VerticalNavLink :item="{
      title: 'Analytics',
      to: '/dashboard',
    }" />
  </VerticalNavGroup>

  <!-- 👉 User Manager -->
  <VerticalNavGroup :item="{
    title: 'Khách hàng',
    badgeClass: 'bg-error',
    icon: 'ri-user-settings-line',
  }">
    <VerticalNavLink :item="{
      title: 'Analytics',
      to: '/dashboard',
    }" />
  </VerticalNavGroup>

  <!-- 👉 report -->
  <VerticalNavGroup :item="{
    title: 'Báo cáo',
    badgeClass: 'bg-error',
    icon: 'ri-bar-chart-box-line',
  }">
    <VerticalNavLink :item="{
      title: 'Analytics',
      to: '/dashboard',
    }" />
  </VerticalNavGroup>

  <!-- 👉 Quản lý tài khoản -->
  <VerticalNavSectionTitle :item="{
    heading: 'Quản lý tài khoản',
  }" />

  <VerticalNavLink :item="{
    title: 'Khóa tài khoản',
    icon: 'ri-user-settings-line',
    to: '/lock-user',
  }" />

  <VerticalNavLink :item="{
    title: 'Thông báo',
    icon: 'ri-user-settings-line',
    to: '/notification',
  }" />

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle :item="{
    heading: 'Apps & Pages',
  }" />

  <VerticalNavLink :item="{
    title: 'Account Settings',
    icon: 'ri-user-settings-line',
    to: '/account-settings',
  }" />

  <VerticalNavLink :item="{
    title: 'Login',
    icon: 'ri-login-box-line',
    to: '/login',
  }" />

  <VerticalNavLink :item="{
    title: 'Register',
    icon: 'ri-user-add-line',
    to: '/register',
  }" />

  <VerticalNavLink :item="{
    title: 'Error',
    icon: 'ri-information-line',
    to: '/no-existence',
  }" />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle :item="{
    heading: 'User Interface',
  }" />
  <VerticalNavLink :item="{
    title: 'Typography',
    icon: 'ri-text',
    to: '/typography',
  }" />
  <VerticalNavLink :item="{
    title: 'Icons',
    icon: 'ri-remixicon-line',
    to: '/icons',
  }" />
  <VerticalNavLink :item="{
    title: 'Cards',
    icon: 'ri-bar-chart-box-line',
    to: '/cards',
  }" />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle :item="{
    heading: 'Forms & Tables',
  }" />
  <VerticalNavLink :item="{
    title: 'Form Layouts',
    icon: 'ri-layout-4-line',
    to: '/form-layouts',
  }" />

  <VerticalNavLink :item="{
    title: 'Tables',
    icon: 'ri-table-alt-line',
    to: '/tables',
  }" />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle :item="{
    heading: 'Others',
  }" />

  <VerticalNavLink :item="{
    title: 'Raise Support',
    href: 'https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/issues',
    icon: 'ri-lifebuoy-line',
    target: '_blank',
  }" />
</template>
