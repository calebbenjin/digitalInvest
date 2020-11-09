// Data Controller
const DataController = (function() {

})();

// UI Controller
const UIController = (function() {

  const DOMStrings = {
    // Deposit form
    depositForm: '#deposit__form',
    amountInput: '#amount__input',
    depositBtn: '#deposit__btn',
    buggerBtn: '.bugger-show',
    sideNav: 'aside',
    passwordReset: '#resetPassword',
  }

  return {
    getDomString: () => {
      return DOMStrings;
    },
    getInput: () => {
      return {
        amount: document.querySelector(DOMStrings.amountInput).value
      }
    }
  }
})();



// Global App Controller 
const Controller = (function(DataCtrl, UICtrl) {

  const LoadEventListeners = () => {
    let DOMStrings = UICtrl.getDomString() 

    // Toggle
    document.querySelector(DOMStrings.buggerBtn).addEventListener('click', ctrlToggleBtn);

    // 
    document.querySelector(DOMStrings.depositForm).addEventListener('submit', formSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault()
        return false
      }
    })
  }
 
  

  // ToggleBtn Function
  const ctrlToggleBtn = () => {
    const toggleBtn = document.querySelector('.bugger-show')
    toggleBtn.classList.toggle('bugger-style'); 

    const sideNavbar = document.querySelector('aside')
    sideNavbar.classList.toggle('show-nav');

  }

  const btnLoader = (e) => {
    const loaderBtn = document.querySelector('#depositBtn');
    setTimeout(() => {
      loaderBtn.innerText = 'Send'
    },2000)
    loaderBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"><span class="sr-only">Loading...</span></span> <span class="sending">Sending...</span>`
  }

  const checkAmountLength = (min) => {
    const inputValue = UICtrl.getInput().amount
    const smallTag = document.querySelector('small');
    if(inputValue < Number(min) || inputValue === '') {
      smallTag.style.display = 'block'
      smallTag.style.fontWeight = 'bold'
      setTimeout(() => {
       smallTag.style.display = 'none'
      },2000)
    } else {
      smallTag.style.display = 'none'
      btnLoader()
    }
    
  }
  

  // Deposit Form Submit
  const formSubmit = (e) => {
    e.preventDefault()
    checkAmountLength(500)
    // btnLoader()
  }

  const resetPassword = document.querySelector('#resetPassword', function(e) {
    console.log('Hello password')
  })


  return {
    init: () => {
      console.log('Application has Started...');
      LoadEventListeners();
    }
  }

})(DataController, UIController);

Controller.init();