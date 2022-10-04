<template>
  <div class="grid grid-cols-4">
   <div class="col-span-4 bg-pink-light h-6 text-right">
       <p>{{ result }}</p>
   </div>
   <button class="col-span-2" @click="onReset">C</button>
   <button class="col-span-1" @click="updateSign">+/-</button>
   <button class="col-span-1">÷</button>
   <button class="col-span-1" @click="updateNum(7)">7</button>
   <button class="col-span-1" @click="updateNum(8)">8</button>
   <button class="col-span-1" @click="updateNum(9)">9</button>
   <button class="col-span-1">x</button>
   <button class="col-span-1" @click="updateNum(4)">4</button>
   <button class="col-span-1" @click="updateNum(5)">5</button>
   <button class="col-span-1" @click="updateNum(6)">6</button>
   <button class="col-span-1">-</button>
   <button class="col-span-1" @click="updateNum(1)">1</button>
   <button class="col-span-1" @click="updateNum(2)">2</button>
   <button class="col-span-1" @click="updateNum(3)">3</button>
   <button class="col-span-1" @click="updateOperation('addition')">+</button>
   <button class="col-span-2">0</button>
   <button class="col-span-1">.</button>
   <button class="col-span-1" @click="onShowResult">=</button>
  </div>
</template>

<script>
export default {
  name: "calculator-component",
  data() {
      return {
          result: 0,
          prevEquation: 0,
          equation: 0,
          prevOperation: 'none',
          currentOperation: 'none',
          currentNum: 0,
          typedDigits: 0
      }
  },
  methods: {
      onAddition() {
        this.prevEquation = this.equation
        this.equation += this.currentNum
      },
      updateSign() {
          this.equation = this.prevEquation
          this.currentOperation = this.prevOperation
          this.updateNum(-this.currentNum)
      },
      updateNum(num) {
          if (this.typedDigits > 0 && this.equation !== 0) {
            this.currentNum = parseFloat(this.currentNum + '' + num)
            console.log('this.currentNum',  this.currentNum)
            this.result = this.currentNum
            console.log('this.result',  this.result)

          } else {
              this.currentNum = num
              this.result = num
          }
          if (this.equation === 0) {
              this.equation = this.currentNum
          }
          this.typedDigits += 1
          this.onOperation(num)
      },
      updateOperation(operation) {
          this.prevOperation = this.currentOperation
        this.currentOperation = operation
        this.typedDigits = 0
      },
      onOperation() {
          switch (this.currentOperation) {
              case 'addition':
                  this.onAddition()
                  break;
                case 'none': 
                console.log('a')
                break;

                    
          }    
          this.prevOperation = this.currentOperation
          this.currentOperation = 'none' 
      },
      onReset() {
          this.result = 0
          this.equation = 0
          this.currentOperation = 'none'
          this.currentNum = 0
          this.prevEquation = 0
          this.prevOperation = 'none'
      },
      onShowResult() {
          this.result = this.equation
      }

  }
};
</script>

<style lang="scss">
</style>
