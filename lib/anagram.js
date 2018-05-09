function anagram(str){
    var result=[];
    //0
    if(!str){
        return result;
    }
    //
    if(str.length===1){
        return [str]

    }
    if(str.length===2){
        return [str[0]+str[1],str[1]+str[0]]
    }

    var result=[];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<str.length-1;j++){
            
        }
    }

}
module.exports=anagram;