

//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "七月";
    var imageURL = "http://cdn.63a0.com/Uploads/Advertisement/20200831_222930_15988841709856_4979.jpg";
    var online = "110";
    return { "name": name, "logo": imageURL, "source":"JS", "quantity":online };
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "https://cdn.63a0.com/index.php/Api/LiveApi/getPlatformlist";
    var method = "POST";
    var param = { "id": "142" };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    //dic 为字典，需经过处理，最终如下,key的名称必须如下所示
    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        var formatDic = {
            "name": subDic["title"],
            "Popularity": subDic["watch_number"],
            "video": subDic["address"],
            "cover": subDic["header"],
            "id": subDic["room_id"]
        };
        formatArr.push(formatDic);
    }
    return { "data": formatArr };
}
