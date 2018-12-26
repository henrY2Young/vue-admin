export function menutree(list) {
    let res = [];
    list.forEach((item) => {
        console.log(item);
        if (item.parentId == 0) {
            let item1 = item;
            item1.child = [];
            res.push(item1)
        }
    });
    let res_len = res.length;
    list.forEach((litem) => {
        if (litem.parentId != 0) {
            for (let i = 0; i < res_len; i++) {
                if (res[i].id == litem.parentId) {
                    let item1 = litem;
                    item1.child = [];
                    res[i].child.push(item1)
                }
            }
        }
    });
    return res;
}

export function decodeMenuTree(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let item1 = {
            name: arr[i].name,
            id: arr[i].id,
            url: arr[i].url
        };
        res.push(item1);
        if (arr[i].child.length != 0) {
            for (let j = 0; j < arr[i].child.length; j++) {
                let data = arr[i].child;
                let item2 = {
                    name: data[j].name,
                    id: data[j].id,
                    url: data[j].url
                };
                res.push(item2);
            }
        }
    }
    return res;
}

export function in_array(needle, haystack) {
    for (let i = 0;i<haystack.length;i++){
        if(haystack[i]== needle){
            return true;
        }
    }
    return false;
}
