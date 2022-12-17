<template>
  <div class="mx-2">
    <div class="bg-white p-3">
      <div class="grid grid-cols-4 bg-white gap-3">
        <div class="col-span-4 h-12 text-right p-2">
          <p class="text-xxl">{{ result }}</p>
        </div>
        <button
          class="col-span-2 h-[66px] bg-pink-light rounded-lg shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          @click="onReset"
          aria-label="reset"
        >
          C
        </button>
        <button
          class="col-span-1 h-[66px] bg-pink-light rounded-lg shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          @click="updateSign"
          aria-label="update number sign"
        >
          +/-
        </button>
        <button
          class="col-span-1 h-[66px] bg-pink-light rounded-lg shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          data-operation="divide"
          aria-label="divide"
          @click="updateOperation"
        >
          ÷
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="7"
          data-num="7"
          @click="updateNum"
        >
          7
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="8"
          data-num="8"
          @click="updateNum"
        >
          8
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="9"
          data-num="9"
          @click="updateNum"
        >
          9
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-pink-light shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          data-operation="multiply"
          aria-label="multiply"
          @click="updateOperation"
        >
          x
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="4"
          data-num="4"
          @click="updateNum"
        >
          4
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="5"
          data-num="5"
          @click="updateNum"
        >
          5
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="6"
          data-num="6"
          @click="updateNum"
        >
          6
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-pink-light shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="substract"
          data-operation="substract"
          @click="updateOperation"
        >
          -
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="1"
          data-num="1"
          @click="updateNum"
        >
          1
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="2"
          data-num="2"
          @click="updateNum"
        >
          2
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="3"
          data-num="3"
          @click="updateNum"
        >
          3
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-pink-light shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="add"
          data-operation="addition"
          @click="updateOperation"
        >
          +
        </button>
        <button
          class="col-span-2 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="0"
          data-num="0"
          @click="updateNum"
        >
          0
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="decimal point"
          @click="updateDecimal"
        >
          .
        </button>
        <button
          class="col-span-1 h-[66px] rounded-lg bg-[#FEB0FE] shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="show result"
          @click="onShowResult"
        >
          =
        </button>
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
      decimalPoint: false,
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
        const prevEquation = this.prevEquation
        this.prevEquation = this.equation
        if (!this.firstNum) this.equation = prevEquation;
        this.currentNum = -this.currentNum;
        if (this.firstNum) this.equation = this.currentNum;
        this.result = this.currentNum;
        this.firstNum = false;
      }
    },
    updateDecimal() {
      this.decimalPoint = !this.decimalPoint;
      if (this.decimalPoint) this.currentOperation = "none"
    },
    updateNum(e, num) {
      const currentNum = e?.target ? e.target.dataset.num : num;
      if (this.finishedOperation) {
        this.onReset();
        this.currentNum = parseFloat(currentNum);
        this.result = this.currentNum;
        this.finishedOperation = false;
      } else if (this.decimalPoint) {
        this.currentNum = this.currentNum + "." + currentNum;
        this.result = this.currentNum;
        this.decimalPoint = false;
      } else if (
        (this.typedDigitsCount > 0 && this.equation !== 0) ||
        this.firstNum
      ) {
        this.currentNum = parseFloat(this.currentNum + "" + currentNum);
        this.result = this.currentNum;
      } else {
        this.currentNum = parseFloat(currentNum);
        this.result = parseFloat(currentNum);
      }

      if (
        (this.currentOperation === "none") ||
        this.firstNum
      ) {
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
      this.clicked = false;
      this.firstNum = true;
      this.finishedOperation = false;
    },
    onShowResult() {
      this.onOperation();
      this.currentOperation = "none";
      this.prevOperation = "none";
      this.result = this.equation;
      this.currentNum = this.equation;
      this.clicked = false;
      this.firstNum = true;
      this.finishedOperation = true;
    },
  },
};
</script>

<style lang="scss" scoped>
p,
button {
  font-family: "Mulish", sans-serif;
  font-size: 34px;
}
</style>
