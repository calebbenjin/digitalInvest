// Data Controller
const DataController = (() => {

})();

// UI Controller
const UIController = (() => {

  const DOMStrings = {
    // Deposit form
    depositForm: '#deposit__form',
    amountInput: '#amount__input',
    planType: '#plan__input',
    cryptoType: '#cryptoTypeInput',
    depositBtn: '#deposit__btn',
    depositCardId: '',
    
    buggerBtn: '.bugger-show',
    sideNav: 'aside',
    liteCoin: '#litecoin',
    btcCoin: '#btc',
    xrpCoin: '#xrp',
    copyId: '#copy',
    plansInput: '#planInput',

    // plans selector
    plans: [
      {
        plan1: '#plan1',
        plan2: '#plan2',
        plan3: '#plan3',
      }
    ],
    
    withdrawAmountInput: '#withdrawAmount',
    withdrawBtn: '#withdrawBtn'
  }

  return {
    getInput: () => {
      return {
        depForm: document.querySelector(DOMStrings.depositForm),
        amountInput: document.querySelector(DOMStrings.amountInput),
        toggleBtn: document.querySelector(DOMStrings.buggerBtn),
        navBar: document.querySelector(DOMStrings.sideNav),
        copy: document.querySelector(DOMStrings.copyId),
        depBtns: document.querySelector(DOMStrings.depositBtn),
        // plansCard: document.querySelector(DOMStrings.plans),

        // depAmount: document.querySelector(DOMStrings.depositAmount).value
      }
    },

    getDomString: () => {
      return DOMStrings;
    }
  }
})();



// Global App Controller 
const Controller = ((DataCtrl, UICtrl) => {

  const setUpEventListeners = () => {
    let DOM = UICtrl.getDomString() 
    
    document.querySelector(DOM.buggerBtn).addEventListener('click', ctrlToggleBtn)
    // document.querySelector(DOM.copyId).addEventListener('click', copyContent)
    // document.querySelector(DOM.plans).addEventListener('click', cardPlans)
    document.querySelector(DOM.depositForm).addEventListener('submit', formSubmit)
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        // btnLoader()
        formSubmit();
      }
    })
  }


  // ToggleBtn Function
  const ctrlToggleBtn = () => {
    // 
    const togleBtn = UICtrl.getInput().toggleBtn;
    togleBtn.classList.toggle('bugger-style'); 

    const sideNavbar = UICtrl.getInput().navBar;
    sideNavbar.classList.toggle('show-nav');

  }

  // OnClick copyText Function
  // const copyContent = () => {
  //   const walletAddress = document.querySelector('#walletAddress').innerText
  //   walletAddress.select()

  //   // const copyText = UICtrl.getInput().copy;
  //   // console.log(copyText)
  //   // copyText.innerText
  //   // copyText.select()
  //   // console.log(copyText.innerText)
  //   document.execCommand("copy")
  // }

  // const cardPlans = () => {
  //   const plansArr = UICtrl.getInput().plansCard
  //   console.log(plansArr)
  // }
  // cardPlans()


  const btnLoader = (e) => {
    const innerLoader = UICtrl.getInput().depBtns
    innerLoader.innerText = 'Sending...'
    setTimeout(() => {
      innerLoader.innerText = 'Send'
    },2000)
    innerLoader.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"><span class="sr-only">Loading...</span></span> <span class="sending">Sending...</span>`
    
  }


  // showSuccess
  const small = document.querySelector('small');
  small.style.display = 'none'
  const checkAmountLength = (min) => {
    const inputValue = UICtrl.getInput().amountInput
    
    
    if(inputValue.value < Number(min) || inputValue.value.trim() === '') {
      small.style.display = 'block'
        small.style.fontWeight = 'bold'
      setTimeout(() => {
        small.style.display = 'none'
      },2000)
      // small
    } else {
      small.style.display = 'none'
      btnLoader()
    }
  }
  

  // Deposit Form Submit
  const formSubmit = (e) => {
    e.preventDefault()
    
    checkAmountLength(500)
    // btnLoader()
  }

  


  return {
    init: () => {
      console.log('Application has Started...');
      setUpEventListeners()
    }
  }

})(DataController, UIController);

Controller.init();