let caculationBtn = document.querySelector(".app_caculation")
let caculation = document.querySelector(".calculator")
function caculationApp() {
    let closeBtn = document.querySelector(".close")
    let result = document.querySelector(".result")
    let itemBtn = document.querySelectorAll(".cal_operation .item_btn")
    // caculationBtn.addEventListener("click", ()=> {
    // })
    closeBtn.addEventListener("click", ()=> {
        caculationBtn.classList.remove("online")
      caculation.style.display = "none";
    })
    let displayResult = ""
    let theResult = []
    itemBtn.forEach((e) => {
        e.addEventListener("click", ()=> {
                if(e.classList.contains("add_sign")) {
                    theResult.push("+")
                    displayResult=""
                }else if(e.classList.contains("minus_sign")) {
                    theResult.push("-")
                    displayResult=""
                }else if(e.classList.contains("product_sign")) {
                    theResult.push("*")
                    displayResult=""
                }else if(e.classList.contains("divide_sign")) {
                    theResult.push("/");
                    displayResult=""
                }else if(e.classList.contains("euqal_sign")) {
                    theResult.push("=");
                } else {
                    theResult.push(e.innerText)
                    displayResult += e.innerText
                    result.innerText = displayResult 
                }
        })
    });
}
caculationBtn.addEventListener("click", ()=> {
    caculationBtn.classList.add("online")
    caculation.style.display = "block";
    caculationApp()
})
let safari = document.querySelector(".safari")
let closeSafari = document.querySelector(".safari_close")
let appSafari = document.querySelector(".app_safari")
let inputValue = document.querySelector(".input_box input")
let searchIcon = document.querySelector(".search_icon")

appSafari.addEventListener("click", ()=> {
    appSafari.classList.add("online")
    safari.style.display = "block"
})
closeSafari.addEventListener("click", ()=> {
    appSafari.classList.remove("online")
    safari.style.display = "none";
})
window.onkeyup = keyup;
function keyup(e) {
    if(inputValue.value.length>0) {
        searchIcon.style.display = "none"
    }else{
        searchIcon.style.display = "block"
    }
    if (e.keyCode == 13) {
        window.open("https://www.google.com/search?output=search&q=" + inputValue.value)
    }
  }
// keyup()
//loi nhap so dien thoai

let closePhoneBtn = document.querySelector(".phone_close")
let phoneApp = document.querySelector(".app_phone")
let phone = document.querySelector(".phone")
let phoneBtn = document.querySelectorAll(".phone_btn")
let numberBtn = document.querySelector(".number_btn")
let displayNumber = document.querySelector(".number_call")
let deleteNum = document.querySelector(".delete_num")
let callBtn = document.getElementById("call")


phoneApp.addEventListener("click", ()=> {
    phone.style.display = "flex"
    phoneApp.classList.add("online")
})
closePhoneBtn.addEventListener("click", ()=> {
    phone.style.display = "none";
    phoneApp.classList.remove("online")
})


let stringNum = ""
phoneBtn.forEach((e) => {
    e.addEventListener("click", ()=> {
        callBtn.href="" 
        displayNumber.value += e.querySelector(".number_btn").innerText
        if(displayNumber.value.length>0) {
            deleteNum.style.display = "block";
        }
    })
});
deleteNum.addEventListener("click", ()=> {
    callBtn.href=""
    displayNumber.value = displayNumber.value.slice(0, -1);
    if(displayNumber.value.length==0){
        deleteNum.style.display = "none";
    }
})
callBtn.addEventListener("click", ()=> {
    callBtn.href+=displayNumber.value
    console.log(callBtn.href);
})
let openOption = document.getElementById("switch")
let boxControl = document.querySelector(".box_control")

openOption.addEventListener("click", ()=> {
    if(boxControl.style.display == "grid") {
        boxControl.style.display = "none"
    }else{
        boxControl.style.display = "grid"
    }
})

//image
let picture = document.querySelector(".picture")
let imageApp = document.querySelector(".app_image")
let closeImageBtn = document.querySelector(".picture_close")
let imgItem = document.querySelectorAll(".item_img")
let backgroundImg = document.querySelector(".bg_img img")
let pictureRight = document.querySelector(".picture_right")
let listPicture = document.querySelector(".list_picture")


imageApp.addEventListener("click", ()=> {
    picture.style.display = "flex"
    imageApp.classList.add("online")
    let serviceList = document.querySelectorAll(".favorite_item")
    openService(serviceList)
})
closeImageBtn.addEventListener("click", ()=> {
    imageApp.classList.remove("online")
    picture.style.display = "none";
})

