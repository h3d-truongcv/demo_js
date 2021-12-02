let dt = []; // mảng rỗng

let add = function (tendt,gia) {
     dt.push({tendt,gia});
     return console.log(dt)
}
add ("iphone",10)
add("Iphone 8",10)
add("xiaomy",80)
add("Iphone 6",80)
add("sam sung",20)
let max = 0;
let timMax= function(a){
    let dat=[]
    for (i=0;i<a.length;i++){
        if (a[i].gia>max){
            dat=[];
            max=a[i].gia
        }
        if (a[i].gia==max){
            dat.push(a[i])
        }
    }
    return console.log(dat)
}
let min=max
let timMin= function(a){
    let re=[]
    for (i=0;i<a.length;i++){
        if (a[i].gia<min){
            re=[];
            min=a[i].gia
        }
        if (a[i].gia==min){
            re.push(a[i])
        }
    }
    return console.log(re)
}


