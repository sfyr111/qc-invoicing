import $ from 'jquery'
import configUrl from '../data/configUrl'

const util = {
	//获取url参数
	getURLParameters: function(parameter){
		var parameters = window.location.search;
		var parametersObj = {};
		if(parameters.indexOf('?') > -1){
			var str = parameters.substr(1);
				str = str.split('&');
			for(var i = 0;i < str.length;i ++){
				parametersObj[str[i].split('=')[0]] = decodeURIComponent(str[i].split('=')[1]);
			}
		}
		return parametersObj[parameter];
	},
	//URL去除哈希值
	getUrlExceptHash: function(){
		var href = window.location.href, hash = window.location.hash;
		return hash ? href.substr(0, href.indexOf(hash)) : href;
	},
	//异步加载数据
	getMyrequest: function(opt) {
		var deferred = $.Deferred();
		opt.data = typeof opt.data === 'undefined' ? {} : opt.data;
		$.ajax({
			type: opt.type,
			dataType: 'json',
			url: opt.url,
			data: opt.data
		})
		.done(function (resp) {
			if (resp.success === true) {
				deferred.resolve(resp);
				opt.success(resp)
			} else {
				deferred.reject(resp);
				opt.fail(resp)
			}
		})
		.fail(function (resp) {
			deferred.reject(resp);
			opt.fail(resp)
		});

		return deferred.promise();
	},
	//异步提交复杂数据
	getMyCompRequest: function(opt) {
		var deferred = $.Deferred();
		opt.data = typeof opt.data === 'undefined' ? {} : opt.data;
		$.ajax({
			type: opt.type,
			dataType: 'json',
			url: opt.url + '?_t=' + (+new Date()),
			data: JSON.stringify(opt.data),
			contentType: "application/json; charset=utf-8"
		})
		.done(function (resp) {
			if (resp.success === true) {
				deferred.resolve(resp);
				opt.success(resp)
			} else {
				deferred.reject(resp);
				opt.fail(resp)
			}
		})
		.fail(function (resp) {
			deferred.reject(resp);
			opt.fail(resp)
		});

		return deferred.promise();
	},
	//转义特殊字符<,>,",'
	escapeToHtmlEntity: function (str) {
		if (!str) {
			return '';
		}

		var escape = {
			'<': '&lt;',
			'>': '&gt;',
			'\"': '&quot;',
			'&': '&amp;'
		};

		return str.replace(/[&<>"]/g, function (match) {
			return escape[match] || match;
		});
	},

  //转义特殊字符<,>,",'
  unEscapeToHtmlEntity: function (str) {
      if (!str) {
          return '';
      }

      str = str.replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '\"')
              .replace(/&amp;/g, '&')
              .replace(/&nbsp;/g, ' ')
              .replace(/<br>/g, '\n');

      return str;
  },
  //	延迟函数
  delay: function (time, callBack) {
  	setTimeout(function () {
  		callBack && callBack();
  	}, time)
  },
  diffTime: function(start, end) {
  	var start = new Date(start),
  		end = new Date(end);
    var diff = end.getTime() - start.getTime();
    var days=Math.floor(diff/(24*3600*1000));

    //计算出小时数
    var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);

    var returnStr = "";
    if(minutes>0) {
        returnStr = minutes + "分" + returnStr;
    }
    if(hours>0) {
        returnStr = hours + "小时" + returnStr;
    }
    if(days>0) {
        returnStr = days + "天" + returnStr;
    }
    return returnStr;
  },
  //	选择日期 将2016-09-09转换成new Date()格式
  selectDateFormat: function (date, sep) {
  	date = date.split(sep);
  	var y = Number(date[0]),
  			m = Number(date[1]) - 1,
  			d = Number(date[2]);
  	return new Date(y, m, d)
  },
  //	设置日期
  setDate: function (num, date) {
  	date = typeof date === 'undefined' ? new Date() : date;
  	var y = date.getFullYear(),
  			m = date.getMonth(),
  			d = date.getDate() + num;

  	var dd = new Date(y, m, d);

		y = dd.getFullYear();
		m = dd.getMonth() + 1;
		d = dd.getDate();
  	m = m > 9 ? m : '0' + m;
  	d = d > 9 ? d : '0' + d;
  	return y + '-' + m + '-' + d;
  },

  //	根据日期获取天数
  getDays: function (start, end, sep) {
  	var dd = end.split(sep),
  			y = Number(dd[0]),
  			m = Number(dd[1] - 1),
  			d = Number(dd[2]);
  	end = +new Date(y, m, d);
  	dd = start.split(sep);
  	y = Number(dd[0]);
  	m = Number(dd[1] - 1);
  	d = Number(dd[2]);
  	start = +new Date(y, m, d)

  	return Math.floor((end - start) / 1000 / (24 * 60 * 60))
  },
  // 将标准时间转换为字符串
  getDateStr: function (date) {
    var dateStr = new Date(date);
    var y = dateStr.getFullYear();
    var m = dateStr.getMonth() + 1;
    var d = dateStr.getDate();
    return y + '-' + m + '-' + d;
  },

  //	数组去重 将原数组去掉选中的数组   selectArr--选中数组  arr--原数组  key--去重比较字符串
  getNewArr (selectArr, arr, key) {
  	let newArr = []
  	for (var i = 0; i < arr.length; i ++) {
  		var push = true
  		for (var j = 0; j < selectArr.length;j ++) {
  			if (arr[i][key] === selectArr[j][key]) {
  				push = false
  				break;
  			}
  		}

  		if (push) {
  			newArr.push(arr[i])
  		}
  	}

  	return newArr
  },

  //  根据key 取出数组里面对应匹配的obj   key----数组对象要比较的属性  ayy----对象数组  val----比较的值
  getKeyObj (key, arr, val) {
    let obj = {}
    
    for (var i = 0; i < arr.length; i ++) {
      if (val === arr[i][key]) {
        obj = arr[i]
        return obj
      }
    }
  }
}

export default util

