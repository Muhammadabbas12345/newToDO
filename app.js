const input=document.querySelector(".input")
const itemlist=document.querySelector(".item")


let list=[]

const todoApp={
    addFun(){
        if(input.value){
            list.push(input.value)
            input.value=""

        }else{
            alert("sorry don,t Work")
        }
        this.itzFun()
    },

    itzFun(){
        itemlist.innerHTML=""
        list.forEach((value, index)=> {
            itemlist.innerHTML +=` <li  class="li">${value}" <button  class="btnn" onclick="todoApp.delete(${index})">X</button>  </li>`
        })

        },

        delete(index){
            list.splice(index, 1)
            this.itzFun()
        },
    
        clear(){
            list.splice(0, list.length)
            this.itzFun()
    
        },
    
    }
