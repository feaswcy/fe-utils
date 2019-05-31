function timeout(time:number){
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve()
    }, time)
  })
}

function loadScript(url:string){
  return new Promise((resolve, reject) =>{

  })
}

const all = Promise.all([timeout(500), loadScript('baidu.com')])

export default {
  all: all
}
