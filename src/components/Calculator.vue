<template>
  <div class="lg:max-w-[500px] mx-auto">
    <div class="bg-white p-3">
      <div class="grid grid-cols-4 bg-white gap-3">
        <div class="col-span-4 bg-pink-light h-12 text-right p-2 shadow-lg rounded-lg">
          <p>{{ result }}</p>
        </div>
        <button class="col-span-2 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" @click="onReset">C</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" @click="updateSign">+/-</button>
        <button
          class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          data-operation="divide"
          @click="updateOperation"
        >
          ÷
        </button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="7" @click="updateNum">7</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="8" @click="updateNum">8</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="9" @click="updateNum">9</button>
        <button
          class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          data-operation="multiply"
          @click="updateOperation"
        >
          x
        </button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="4" @click="updateNum">4</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="5" @click="updateNum">5</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="6" @click="updateNum">6</button>
        <button
          class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          data-operation="substract"
          @click="updateOperation"
        >
          -
        </button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="1" @click="updateNum">1</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="2" @click="updateNum">2</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="3" @click="updateNum">3</button>
        <button
          class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          data-operation="addition"
          @click="updateOperation"
        >
          +
        </button>
        <button class="col-span-2 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" data-num="0" @click="updateNum">0</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" @click="updateDecimal">.</button>
        <button class="col-span-1 bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" @click="onShowResult">=</button>
      </div>
    </div>
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
      prevOperation: "none",
      currentOperation: "none",
      currentNum: 0,
      typedDigitsCount: 0,
      firstNum: true,
      finishedOperation: false,
      clicked: false,
      decimalPoint: false
    };
  },
  methods: {
    onAddition() {
      this.equation += parseFloat(this.currentNum);
    },
    onSubstraction() {
      this.equation -= parseFloat(this.currentNum);
    },
    onDivision() {
      this.equation /= parseFloat(this.currentNum);
    },
    onMultiplication() {
      this.equation *= parseFloat(this.currentNum);
    },
    updateSign() {
      if (this.currentNum !== 0) {
        if (!this.firstNum) this.equation = this.prevEquation;
        this.currentNum = -this.currentNum;
        if (this.firstNum) this.equation = this.currentNum;
        this.result = this.currentNum;
        this.firstNum = false;
      }
    },
    updateDecimal() {
        this.decimalPoint = !this.decimalPoint
    },
    updateNum(e, num) {
      const currentNum = e?.target ? e.target.dataset.num : num;
      if (this.finishedOperation) {
        this.onReset();
        this.currentNum = parseFloat(currentNum);
        this.result = this.currentNum;
        this.finishedOperation = false;
      } else if (this.decimalPoint) {
          this.currentNum = this.currentNum + '.' + currentNum
          this.result = this.currentNum
          this.decimalPoint = false
      }  else if ((this.typedDigitsCount > 0 && this.equation !== 0) || this.firstNum) {
        this.currentNum = parseFloat(this.currentNum + "" + currentNum);
        this.result = this.currentNum;
      } else {
        this.currentNum = parseFloat(currentNum);
        this.result = parseFloat(currentNum);
      }
      
      if ((this.currentOperation === "none" && this.equation === 0) || this.firstNum) {
        this.prevEquation = this.equation;
        this.equation = parseFloat(this.currentNum);
      }
      this.typedDigitsCount += 1;
    },
    updateOperation(e) {
      this.finishedOperation = false;
      this.firstNum = false;
      if (!this.clicked && !this.firstNum) this.onOperation();
      this.prevOperation = "none";
      this.currentOperation = e.target.dataset.operation;
      this.typedDigitsCount = 0;
      this.prevEquation = this.equation;
      this.result = this.equation;
      this.clicked = true;
    },
    onOperation() {
      switch (this.currentOperation) {
        case "addition":
          this.onAddition();
          break;
        case "substract":
          this.onSubstraction();
          break;
        case "divide":
          this.onDivision();
          break;
        case "multiply":
          this.onMultiplication();
          break;
        case "none":
          break;
      }
      this.prevOperation = this.currentOperation;
      this.currentOperation = "none";
    },
    onReset() {
      this.result = 0;
      this.equation = 0;
      this.currentOperation = "none";
      this.currentNum = 0;
      this.prevEquation = 0;
      this.prevOperation = "none";
      this.typedDigitsCount = 0;
      this.clicked = false
      this.firstNum = true
      this.finishedOperation = false
    },
    onShowResult() {
      this.onOperation();
      this.currentOperation = "none";
      this.prevOperation = "none";
      this.result = this.equation;
      this.currentNum = this.equation;
      this.clicked = false
      this.firstNum = true
      this.finishedOperation = true;
    },
  },
};
</script>

<style lang="scss"></style>
