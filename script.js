const today = new Date();
var DayOfWeek = today.getDay();
var n = "01";

const daystr =["日","月","火","水","木","金","土"]

function setFig(){
    //取得した値をもとに表示する画像のパスを格納
    var figMon = "image/" + n + "_Mon.jpg";
    var figTue = "image/" + n + "_Tue.jpg";
    var figWed = "image/" + n + "_Wed.jpg";
    var figThu = "image/" + n + "_Thu.jpg";
    var figFri = "image/" + n + "_Fri.jpg";

    //時間割画像の表示
    document.getElementById('Mon').src= figMon;
    document.getElementById('Tue').src= figTue;
    document.getElementById('Wed').src= figWed;
    document.getElementById('Thu').src= figThu; 
    document.getElementById("Fri").src= figFri;
}

//ページ読み込み時に動作
function load(){
    //今日の日付を表示
    document.getElementById('today').textContent = today.toLocaleDateString("ja-JP") + " " + daystr[DayOfWeek] +"曜日";

    // 曜日に応じて初期タブを設定
    const defaultIndex = DayOfWeek === 0 || DayOfWeek === 6 ? 0 : DayOfWeek - 1;

    const labels = document.querySelectorAll('.tab-1 label');
    if (labels[defaultIndex]) {
        labels[defaultIndex].querySelector('input').checked = true;
    }

    // 学年のドロップダウン初期値設定(デフォルトは1年)
    document.getElementById('year').value = n;
    // 画像表示
    setFig();
}


//ドロップダウン更新時に動作
function setData(){
    //学年をドロップダウンから取得
    n = document.getElementById('year').value;
    //画像表示
    setFig();
}