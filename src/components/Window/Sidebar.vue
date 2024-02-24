<template>
  <div class="bg-pink-light">
    <div class="shadow-lg p-4 bg-white overflow-scroll h-full">
      <ul class="flex items-center text-xl relative text-ellipsis">
        <li
          class="relative folder pl-4"
          :class="{
            closed: !mainFolderOpened,
          }"
        >
          <input
            class="hidden"
            type="checkbox"
            id="mainfolder"
            v-model="mainFolderOpened"
          />
          <label class="cursor-pointer" for="mainfolder">
            <item-opened
              v-if="mainFolderOpened"
              class="absolute z-1 top-2 left-0 bg-white"
            />
            <item-closed
              v-if="!mainFolderOpened"
              class="absolute z-1 top-2 left-0 bg-white"
            />
            <router-link
              class="ml-2 flex items-center gap-2"
              :to="{
                name: 'Home',
                query: {
                  max: $route.query.max ? 'folder' : '',
                  folder: 'portfolio',
                  file: $route.query.file ? $route.query.file : '',
                  active: 'folder'
                },
              }">
              <computer-icon class="w-5 h-5" />
              <span :class="{
                      'bg-blue text-white': $route.query.folder === 'portfolio',
                      'opacity-80 whitespace-nowrap': true
                    }"
                >Sveta's portfolio</span
              >
            </router-link>
          </label>
          <ul
            v-if="mainFolderOpened"
            class="leading-snug text-xl relative pl-9"
          >
            <li class="relative folder pl-5">
              <input
                class="hidden"
                type="checkbox"
                id="folder2"
                v-model="folder2Opened"
              />
              <label class="cursor-pointer" for="folder2">
                <item-opened
                  v-if="folder2Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
                <item-closed
                  v-if="!folder2Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
              </label>
              <div class="flex items-center gap-2">
                <router-link
                  class="flex items-center"
                  :to="{
                    name: 'Home',
                    query: {
                      max: $route.query.max ? 'folder' : '',
                      folder: 'about',
                      file: $route.query.file ? $route.query.file : '',
                      active: 'folder'
                    },
                  }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/heart.png`)"
                    alt="heart"
                    width="20"
                    height="20"
                  />
                  <span
                    :class="{
                      'bg-blue text-white': $route.query.folder === 'about',
                    }"
                    class="opacity-80 inline-block px-2 whitespace-nowrap"
                  >
                    About me
                  </span>
                </router-link>
              </div>
              <ul v-if="folder2Opened" class="pl-1">
                <li class="file relative items-center">
                  <router-link
                    class="flex items-center"
                    :to="{
                      name: 'Home',
                      query: {
                        max: $route.query.max ? 'folder' : '',
                        folder: 'info',
                        file: $route.query.file ? $route.query.file : '',
                        active: 'folder'
                      },
                    }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                      width="20"
                      height="20"
                    />
                    <span
                      :class="{
                        'bg-blue text-white': $route.query.folder === 'info',
                      }"
                      class="opacity-80 px-2 whitespace-nowrap"
                    >
                      Info
                    </span>
                  </router-link>
                </li>
                <li class="flex file relative items-center gap-2">
                  <router-link
                    class="flex items-center"
                    :to="{
                      name: 'Home',
                      query: {
                        max: $route.query.max ? 'file' : '',
                        folder: $route.query.folder ? $route.query.folder : '',
                        file: 'skills',
                        active: 'file'
                      },
                    }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                      width="20"
                      height="20"
                    />
                    <span
                      :class="{
                        'bg-blue text-white': $route.query.file === 'skills',
                      }"
                      class="opacity-80 px-2 whitespace-nowrap"
                    >
                      Skills
                    </span>
                  </router-link>
                </li>
                <li class="flex file relative items-center gap-2">
                  <a
                    class="flex items-center underline"
                    href="https://drive.google.com/file/d/1FwnSy8mNUDzxNsYGdi91uahT8rdDuvky/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/document.png`)"
                      alt="notepad"
                      width="20"
                      height="20"
                    />
                    <span class="opacity-80 px-2 whitespace-nowrap">
                      Resume
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="relative folder pl-5">
              <input
                class="hidden"
                type="checkbox"
                id="folder3"
                v-model="folder3Opened"
              />
              <label class="cursor-pointer" for="folder3">
                <item-opened
                  v-if="folder3Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
                <item-closed
                  v-if="!folder3Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
              </label>
              <div class="flex items-center gap-2">
                <router-link
                  class="flex items-center"
                  :to="{
                    name: 'Home',
                    query: {
                      max: $route.query.max ? 'folder' : '',
                      folder: 'works',
                      file: $route.query.file ? $route.query.file : '',
                      active: 'folder'
                    },
                  }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/folder.png`)"
                    alt="folder"
                    width="20"
                    height="20"
                  />
                  <span
                    :class="{
                      'bg-blue text-white': $route.query.folder === 'works',
                    }"
                    class="opacity-80 px-2 whitespace-nowrap"
                  >
                    Work
                  </span>
                </router-link>
              </div>
              <ul v-if="folder3Opened" class="pl-1">
                <li class="flex file relative items-center gap-2">
                  <router-link
                    class="flex items-center"
                    :to="{
                      name: 'Home',
                      query: {
                        max: $route.query.max ? 'folder' : '',
                        folder: $route.query.folder ? $route.query.folder : '',
                        file: 'worksList',
                        active: 'file'
                      },
                    }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                      width="20"
                      height="20"
                    />
                    <span
                      :class="{
                        'bg-blue text-white': $route.query.file === 'worksList',
                      }"
                      class="opacity-80 px-2 whitespace-nowrap"
                    >
                      Projects
                    </span>
                  </router-link>
                </li>
                <li class="flex file relative items-center gap-2">
                  <a
                    class="flex items-center underline"
                    href="https://github.com/svetanguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/github.png`)"
                      alt="notepad"
                      width="20"
                      height="20"
                    />
                    <span class="opacity-80 px-2 whitespace-nowrap">
                      Github
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="relative before:absolute before:-left-[47px] before:top-1/2 before:-translate-y-1/2 before:right-full before:border-dashed before:w-[70px] before:border-black before:border-b-[0.3px] pl-5"
            >
              <div class="flex items-center gap-2">
                <router-link
                  class="flex items-center"
                  :to="{
                    name: 'Home',
                    query: {
                      max: $route.query.max ? 'contact' : '',
                      file: 'contact',
                      folder: $route.query.folder ? $route.query.folder : '',
                      active: 'file'
                    },
                  }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/files.png`)"
                    alt="files"
                    width="20"
                    height="20"
                  />
                  <span
                    :class="{
                      'bg-blue text-white': $route.query.folder === 'contact',
                    }"
                    class="opacity-80 px-2 whitespace-nowrap"
                  >
                    Contact
                  </span>
                </router-link>
              </div>
            </li>
            <li
              class="relative before:absolute before:-left-[47px] before:top-1/2 before:-translate-y-1/2 before:right-full before:border-dashed before:w-[70px] before:border-black before:border-b-[0.3px] pl-5"
            >
              <div class="flex items-center gap-2">
                <router-link
                  class="flex items-center"
                  :to="{
                    name: 'Home',
                    query: {
                      max: '',
                      file: 'calculator',
                      folder: $route.query.folder ? $route.query.folder : '',
                      active: 'file'
                    },
                  }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/calculator.png`)"
                    alt="files"
                    width="20"
                    height="20"
                  />
                  <span
                    :class="{
                      'bg-blue text-white': $route.query.folder === 'calculator',
                    }"
                    class="opacity-80 px-2 whitespace-nowrap"
                  >
                    Calculator
                  </span>
                </router-link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemOpened from "../../icons/ItemOpened.vue";
import ItemClosed from "../../icons/ItemClosed.vue";
import ComputerIcon from "../../icons/Computer.vue";
export default {
  name: "sidebar-component",
  data() {
    return {
      mainFolderOpened: true,
      folder1Opened: true,
      folder2Opened: true,
      folder3Opened: true,
    };
  },
  components: {
    ItemOpened,
    ItemClosed,
    ComputerIcon,
  },
};
</script>

<style lang="scss" scoped>
.folder {
  &:before {
    content: "";
    position: absolute;
    top: 14px;
    bottom: 15px;
    left: 5px;
    border-left: 0.3px dashed var(--black);
  }
  &.last-opened {
    &::before {
      bottom: 43px;
    }
  }
  & > ul .folder {
    &:after {
      content: "";
      position: absolute;
      right: 100%;
      width: 46px;
      top: 12px;
      border-bottom: 0.3px dashed var(--black);
    }
  }
}
.file {
  &:before {
    content: "";
    position: absolute;
    right: 100%;
    width: 18px;
    top: 13px;
    border-bottom: 0.3px dashed var(--black);
  }
}
</style>
