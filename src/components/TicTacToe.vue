<template>
  <div class="flex items-center justify-center h-full">
    <div
      class="relative grid grid-cols-3 grid-rows-3 h-[300px] w-[300px] mx-auto"
    >
      <button data-index="0" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('0')"
        >
        </span>
        <span v-if="clickedOCells.includes('0')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>
      </button>
      <button data-index="1" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('1')"
        >
        </span>
        <span v-if="clickedOCells.includes('1')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="2" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('2')"
        >
        </span>
        <span v-if="clickedOCells.includes('2')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="3" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('3')"
        >
        </span>
        <span v-if="clickedOCells.includes('3')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="4" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('4')"
        >
        </span>
        <span v-if="clickedOCells.includes('4')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="5" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('5')"
        >
        </span>
        <span v-if="clickedOCells.includes('5')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="6" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('6')"
        >
        </span>
        <span v-if="clickedOCells.includes('6')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="7" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('7')"
        >
        </span>
        <span v-if="clickedOCells.includes('7')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <button data-index="8" class="border" @click.prevent="handleCellClick">
        <span
          class="block w-full h-full relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-20 before:border-b-4 before:border-pink before:rotate-45 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:border-b-4 after:border-pink after:-rotate-45"
          v-if="clickedXCells.includes('8')"
        >
        </span>
        <span v-if="clickedOCells.includes('8')" class="block border-black border-4 rounded-[50%] w-5/6 h-5/6 mx-auto"></span>

      </button>
      <div class="absolute h-full w-full bg-white/75 flex items-center justify-center left-0 top-0" v-if="isOver">
        <div class="text-center">
            <p v-if="isWin">You won!</p>
            <p v-if="isLose">You lost!</p>
            <p v-if="isDraw">It's a draw!</p>
            <button @click.prevent="resetGame">Restart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TictactoeGame",
  data() {
    return {
      winningCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      isWin: false,
      isLose: false,
      isOver: false,
      isDraw: false,
      clickedXCells: [],
      clickedCells: [],
      clickedOCells: [],
    };
  },
  methods: {
    handleCellClick(e) {
      if (
        this.clickedXCells.includes(e.target.dataset.index)
      )
        return;
      this.clickedXCells.push(e.target.dataset.index);
      this.clickedCells.push(e.target.dataset.index);
      this.checkResult('x')
      this.initOPlayer()
    },
    initOPlayer() {
        if (this.isOver) return
      let random = Math.floor(Math.random() * 9);
      while (this.clickedCells.includes(`${random}`)) {
        random = Math.floor(Math.random() * 9);
      }
      this.clickedOCells.push(`${random}`);
      this.clickedCells.push(`${random}`);
      this.checkResult('o')
    },
    checkResult(player) {
        if (this.clickedXCells.length < 3 || this.clickedOCells < 3) return
        if (this.clickedOCells.length >= 3 && player === 'o') {
            this.clickedOCells = this.clickedOCells.sort()
            
            for (let i = 0; i < this.winningCombos.length; i++) {
                let matches = 0;
                this.winningCombos[i].forEach(num => {
                    if (this.clickedOCells.includes(`${num}`)) matches += 1
                });
                if (matches === 3) {
                    this.isLose = true
                    this.isOver = true
                    break;
                }
            }
        }
        if (this.clickedXCells.length >= 3 && player === 'x') {
            this.clickedXCells = this.clickedXCells.sort()
            for (let i = 0; i < this.winningCombos.length; i++) {
                let matches = 0;
                this.winningCombos[i].forEach(num => {
                    if (this.clickedXCells.includes(`${num}`)) matches += 1
                });
                console.log('matches x', matches)
                if (matches === 3) {
                    this.isWin = true
                    this.isOver = true
                    break;
                }
            }
        }
        if (this.clickedCells.length === 9) {
            if (!this.isWin && !this.isLose) this.isDraw = true
        }
    },
    resetGame() {
        this.isDraw = false
        this.isOver = false
        this.isLose = false
        this.isWin = false
        this.clickedCells = []
        this.clickedXCells = []
        this.clickedOCells = []
    }
  },
  
};
</script>

<style></style>