function imageWork() {
    imgItem.forEach((e) => {
        e.addEventListener('contextmenu', function(e) { 
            e.preventDefault();
          }, false);
        e.addEventListener("mousedown", (event)=> {
            let imgItemLink = e.querySelector("img").src
            if(event.buttons==2) {
                 e.classList.toggle("showOptionImg")
              let optionPicture = e.querySelector(".option_picture")
              var html = [
                '<ul class="list_option">',
                  '<li class="option_name">Copy</li>',
                  '<li class="option_name">Rename</li>',
                  '<li class="option_name">Cut</li>',
                  '<li class="option_name">Edit</li>',
                  '<li class="option_name">Share</li>',
                  '<li class="option_name">Delete</li>',
                  '<li class="option_name apply_bg">Apply background...</li>',
                '</ul>'
               ].join('')
                  optionPicture.innerHTML = html
                  optionPicture.style.display = "block"
                  pictureRight.addEventListener("click", ()=> {
                    optionPicture.style.display = "none"
                })
                  listenOption(optionPicture, imgItemLink)
             }
        })
    });
}

function listenOption(optionPicture, imgItemLink) {
   let itemOption = optionPicture.querySelectorAll(".option_name")
    itemOption.forEach((e) => {
        e.addEventListener("mousedown", (e)=> {
             if(e.buttons==1) {
                e.stopPropagation()
             }
        })
        e.addEventListener("click", ()=> {
            if(e.classList.contains("apply_bg")) {
               backgroundImg.src = imgItemLink;
               optionPicture.style.display = "none"
            }
        })
    });
}
function openService(serviceList) {
    let currentElement = 0;
    serviceList.forEach(serviceItem => {
        serviceItem.addEventListener("click", (e)=> {
            let hasService = document.querySelector(".openService")
            serviceItem.classList.add("openService")  
            if(serviceItem.innerText=="icloud Drive") {
                let listPicture = document.querySelector(".list_picture")
                listPicture.style.display = "grid"
                imageWork()
            }else{
                listPicture.style.display = "none"
            }
            currentElement = serviceItem
            hasService.classList.remove("openService")
        })
    });
    let letfControl = document.querySelector(".control_step .left_btn")
    let rightControl = document.querySelector(".control_step .right_btn")
    window.addEventListener("keydown", event=> {
        if(event.which==39) {
            rightControl.click()
        }else if(event.which==37) {
            letfControl.click()
        }
    })
    letfControl.addEventListener("click", ()=> {
        if (currentElement==0) {
            serviceList[0].click()
        }
        else if(currentElement==serviceList[0]) {
            serviceList[serviceList.length-1].click()
        }else{
            currentElement.previousElementSibling.click()
        }
    })
    rightControl.addEventListener("click", ()=> {
        if (currentElement==0) {
            serviceList[0].click()
        }else if(currentElement==serviceList[serviceList.length-1]) {
            serviceList[0].click()
        }else{
            currentElement.nextElementSibling.click()
        }
    })
}
function displayDate() {
    let today = document.querySelector(".nav_right .date")
    var date = new Date()
    var day = date.getDate()
    var month = date.toLocaleString('default', { month: 'short' });
    var year = date.getFullYear()
    today.innerText = month +" " + day + " " +year
}
displayDate()
function displayTime() {
    let currentTime = document.querySelector(".nav_right .clock")
    var date = new Date()
    var hour = date.getHours()
    var minus = date.getMinutes()
    if(minus>=0 && minus<=9) {
        minus="0"+minus
    }
    currentTime.innerText = hour+":"+minus
}
setInterval(function() {
    displayTime()
}, 1000);
let toggleMusic = document.querySelector(".music_btn i") 
toggleMusic.addEventListener("click", ()=> {
    if(toggleMusic.classList.contains("bx-play")) {
        toggleMusic.classList.replace("bx-play", "bx-pause")
    }else{
        toggleMusic.classList.replace("bx-pause", "bx-play")
    }
})
function appClick(app) {
}
function darkTheme() {
    let lightBg = document.querySelector(".option_icon .bxs-moon")
    let bgColor = document.querySelector(".bg_color")
    lightBg.addEventListener("click", ()=> {
        if (lightBg.classList.contains("bxs-moon")) {
            bgColor.classList.add("darkBg")
            lightBg.classList.replace("bxs-moon","bxs-sun")
        }else{
            lightBg.classList.replace("bxs-sun","bxs-moon")
            bgColor.classList.remove("darkBg")
        }
    })
}
darkTheme()
let deviceWidth = screen.width;
if(deviceWidth<1229) {
    alert("Ứng dụng chỉ tối ưu trên Máy Tính, vui lòng chuyển qua máy tính!")
}