window.validateRule = {

    require:function(val){

        return $.trim(val).length > 0;

    },

    nameRule:function(val){

        return /^[\u4e00-\u9fa5]{2,6}$/.test(val);

    },

    textRule:function(val){

        return /^.{5,}$/.test(val);

    },

    loginNameRule:function(val){

        return /^\d+$/.test(val);

    },

    loginPassRule:function(val,param){

        return $.trim(val).length >= param;

    },

    phoneRule:function(val,param){

        return $.trim(val).length >= param;

    }

}