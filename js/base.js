//序列化
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (this.value != "" && this.value != null) {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            }
            else {
                o[this.name] = this.value || '';
            }
        }

    });
    return o;
}

// form表单赋值
$.fn.myFormAssignment = function (data) {
  return this.each(function () {
      var formElem, name;
      if (data == null) { this.reset(); return; }
      for (var i = 0; i < this.length; i++) {
          formElem = this.elements[i];
          //checkbox的name可能是name[]数组形式
          name = (formElem.type == "checkbox") ? formElem.name.replace(/(.+)\[\]$/, "$1") : formElem.name;
          if (data[name] == undefined) continue;
          switch (formElem.type) {
              case "checkbox":
                  if (data[name] == "") {
                      formElem.checked = false;
                  } else {
                      //数组查找元素
                      if (data[name].indexOf(formElem.value) > -1) {
                          formElem.checked = true;
                      } else {
                          formElem.checked = false;
                      }
                  }
                  break;
              case "radio":
                  if (data[name] == "") {
                      formElem.checked = false;
                  } else if (formElem.value == data[name]) {
                      formElem.checked = true;
                  }
                  break;
              case "button": break;
              default: formElem.value = data[name];
          }
      }
  });
};