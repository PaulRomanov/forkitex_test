import { createPinia } from 'pinia';
import { defineStore } from "pinia";

export const pinia = createPinia();

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuItems: [
      { id: 1, text: 'Преимущества Теle2', link: '#' },
      { id: 2, text: 'Тарифы', link: '#' },
      { id: 3, text: 'Акции и спецпредложения', link: '#' },
      { id: 4, text: 'Промотариф Tele2', link: '#' },
      { id: 5, text: 'Технология eSIM', link: '#' },
      { id: 6, text: 'Подключение нового абонента', link: '#' },
    ],
  }),
})