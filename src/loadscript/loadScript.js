function timeout(time){
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve()
    }, time)
  })
}

function loadScript(){
  return new Promise((resolve, reject) =>{

  })
}

export default Promise.all([timeout(500), loadScript('baidu.com')])