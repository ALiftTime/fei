//组件的联动
//所有事件和函数  key值是事件名称 val是数组 里面都是数组

//是为了绑定多个吗?
const eventList = {};

const $on = function(eventName,cb){
    //判断一下当前事件是否存在  如果不存在则赋值成数组
    if(!eventList[eventName]){
        eventList[eventName] = []
    }
    //给当前数组push一个函数
    eventList[eventName].push(cb)
}

const $emit = function(eventName,param){   //param是参数
    //查看当前事件是否存在 如果不存在则return
    if(!eventList[eventName]){
        return;
    }
    //如果存在的情况在获取所有的方法
    var eventArr = eventList[eventName];
    //遍历调用
    eventArr.map((cd)=>{
        cb(param)
    })
}

const $off = function(eventName,cd){
    //判断当前回调是否存在如果不存在则直接清空数组  如果存在将存在的函数过滤掉
    if(cd){
        var arr = eventList[eventName];
        arr.filter((callback)=>{   //改变原数组
            if(callback == cd){
                return false;
            }
            return true;
        })
    }else{
        eventList[eventName] = [];
    }
}

export default{
    $on,
    $emit,
    $off
}