// A wannabe copy of the underscore.js

var _={}
_.filter= function (list , callback) {
    var st=[]
    if(Array.isArray(list))
    {
        for (let i=0;i<list.length;i++){
            if(callback(list[i],i,list))
            st.push(list[i])
        }
        return st;
    }
    else if(typeof list === "object")
    { st={}
        for(i in list){
            if(callback(list[i],i,list))
            st[i]=list[i]

        }
        return st
        
    }
    
}

_.map= function (list , cb){
    var st=[]
    if(Array.isArray(list))
    {
        for (let i=0;i<list.length;i++){
            st.push(callback(list[i],i,list))
        }
        return st;
    }
    else if(typeof list === "object")
    {   st=[]
        for(var key in list){
            st.push(callback(list[key],key,list)) // Do we really need a list??
        }
        return st;

    }


    
}

_.each= function(list, callback){
    if(Array.isArray(list))
    {
        for (let i=0;i<list.length;i++){
            callback(list[i],i,list)}
    }
        else if(typeof list === "object"){
            for( var key in list){
                callback(list[key],key,list)
            }

        }    
}

_.find = function(list,value){
    if(Array.isArray(list)){
    for(var i;i<list.length;i++){
 
        if(list[i] === value)
        return i;
 
    }}
    else if(typeof list === "object"){
        for( var key in list){
            if(list[key] === value){
                return key;
            }
    }
}
}

_.reduce = (list,callback,defaultVal) =>{
    var memo = defaultVal || list[0];
    for(let idx in list)
    {
        memo = callback(memo,list[idx])
    }
    return memo;
}

_.fnRight = (fn) => {
    if(Array.isArray(fn.arguments[0]))
    fn(fn.arguments[0].reverse(),fn.arguments.slice(1))


}

_.find = (list,val) => {
    for(let idx in list){
        if(list[idx] === val)
        return idx;
    }
    return -1;
    
}    

_.where = (list,props) => {
    var here = []
    for(let idx in list){
        var val = list[idx]
        for(let key in props){
            here.push(val)
            if(props[key] !== val[key] )
            {
                here.pop()
            }
        }
    }
}

_.max= (list, compartor) =>{
    var max=0
    for(idx in list){
        if(comparator(list[max])<compartor(list[idx]))
        max=idx;
    }
    return list[max]
}
_.min= (list, compartor) =>{
    var min=0
    for(idx in list){
        if(comparator(list[min])>compartor(list[idx]))
        min=idx;
    }
    return list[min]
}