<template>
  <div class="bg-pink-light">
    <div class="bg-pink-light mb-1">
      <p class="rounded-lg shadow-xl-hovered py-1 px-3 text-xl leading-snug opacity-80">All folders</p>
      </div>
    <div class="shadow-lg p-4 bg-white overflow-y-scroll overflow-x-hidden h-full">
      <ul
        class="flex items-center text-xl relative text-ellipsis overflow-hidden"
      >
        <li
          class="relative folder pl-4"
          :class="{
            closed: !mainFolderOpened,
            'last-opened': folder4Opened,
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
            <p class="ml-2 flex items-center gap-2">
              <computer-icon class="w-5 h-5" />
              <span class="opacity-80 whitespace-nowrap"
                >Sveta's portfolio</span
              >
            </p>
          </label>
          <ul
            v-if="mainFolderOpened"
            class="leading-snug text-xl relative pl-9"
          >
            <li class="relative folder pl-5">
              <input
                class="hidden"
                type="checkbox"
                id="folder1"
                v-model="folder1Opened"
              />
              <label class="cursor-pointer" for="folder1">
                <item-opened
                  v-if="folder1Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
                <item-closed
                  v-if="!folder1Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
              </label>
              <div class="flex items-center gap-2">
                <router-link
                  class="flex items-center gap-2"
                  :to="{ name: 'Home' }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/heart.png`)"
                    alt="heart"
                  />
                  <span class="opacity-80 whitespace-nowrap"> Home </span>
                </router-link>
              </div>

              <ul v-if="folder1Opened" class="pl-1">
                <li class="flex items-center file relative gap-2">
                  <router-link
                    class="flex items-center gap-2"
                    :to="{ name: 'Home', query: { max: 'hello' } }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                    />
                    <span class="opacity-80 whitespace-nowrap"> Hello </span>
                  </router-link>
                </li>
              </ul>
            </li>
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
                  class="flex items-center gap-2"
                  :to="{ name: 'About' }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/document.png`)"
                    alt="document"
                  />
                  <span class="opacity-80 whitespace-nowrap"> About me </span>
                </router-link>
              </div>
              <ul v-if="folder2Opened" class="pl-1">
                <li class="file relative items-center">
                  <router-link
                    class="flex items-center gap-2"
                    :to="{ name: 'About', query: { max: 'info' } }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                    />
                    <span class="opacity-80 whitespace-nowrap"> Info </span>
                  </router-link>
                </li>
                <li class="flex file relative items-center gap-2">
                  <router-link
                    class="flex items-center gap-2"
                    :to="{ name: 'About', query: { max: 'skills' } }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                    />
                    <span class="opacity-80 whitespace-nowrap"> Skills </span>
                  </router-link>
                </li>
                <li class="flex file relative items-center gap-2">
                  <router-link
                    class="flex items-center gap-2"
                    :to="{ name: 'About', query: { max: 'links' } }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                    />
                    <span class="opacity-80 whitespace-nowrap"> Links </span>
                  </router-link>
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
                  class="flex items-center gap-2"
                  :to="{ name: 'Works' }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/folder.png`)"
                    alt="folder"
                  />
                  <span class="opacity-80 whitespace-nowrap"> Work </span>
                </router-link>
              </div>
              <ul v-if="folder3Opened" class="pl-1">
                <li class="flex file relative items-center gap-2">
                  <router-link
                    class="flex items-center gap-2"
                    :to="{ name: 'Works', query: { max: 'contact' } }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                    />
                    <span class="opacity-80 whitespace-nowrap">
                      Get in touch
                    </span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="relative folder pl-5">
              <input
                class="hidden"
                type="checkbox"
                id="folder4"
                v-model="folder4Opened"
              />
              <label class="cursor-pointer" for="folder4">
                <item-opened
                  v-if="folder4Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
                <item-closed
                  v-if="!folder4Opened"
                  class="absolute z-1 top-2 left-0 bg-white"
                />
              </label>
              <div class="flex items-center gap-2">
                <router-link
                  class="flex items-center gap-2"
                  :to="{ name: 'Contacts' }"
                >
                  <img
                    class="w-5 h-5"
                    :src="require(`../../assets/images/files.png`)"
                    alt="files"
                  />
                  <span class="opacity-80 whitespace-nowrap"> Contact </span>
                </router-link>
              </div>
              <ul v-if="folder4Opened" class="pl-1">
                <li class="flex file relative items-center gap-2">
                  <router-link
                    class="flex items-center gap-2"
                    :to="{ name: 'Contacts', query: { max: 'form' } }"
                  >
                    <img
                      class="w-5 h-5"
                      :src="require(`../../assets/images/notepad.png`)"
                      alt="notepad"
                    />
                    <span class="opacity-80 whitespace-nowrap">
                      Contact form
                    </span>
                  </router-link>
                </li>
              </ul>
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
      folder4Opened: true,
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
