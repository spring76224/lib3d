"use strict";

var THREE = mapvgl.THREE;
var global_objects={};
var map;

function getStatusCodeOfResponse(command,xml_data){
    var IE = /msie ((\d+\.)+\d+)/i.test(navigator.userAgent) ? (document.documentMode ||  RegExp['\x241']) : false;
    var xmlobject = null;
    var root;
    try{
        if (window.ActiveXObject)
        {
            xmlobject =new ActiveXObject("Microsoft.XMLDOM");
            if(!xmlobject){
                alert('Fail to create XML object(Microsoft.XMLDOM)');
            }
            xmlobject.async="false";
            xmlobject.loadXML(xml_data);
        }
        // 用于 Mozilla, Firefox, Opera, 等浏览器的代码：
        else
        {
            var parser=new DOMParser();
            xmlobject =parser.parseFromString(xml_data,"text/xml");
        }
    }catch(e){alert("error");}
    if(xmlobject){
        if(IE && IE < 8){
            root = xmlobject.childNodes.item(0);
        }
        else{
            root= xmlobject.childNodes.item(0);
        }
        return root.getAttribute(command);
    }
    return "";
}

function mapToThree(v_value){
    return v_value*1.3;
}
function threeToMap(v_value){
    return v_value/1.3;
}