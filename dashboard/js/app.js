// Data Controller
const DataController = (() => {

})();

// UI Controller
const UIController = (() => {

  const DOMStrings = {
    cardBtn: '',
    sendBtn: '',
    depositBtn: '#depositBtn',
    depositCardId: '',
    depositamountInput: '#depositAmount',
    buggerBtn: '.bugger-show',
    sideNav: 'aside',
    liteCoin: '#litecoin',
    btcCoin: '#btc',
    xrpCoin: '#xrp',
    copyId: '#copy',
    depositForm: '#depositForm',
    plansInput: '#planInput',
    cryptoType: '#cryptoTypeInput',
    withdrawAmountInput: '#withdrawAmount',
    withdrawBtn: '#withdrawBtn'
  }

  return {
    getInput: () => {
      return {
        toggleBtn: document.querySelector(DOMStrings.buggerBtn),
        navBar: document.querySelector(DOMStrings.sideNav),
        copy: document.querySelector(DOMStrings.copyId),
        depFormSubmit: document.querySelector(DOMStrings.depositForm),
        depBtns: document.querySelector(DOMStrings.depositBtn),
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
    document.querySelector(DOM.depositBtn).addEventListener('click', btnLoader)
    document.querySelector(DOM.depositForm).addEventListener('click', formSubmit)
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        btnLoader()
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

  // Deposit Form Submit
  const formSubmit = () => {
    // console.log('hello')
    const AmountValue = UICtrl.getInput().depAmount
    console.log(AmountValue, 'Hello world');
  }

  const btnLoader = (e) => {
    // e.preventDefault()
    formSubmit();
    const innerLoader = UICtrl.getInput().depBtns
    // innerLoader.innerText = 'Sending...'
    setTimeout(() => {
      innerLoader.innerText = 'Send'
    },2000)
    innerLoader.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"><span class="sr-only">Loading...</span></span> <span class="sending">Sending...</span>`
    
  }


  return {
    init: () => {
      console.log('Application has Started...');
      setUpEventListeners()
    }
  }

})(DataController, UIController);


Controller.init();