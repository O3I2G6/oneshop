document.addEventListener('DOMContentLoaded', function(){
    var btnSignUp = document.getElementById('btnSignUp');
    var btnLogIn = document.getElementById('btnLogIn');
    var btnBack = document.getElementsByClassName('btn__auth-back');
    var btnSwitch = document.getElementsByClassName('auth__switch-btn')
    var btnSWitchToLogIn =  document.getElementsByClassName('auth__switch-btn-log-in')[0];
    var btnSwitchToSignUp = document.getElementsByClassName('auth__switch-btn-sign-up')[0];
    var modalSignUpLogIn = document.getElementsByClassName('modal-signup-login')[0];
    var modalContentSignUp = document.getElementsByClassName('modal__content-sign-up')[0];
    var modalContentLogIn = document.getElementsByClassName('modal__content-log-in')[0];

    btnSignUp.onclick = function(){
        modalContentLogIn.classList.add('hide');
        modalSignUpLogIn.classList.add('showFlex');
        modalContentSignUp.classList.add('showAnimationScale');
    }

    btnLogIn.onclick = function(){
      modalContentSignUp.classList.add('hide');
      modalSignUpLogIn.classList.add('showFlex');
      modalContentLogIn.classList.add('showAnimationScale');
    }

    if (btnBack) {
      btnBack[0].onclick = function(){
        modalSignUpLogIn.classList.remove('showFlex');
        modalContentSignUp.classList.remove('showAnimationScale');
        modalContentLogIn.classList.remove('hide');
      }
      btnBack[1].onclick = function(){
        modalSignUpLogIn.classList.remove('showFlex');
        modalContentLogIn.classList.remove('showAnimationScale');
        modalContentSignUp.classList.remove('hide');
      }
    }

    if(btnSwitch) {
      btnSWitchToLogIn.onclick = function() {
        modalContentSignUp.classList.add('hide');
        modalContentLogIn.classList.remove('hide');
        modalContentLogIn.classList.add('showAnimationScale');
      }

      btnSwitchToSignUp.onclick = function() {
        modalContentLogIn.classList.add('hide');
        modalContentSignUp.classList.remove('hide');
        modalContentSignUp.classList.add('showAnimationScale');
      }
    }

    // Function Show when hover
    var hoverShow = function (elemtHover, elementShows,classShow){
      elemtHover.onmouseover = function (){
        elementShows.forEach(element => {
          element.classList.add(classShow);
        });
      }

      elemtHover.onmouseout = function (){
        elementShows.forEach(element => {
          element.classList.remove(classShow);
        });
      }
    }

    var clickShow = function (elementClick, elementShow, classShow , elementHide , classHide){
      if(elementClick)
      {
        elementClick.onclick = function () {
          if(elementHide && classHide)
          {
            elementHide.classList.toggle(classHide)
            elementShow.forEach(elementshow => {
              elementshow.classList.toggle(classShow);
            });
          }
          else{
            elementShow.forEach(elementshow => {
              elementshow.classList.toggle(classShow);
            });
          }
        }
      }
    }

    //Show User
    // var btnUser= document.getElementById('idUser');
    // var formUser = document.getElementById('userMenu');
    // var arryEmlemtUser = [formUser];
    // hoverShow(btnUser,arryEmlemtUser,'showBlock');

    //Show Notify
    
    var btnNotify = document.getElementById('btnNotify');
    var formNotify = document.getElementById('blockNotify');
    var arryNotify = [formNotify];
    var shownotify = 'showBlock';
    hoverShow(btnNotify,arryNotify,shownotify);

    //Show Cart List

    var cartForm = document.getElementsByClassName('header__cart-form')[0];
    var cartIcon = document.getElementsByClassName('header__cart-icon')[0];
    var elementCartShows =[cartForm];
    var showcart = 'showFlex';
    hoverShow(cartIcon,elementCartShows,showcart);


      // Show Search
      // GET ELEMENTS PARENT

      var wrapper = document.getElementsByClassName("wrapper")[0];
      var header = document.getElementsByClassName("header")[0];
      var headerWS = document.getElementsByClassName("header__with-search")[0];

      // CREATE ELEMENTS

      var headerSearchSelect = document.createElement("DIV");
      headerSearchSelect.setAttribute("class", "header__with-search--selection");

      var headerSearch = document.createElement("DIV");
      headerSearch.setAttribute("class", "header__search");

      var headerSearchWrap = document.createElement("DIV");
      headerSearchWrap.setAttribute("class", "header__search-wrap-input");

      var btnSearch = document.createElement("button");
      btnSearch.setAttribute("type", "button");
      btnSearch.setAttribute("name", "btnSearch");
      btnSearch.setAttribute("id", "btnSearch");
      btnSearch.setAttribute("class", "btn--search");

      var iconSearchInput = document.createElement("DIV");
      iconSearchInput.setAttribute("class", "search-btn-icon");

      // SEARCH INPUT

      var searchInput = document.createElement("INPUT");
      searchInput.setAttribute("class", "header__search--input");
      searchInput.setAttribute("id", "search__input");
      searchInput.setAttribute("type", "text");
      searchInput.setAttribute("placeholder", "Hàng Quốc Tế -- Giảm 49% ++");
      searchInput.setAttribute("aria-label", "Search");


      var searchSuggestionForm =document.createElement("DIV");
      searchSuggestionForm.setAttribute("class", "search__suggestion-form");
      searchSuggestionForm.setAttribute("id", "suggest_form");

      var searchForm = document.createElement("DIV");
      searchForm.setAttribute("class", "search__form");
      searchForm.setAttribute("id", "suggestion-form");

      var searchSuggHeading = document.createElement("DIV");
      searchSuggHeading.setAttribute("class", "search__suggestion-heading");

      // SVG SUGGESTION ICON

      var searchSuggSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      searchSuggSvg.setAttributeNS(null, "class", "search__suggestion-heading-icon");
      searchSuggSvg.setAttributeNS(null, "enable-background", "new 0 0 15 15");
      searchSuggSvg.setAttributeNS(null, "viewBox", "0 0 15 15");
      searchSuggSvg.setAttributeNS(null, "x", "0");
      searchSuggSvg.setAttributeNS(null, "y", "0");
      searchSuggSvg.setAttributeNS(null, "stroke-width", "0");

      // SVG SUGGESTION PATH

      var svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      svgPath.setAttributeNS(null, 'd', "m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z");
      svgPath.setAttributeNS(null, 'fill', "#ee4d2d");


      
      var searchSuggHeadingText = document.createElement("H4");
      searchSuggHeadingText.setAttribute("class", "search__suggestion-heading-text");
      searchSuggHeadingText.innerHTML = "Tìm Kiếm Trong Shop + +";

      var searchSuggList = document.createElement("DIV");
      searchSuggList.setAttribute("class", "search__suggestion-list");
      searchSuggList.setAttribute("id", "suggestion-list");

      var searchSelection = document.createElement("DIV");
      searchSelection.setAttribute("class", "header__search--selection hide-on-mobile-tablet");

      var searchSelectionList = document.createElement("ul");
      searchSelectionList.setAttribute("class", "header__search--selection__list");

      // APPEND ELEMENTS

      headerSearchSelect.appendChild(headerSearch);
      headerSearch.appendChild(headerSearchWrap);
      headerSearch.appendChild(btnSearch);
      btnSearch.appendChild(iconSearchInput);
      headerSearchWrap.appendChild(searchInput);
      headerSearchWrap.appendChild(searchSuggestionForm);
      searchSuggestionForm.appendChild(searchForm);
      searchForm.appendChild(searchSuggHeading);
      searchSuggHeading.appendChild(searchSuggSvg);
      searchSuggSvg.appendChild(svgPath);
      searchSuggHeading.appendChild(searchSuggHeadingText);
      searchForm.appendChild(searchSuggList);
      headerSearchSelect.appendChild(searchSelection);
      searchSelection.appendChild(searchSelectionList);

      function suggestSearchFun(parent, arr) {
        for (var i = 0 ; i < arr.length ; i++)
        {
          var searchSelectionItem = document.createElement("li");
          searchSelectionItem.setAttribute("class", "header__search--selection__item");
          var searchSelectionLink = document.createElement("a");
          searchSelectionLink.setAttribute("class", "search--selection__item--link");
          searchSelectionLink.innerHTML = arr[i];
          parent.appendChild(searchSelectionItem);
          searchSelectionItem.appendChild(searchSelectionLink);
        }
      }

      var arrSearchSelection = ["Sandal Nữ","Balo Nữ","Dép Nam","Balo Nam","Áo Nữ","Quần Nam","Crotop Nữ","Vấy Trắng"];
      suggestSearchFun(searchSelectionList,arrSearchSelection);

      if(window.matchMedia("(max-width: 739px)").matches){
        wrapper.insertBefore(headerSearchSelect, wrapper.childNodes[7]);
      }else {
        headerWS.insertBefore(headerSearchSelect, headerWS.childNodes[6]);
      }

      // HANDLER EVENT CLICK ON ICON SEARCH OF MOBILE 

      var iconSearchMobile = document.getElementsByClassName("header__mobile--search")[0];
      var showSearchInput = document.getElementsByClassName("header__with-search--selection")[0];

      iconSearchMobile.onclick =  function () {
        showSearchInput.classList.toggle("header__with-search--selection--show");
      }

      // Show suggestion when click input

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            var a, b, i,parentNode, val = this.value;
            var suggest_form = document.getElementById('suggest_form');
            
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            
            if (!val) { return false;}
            currentFocus = -1;
            suggest_form.classList.add('show');
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "suggestion-list");
            a.setAttribute("class", "search__suggestion-list");
            /*append the DIV element as a child of the autocomplete container:*/
            parentNode = document.getElementById('suggestion-form');
            parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("a");
                /*make the matching letters bold:*/
                b.setAttribute("class", "search__suggestion-items");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                a.appendChild(b);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' class='search__suggestion-item-link ' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByClassName('search__suggestion-item-link ')[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
              }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        // inp.addEventListener("keydown", function(e) {
        //     var x = document.getElementById(this.id + "suggestion-list");
        //     if (x) x = x.getElementsByTagName("div");
        //     if (e.keyCode == 40) {
        //       /*If the arrow DOWN key is pressed,
        //       increase the currentFocus variable:*/
        //       currentFocus++;
        //       /*and and make the current item more visible:*/
        //       addActive(x);
        //     } else if (e.keyCode == 38) { //up
        //       /*If the arrow UP key is pressed,
        //       decrease the currentFocus variable:*/
        //       currentFocus--;
        //       /*and and make the current item more visible:*/
        //       addActive(x);
        //     } else if (e.keyCode == 13) {
        //       /*If the ENTER key is pressed, prevent the form from being submitted,*/
        //       e.preventDefault();
        //       if (currentFocus > -1) {
        //         /*and simulate a click on the "active" item:*/
        //         if (x) x[currentFocus].click();
        //       }
        //     }
        // });
        // function addActive(x) {
        //   /*a function to classify an item as "active":*/
        //   if (!x) return false;
        //   /*start by removing the "active" class on all items:*/
        //   removeActive(x);
        //   if (currentFocus >= x.length) currentFocus = 0;
        //   if (currentFocus < 0) currentFocus = (x.length - 1);
        //   /*add class "autocomplete-active":*/
        //   x[currentFocus].classList.add("autocomplete-active");
        // }
        // function removeActive(x) {
        //   /*a function to remove the "active" class from all autocomplete items:*/
        //   for (var i = 0; i < x.length; i++) {
        //     x[i].classList.remove("autocomplete-active");
        //   }
        // }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          suggest_form.classList.remove('show');
          var x = document.getElementsByClassName("search__suggestion-list");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
      }

      /*An array containing all the country names in the world:*/
      var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

      /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
      autocomplete(document.getElementById("search__input"), countries);


      // change big img when hover on category img

      var bigImg = document.getElementsByClassName("product-detail-img-big")[0];
      var itemImg = document.querySelectorAll('div[data-list="itemImg"]');
      var classActiveItemImg = "product-detail-img-item-active";

      var changeBigImg = function (bigImg , itemImg , classActive) {
        for (const key in itemImg) {
          itemImg[key].onmouseover = function () {
            let itemImgActive = document.getElementsByClassName(classActive)[0];
            itemImgActive.classList.remove(classActive);
            
            bigImg.style.backgroundImage = this.style.backgroundImage;
            this.classList.add(classActive);
          }
        }
      }
      changeBigImg(bigImg, itemImg, classActiveItemImg);
      

      // change big imgM in modal when click on category imgM

      var bigImgM = document.getElementsByClassName("modal-product-detail-big-img")[0];
      var itemImgM = document.querySelectorAll('div[data-list="itemImgModal"]');
      for (const key in itemImgM) {
        itemImgM[key].onclick = function () {

          let itemImgActive = document.getElementsByClassName("product-detail-img-item-active-modal")[0];
          itemImgActive.classList.remove("product-detail-img-item-active-modal");

          bigImgM.style.backgroundImage = this.style.backgroundImage;
          this.classList.add("product-detail-img-item-active-modal");
        }
      }
      
      //Set Img and add class active for item in modal when click on BigImg
      var modalProductDeatail = document.getElementsByClassName("modal-product-detail-img")[0];

      var setModalImgFromBigImg = function () {
        if(bigImg){
          bigImg.onclick = function(){
            let itemImgActive = document.getElementsByClassName(classActiveItemImg)[0];
            let styleActive = itemImgActive.style.backgroundImage;
            bigImgM.style.backgroundImage = styleActive;
            for (const key in itemImgM) {
              if (itemImgM.hasOwnProperty(key)) {
                if(itemImgM[key].style.backgroundImage == styleActive){
                  itemImgM[key].classList.add("product-detail-img-item-active-modal");
                  break;
                }
              }
            }
            modalProductDeatail.classList.add('showFlex');
          }
        }
      }

      setModalImgFromBigImg();

      //Set Img and add class active for item in modal when click itemImg

      var setModalImgFromItemImg = function () {
        if(itemImg){
          for (const key in itemImg) {
            if (itemImg.hasOwnProperty(key)) {
              itemImg[key].onclick = function () {
                let styleActive = this.style.backgroundImage;
                bigImgM.style.backgroundImage = styleActive;
                for (const key in itemImgM) {
                  if (itemImgM.hasOwnProperty(key)) {
                    if(itemImgM[key].style.backgroundImage == styleActive){
                      itemImgM[key].classList.add("product-detail-img-item-active-modal");
                      break;
                    }
                  }
                }
                modalProductDeatail.classList.add('showFlex');
              }
            }
          }
        }
      }
      setModalImgFromItemImg();
      //Hide Modal when click outside
      var overLay = document.getElementsByClassName("modal__overlay-product")[0];

      var hideModalClickOutSide = function (overlayModal) {
        if(overlayModal){
          overlayModal.onclick = function () {
            modalProductDeatail.classList.remove('showFlex');
            let itemImgActive = document.getElementsByClassName("product-detail-img-item-active-modal")[0];
            itemImgActive.classList.remove("product-detail-img-item-active-modal");
          }
        }
      }

      hideModalClickOutSide(overLay);
      // Show delivery address list
    var elementAddress = document.getElementsByClassName('delivery-selection-item-addr')[0];
    var elementArrowUp = document.getElementsByClassName('icon-arrow-up')[0];
    var elementAddressList = document.getElementsByClassName('delivery-address-wrapp')[0];
    var elementArrowDown = document.getElementsByClassName('icon-arrow-down')[0];
    var arrElemetShowAddr = [elementArrowUp,elementAddressList];
    var showaddress ='showBlock';
    var hidearrow = 'hideelemnt';
    clickShow(elementAddress,arrElemetShowAddr,showaddress,elementArrowDown,hidearrow);

    // Show ticket of size
    var showTicket = function (elementClick){
      for (const key in elementClick) {
        if (elementClick.hasOwnProperty(key)) {
         elementClick[key].onclick = function () {
           for (const index in elementClick) {
             if (elementClick.hasOwnProperty(index)) {
               elementClick[index].classList.remove("border-primary");
               elementClick[index].childNodes[1].classList.remove("ticket-show");
             }
           }
          this.classList.add("border-primary");
          this.childNodes[1].classList.add("ticket-show");
         };
        }
      }
    }
    var elementProductType = document.querySelectorAll('.product-type-item');
    showTicket(elementProductType);

    // increaseValue and decreaseValue of input

    var increaseValueBtn = document.getElementsByClassName("amount-controll-item-increase")[0];
    if(increaseValueBtn) {
      increaseValueBtn.onclick = function increaseValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
      }
    }

    var decreaseValueBtn = document.getElementsByClassName("amount-controll-item-decrease")[0];
    if(decreaseValueBtn){
      decreaseValueBtn.onclick = function decreaseValue() {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('number').value = value;
      }
    }

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });

    // Function handle Event Click Button Carousel
    var handleClickCarousel = (productList, productArr, btnLeft, btnRight, widthItem, widthAllItem, itemJump, classAdd ) => {
      if (productArr >= 6) {
        var y = 0;
        btnRight.classList.add(classAdd);
        btnRight.addEventListener('click', function (){
          y = y - (widthItem*itemJump);
            productList.style.transform = "translateX("+y+"px)";
          if(y != 0){
            btnLeft.classList.add(classAdd);
          }
          if(y <= widthAllItem){
            y = widthAllItem;
            productList.style.transform = "translateX("+y+"px)";
            btnRight.classList.remove(classAdd);
          }
        });
  
        btnLeft.addEventListener('click', function (){
          y = y + (widthItem*itemJump);
          productList.style.transform = "translateX("+y+"px)";
          if(y >= 0){
            y = 0;
            productList.style.transform = "translateX("+y+"px)";
            btnLeft.classList.remove(classAdd);
          }
          if(y != widthAllItem){
            btnRight.classList.add(classAdd);
          }
        });
      }
    }

    //Slide img product detail
    var productImgSlide = document.querySelector('#slideImgDetail');
    if(productImgSlide){
      var productItemImgSlide = document.querySelectorAll('div[data-target="itemImgSlide"]');
      var productItemImgWidth = productItemImgSlide[0].offsetWidth;
      var productItemImgArr = Array.from(productItemImgSlide).length;
      var productItemImgWidthAll = -productItemImgWidth*(productItemImgArr-5);
      var productSlideDetailBtnLeft = document.querySelector('#btn-slide-detail-left');
      var productSlideDetailBtnRight = document.querySelector('#btn-slide-detail-right');

      handleClickCarousel(productImgSlide, productItemImgArr, productSlideDetailBtnLeft, productSlideDetailBtnRight, productItemImgWidth, productItemImgWidthAll, 1, 'showBlock');
    }

    // Recommend product Carousel
    var recommendCarousel = document.querySelector('#recommendCarousel');
    if(recommendCarousel){
      var recommendCarouselItem = document.querySelectorAll('li[data-target="recommendItem"]');
      var recommendItemWidth = recommendCarouselItem[0].offsetWidth;
      var recommendItemArr = Array.from(recommendCarouselItem).length;
      var recommendItemWidthAll = -recommendItemWidth*(recommendItemArr-6);
      var recommendBtnLeft = document.querySelector('#btn-recommend-left');
      var recommendBtnRight = document.querySelector('#btn-recommend-right');
  
      handleClickCarousel(recommendCarousel, recommendItemArr, recommendBtnLeft, recommendBtnRight, recommendItemWidth, recommendItemWidthAll, 5, 'showFlex');
    }

    //Similar product Carousel
    var similarCarousel = document.querySelector('#similarCarousel');
    if(similarCarousel){
      var similarCarouselItem = document.querySelectorAll('li[data-target="similarItem"]');
      var similarItemWidth = similarCarouselItem[0].offsetWidth;
      var similarItemArr = Array.from(similarCarouselItem).length;
      var similarItemWidthAll = -similarItemWidth*(similarItemArr-6);
      var similarBtnLeft = document.querySelector('#btn-similar-left');
      var similarBtnRight = document.querySelector('#btn-similar-right');

      handleClickCarousel(similarCarousel, similarItemArr, similarBtnLeft, similarBtnRight, similarItemWidth, similarItemWidthAll, 5, 'showFlex');
    }

    // Can like product Carousel
    var canlikeCarousel = document.querySelector('#canlikeCarousel');
    if(canlikeCarousel){
      var canlikeCarouselItem = document.querySelectorAll('li[data-target="canlikeItem"]');
      var canlikeItemWidth = canlikeCarouselItem[0].offsetWidth;
      var canlikeItemArr = Array.from(canlikeCarouselItem).length;
      var canlikeItemWidthAll = -canlikeItemWidth*(canlikeItemArr-6);
      var canlikeBtnLeft = document.querySelector('#btn-canlike-left');
      var canlikeBtnRight = document.querySelector('#btn-canlike-right');
  
      handleClickCarousel(canlikeCarousel, canlikeItemArr, canlikeBtnLeft, canlikeBtnRight, canlikeItemWidth, canlikeItemWidthAll, 5, 'showFlex');
    }


    //auto Slider
    let btnSlideLeft = document.querySelector('#btnSlideLeft');
    let btnSlideRight = document.querySelector('#btnSlideRight');
    let slideList = document.querySelector('.')
    let slideItem = document.querySelector('.slider-item');

    console.log(slideItem.offsetWidth);


},true);
