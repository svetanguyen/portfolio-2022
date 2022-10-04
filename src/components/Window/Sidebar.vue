<template>
  <div class="shadow-lg p-4">
    <ul class="flex items-center text-xl relative text-ellipsis overflow-hidden">
      <li
        class="relative folder pl-4"
        :class="{
          closed: !mainFolderOpened,
          'last-opened': folder4Opened,
        }"
      >
      <input class="hidden" type="checkbox" id="mainfolder" v-model="mainFolderOpened" />
      <label class="cursor-pointer" for="mainfolder">
        <item-opened
          v-if="mainFolderOpened"
          class="absolute z-1 top-2 left-0 bg-white"
        />
        <item-closed
          v-if="!mainFolderOpened"
          class="absolute z-1 top-2 left-0 bg-white"
        />
      </label>
        <p class="ml-2 flex items-center gap-2">
          <computer-icon class="w-5 h-5" />
          <span class="opacity-80 whitespace-nowrap">Sveta's portfolio</span>
        </p>
        <ul v-if="mainFolderOpened" class="leading-snug text-xl relative pl-9">
          <li class="relative folder pl-5">
      <input class="hidden" type="checkbox" id="folder1" v-model="folder1Opened" />
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
              <img
                class="w-5 h-5"
                :src="require(`../../assets/images/heart.png`)"
                alt="heart"
              />
              <span class="opacity-80 whitespace-nowrap"> Home </span>
            </div>

            <ul v-if="folder1Opened" class="pl-1">
              <li class="flex items-center file relative gap-2">
                <img
                  class="w-5 h-5"
                  :src="require(`../../assets/images/notepad.png`)"
                  alt="notepad"
                />
                <span class="opacity-80 whitespace-nowrap"> Hello </span>
              </li>
            </ul>
          </li>
          <li class="relative folder pl-5">
            <input class="hidden" type="checkbox" id="folder2" v-model="folder2Opened" />
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
              <img
                class="w-5 h-5"
                :src="require(`../../assets/images/document.png`)"
                alt="document"
              />
              <span class="opacity-80 whitespace-nowrap"> About me </span>
            </div>
            <ul v-if="folder2Opened" class="pl-1">
              <li class="flex file relative items-center gap-2">
                <img
                  class="w-5 h-5"
                  :src="require(`../../assets/images/notepad.png`)"
                  alt="notepad"
                />
                <span class="opacity-80 whitespace-nowrap"> Info </span>
              </li>
              <li class="flex file relative items-center gap-2">
                <img
                  class="w-5 h-5"
                  :src="require(`../../assets/images/notepad.png`)"
                  alt="notepad"
                />
                <span class="opacity-80 whitespace-nowrap"> Skills </span>
              </li>
              <li class="flex file relative items-center gap-2">
                <img
                  class="w-5 h-5"
                  :src="require(`../../assets/images/notepad.png`)"
                  alt="notepad"
                />
                <span class="opacity-80 whitespace-nowrap"> Links </span>
              </li>
            </ul>
          </li>
          <li class="relative folder pl-5">
            <input class="hidden" type="checkbox" id="folder3" v-model="folder3Opened" />
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
              <img
                class="w-5 h-5"
                :src="require(`../../assets/images/folder.png`)"
                alt="folder"
              />
              <span class="opacity-80 whitespace-nowrap"> Work </span>
            </div>
            <ul v-if="folder3Opened" class="pl-1">
              <li class="flex file relative items-center gap-2">
                <img
                  class="w-5 h-5"
                  :src="require(`../../assets/images/notepad.png`)"
                  alt="notepad"
                />
                <span class="opacity-80 whitespace-nowrap"> Get in touch </span>
              </li>
            </ul>
          </li>
          <li class="relative folder pl-5">
            <input class="hidden" type="checkbox" id="folder4" v-model="folder4Opened" />
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
              <img
                class="w-5 h-5"
                :src="require(`../../assets/images/files.png`)"
                alt="files"
              />
              <span class="opacity-80 whitespace-nowrap"> Contact </span>
            </div>
            <ul v-if="folder4Opened" class="pl-1">
              <li class="flex file relative items-center gap-2">
                <img
                  class="w-5 h-5"
                  :src="require(`../../assets/images/notepad.png`)"
                  alt="notepad"
                />
                <span class="opacity-80 whitespace-nowrap"> Contact form </span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
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
