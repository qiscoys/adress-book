$(function () {
    let arr=[
        {
            name:'妲己',tell:123444,py:'daji'
        },
        {
            name:'周瑜',tell:2344445,py:'zhouyu'
        },
        {
            name:'猪八戒',tell:64456,py:'zhubajie'
        },
        {
            name:'后羿',tell:355555447,py:'houyi'
        },
        {
            name:'貂蝉',tell:45548,py:'dianchan'
        },
        {
            name:'程咬金',tell:1225449,py:'chengyaojin'
        },
        {
            name:'孙尚香',tell:14259,py:'sunshangxiang'
        },
        {
            name:'虞姬',tell:123429,py:'yuji'
        },
        {
            name:'典韦',tell:65429,py:'dianwei'
        },
        {
            name:'狗蛋',tell:75429,py:'goudan'
        },
        {
            name:'王二狗',tell:25429,py:'wangergou'
        },
        {
            name:'田柱子',tell:45429,py:'tianzhuzi'
        },
        {
            name:'三牛',tell:75429,py:'sanniu'
        },
        {
            name:'二驴',tell:78729,py:'erlv'
        },


    ]
    let main=$('main')
    let aside=$('.aside')
    let input=$('input')

    input.on('input',function () {
        let val=$(this).val();
        let newarr=arr.filter(ele=>ele.name.includes(val))
        render(newarr)
    });
    render(arr);

    function render(arr) {
        main.empty();
        aside.empty();
        let person={};
        //分类
        arr.forEach(ele => {

            let firstChar = ele.py.charAt(0).toUpperCase();

            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        })

        let keysarr = Object.keys(person).sort();//排序

        let html='';
        let html1='';
        for (let i = 0; i < keysarr.length; i++) {
            let ele = keysarr[i];//A L
            html1 +=`<li>${ele}</li>`;
            html += `
        <section><h2>${ele}</h2>
        `;
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `
        <div><a href="tel:${info.tell}">${info.name}</a></div>
        `}
            html+='</section>'
        }
        aside.html(html1)
        main.html(html);
    }
})