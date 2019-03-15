$(function () {
    var inputname;
    var rancol = Math.floor(Math.random() * 3) + 1;
    switch (rancol) {
        case 1: $("body").css("background-color", "#FF99CC");
            $("h1").css("background-color", "#FFCCCC"); break;
        case 2: $("body").css("background-color", "#FFCC33");
            $("h1").css("background-color", "#FF9933"); break;
        case 3: $("body").css("background-color", "#99FFCC");
            $("h1").css("background-color", "#99CCCC"); break;
    }
    function random(n1) {
        var num1 = Array(n1);
        var x = 0;
        for (var i = 0; i < n1; i++) {
            var num = Math.floor(Math.random() * n1) + 1;
            for (var j = 0; j < n1; j++) {
                if (num != num1[j]) {
                    x++;
                    if (x == n1) {
                        num1[i] = num;
                        x = 0;
                    } else if (x != n1 && j == (n1 - 1)) {
                        x = 0;
                    }
                } else {
                    i--;
                }
            }
        }
        $("#tableran1").empty();
        $("#tableran1").append('<tr>');
        for (var k = 0; k < n1; k++) {
            $("#tableran1").append('<td>' + num1[k] + '</td>');
        }
        $("#tableran1").append('</tr>');
        return num1;
    }
    function createtable1(n2) {
        var numlen = 3;
        $("#tableran2").append('<tr>');
        for (var m = 0; m < numlen; m++) {
            $("#tableran2").append('<td>' + n2[m] + '</td>');
        }
        $("#tableran2").append('</tr>');
        return n2;
    }
    function createtable2(n2) {
        var numlen = 6;
        $("#tableran5").append('<tr>');
        for (var m = 3; m < numlen; m++) {
            $("#tableran5").append('<td>' + n2[m] + '</td>');
        }
        $("#tableran5").append('</tr>');
        return n2;
    }
    function createtable3(n2) {
        var numlen = 9;
        $("#tableran8").append('<tr>');
        for (var m = 6; m < numlen; m++) {
            $("#tableran8").append('<td>' + n2[m] + '</td>');
        }
        $("#tableran8").append('</tr>');
        return n2;
    }

    function have1(n3) {
        console.log(n3);
        $("#tableran3").append('<tr><td>' + n3[3] + '</td><td>' + n3[0] + '</td><td>' + n3[4] + '</td></tr>');
    }
    function have2(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[0] + '</b></font>');
    }
    function have3(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[1] + '</b></font>');
    }
    function have4(n3) {
        console.log(n3);
        $("#tableran6").append('<tr><td>' + n3[0] + '</td><td>' + n3[3] + '</td><td>' + n3[1] + '</td></tr>');
    }
    function have5(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[3] + '</b></font>');
    }
    function nothave1(n3) {
        console.log(n3);
        $("#tableran4").append('<tr><td>' + n3[5] + '</td><td>' + n3[1] + '</td><td>' + n3[6] + '</td></tr>');

    } function nothave2(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[2] + '</b></font>');
    }

    function nothave4(n3) {
        console.log(n3);
        $("#tableran7").append('<tr><td>' + n3[2] + '</td><td>' + n3[4] + '</td><td>' + n3[6] + '</td></tr>');
    }
    function have6(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[4] + '</b></font>');
    }
    function nothave5(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[5] + '</b></font>');
    }
    function have7(n3) {
        console.log(n3);
        $("#tableran9").append('<tr><td>' + n3[0] + '</td><td>' + n3[6] + '</td><td>' + n3[1] + '</td></tr>');
    }
    function have8(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[6] + '</b></font>');
    }
    function nothave7(n3) {
        console.log(n3);
        $("#tableran10").append('<tr><td>' + n3[2] + '</td><td>' + n3[7] + '</td><td>' + n3[3] + '</td></tr>');
    }
    function have9(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[7] + '</b></font>');
    }
    function nothave8(n3) {
        console.log(n3);
        $("#answer").append("<font size='5'>เลขที่คุณ" + "<font color='green'>"+inputname +"</font>"+ "เลือกคือ </font>" + '<font size="6" color="#FF3366"><b>' + n3[8] + '</b></font>');
    }

    $("#dis2").hide();
    $("#distable1").hide();
    $("#distable2").hide();
    $("#dis3").hide();
    $("#dis4").hide();
    $("#dis5").hide();//have1
    $("#dis6").hide();//nothave1
    $("#dis7").hide();//have2
    $("#distable3").hide();
    $("#distable4").hide();
    $("#dis8").hide();//have3
    $("#dis9").hide();//nothave2
    $("#dis10").hide();//nothave3
    $("#dis11").hide();//have4
    $("#distable5").hide();
    $("#distable6").hide();
    $("#dis12").hide();//have5
    $("#dis13").hide();//nothave4
    $("#distable7").hide();
    $("#dis14").hide();//have6
    $("#dis15").hide();//nothave5
    $("#dis16").hide();//nothave6
    $("#distable8").hide();
    $("#dis17").hide();//have7
    $("#distable9").hide();
    $("#dis18").hide();//have8
    $("#dis19").hide();//nothave7
    $("#distable10").hide();
    $("#dis20").hide();//have8
    $("#dis21").hide();//nothave8
    $("#dis22").hide();//nothave9
    $("#dis23").hide();//again
    $("#answer").hide();

    $("#Start").click(function () {
        inputname = $("#inputname").val();
        if (inputname == "") {
            console.log("blank");
            inputname = "[ไม่ระบุชื่อ]";
        }else if(inputname == "<!--"){
            alert("ฮันแน่!!");
            location.reload();
        }
        console.log('Start')
        console.log(inputname);
        var select = 9;
        var num1 = random(select);

        $("#dis2").show();
        $("#distable1").show();
        $("#dis3").show();
        $("#dis1").hide();

        $("#Selected").click(function () {
            console.log('Selected')
            $("#dis2").hide();
            $("#distable1").hide();
            $("#dis3").hide();
            var n2 = createtable1(num1);
            $("#distable2").show();
            $("#dis4").show();
            $("#dis5").show();
            $("#dis6").hide();
            $("#dis10").show();
            $("#Have1").click(function () {//มี1
                have1(n2);
                console.log("have1");
                $("#dis5").hide();
                $("#dis7").show();
                $("#distable2").hide();
                $("#distable3").show();
                $("#dis10").hide();
                $("#dis6").show();
                $("#Have2").click(function () {//มี2
                    have2(n2);
                    console.log("have2");
                    $("#dis7").hide();
                    $("#distable3").hide();
                    $("#dis6").hide();
                    $("#dis4").hide();
                    $("#dis23").show();
                    $("#answer").show();
                    $("#Again").click(function () {
                        console.log("again");
                        location.reload();
                    });
                });

            });
            $("#Nothave1").click(function () {//ไม่1
                nothave1(n2);
                console.log("Nothave1");
                $("#distable3").hide();
                $("#dis7").hide();
                $("#distable4").show();
                $("#dis8").show();
                $("#dis6").hide();
                $("#dis9").show();
                $("#Have3").click(function () {//มี3
                    have3(n2);
                    console.log("have3");
                    $("#distable4").hide();
                    $("#dis8").hide();
                    $("#dis6").hide();
                    $("#dis4").hide();
                    $("#dis9").hide();
                    $("#dis23").show();
                    $("#answer").show();
                    $("#Again").click(function () {
                        console.log("again");
                        location.reload();
                    });
                });
                $("#Nothave2").click(function () {//ไม่2
                    nothave2(n2);
                    console.log("nothave2");
                    $("#distable4").hide();
                    $("#dis8").hide();
                    $("#dis6").hide();
                    $("#dis4").hide();
                    $("#dis9").hide();
                    $("#dis23").show();
                    $("#answer").show();
                    $("#Again").click(function () {
                        console.log("again");
                        location.reload();
                    });
                });
            });
            $("#Nothave3").click(function () {//ไม่3
                console.log("nothave3");
                var n2 = createtable2(num1);
                $("#dis11").show();
                $("#dis10").hide();
                $("#dis5").hide();
                $("#distable2").hide();
                $("#distable5").show();
                $("#dis16").show();
                $("#Have4").click(function () {//มี4
                    have4(n2);
                    console.log("have4");
                    $("#distable6").show();
                    $("#distable5").hide();
                    $("#dis11").hide();
                    $("#dis12").show();
                    $("#dis13").show();
                    $("#dis16").hide();
                    $("#Have5").click(function () {//มี5
                        have5(n2);
                        console.log("have5");
                        $("#dis12").hide();
                        $("#distable6").hide();
                        $("#dis4").hide();
                        $("#dis13").hide();
                        $("#dis23").show();
                        $("#answer").show();
                        $("#Again").click(function () {
                            console.log("again");
                            location.reload();
                        });
                    });
                    $("#Nothave4").click(function () {//ไม่4
                        nothave4(n2);
                        console.log("nothave4");
                        $("#distable6").hide();
                        $("#distable7").show();
                        $("#dis12").hide();
                        $("#dis13").hide();
                        $("#dis14").show();
                        $("#dis15").show();
                        $("#Have6").click(function () {//มี6
                            have6(n2);
                            console.log("have6");
                            $("#dis14").hide()
                            $("#distable7").hide();
                            $("#dis4").hide();
                            $("#dis15").hide();
                            $("#dis23").show();
                            $("#answer").show();
                            $("#Again").click(function () {
                                console.log("again");
                                location.reload();
                            });
                        });
                        $("#Nothave5").click(function () {//ไม่5
                            nothave5(n2);
                            console.log("nothave5");
                            $("#dis14").hide();
                            $("#dis15").hide();
                            $("#distable7").hide();
                            $("#dis4").hide();
                            $("#dis23").show();
                            $("#answer").show();
                            $("#Again").click(function () {
                                console.log("again");
                                location.reload();
                            });
                        });
                    });
                });
                $("#Nothave6").click(function () {//ไม่6
                    console.log("nothave6");
                    var n2 = createtable3(num1);
                    $("#distable5").hide();
                    $("#distable8").show();
                    $("#dis11").hide();
                    $("#dis16").hide();
                    $("#dis17").show();
                    $("#dis22").show();
                    $("#Have7").click(function () {//มี7
                        have7(n2);
                        console.log("have7");
                        $("#distable8").hide();
                        $("#distable9").show();
                        $("#dis18").show();
                        $("#dis17").hide();
                        $("#dis19").show();
                        $("#dis22").hide();
                        $("#Have8").click(function () {//มี8
                            have8(n2);
                            console.log("have8");
                            $("#dis18").hide()
                            $("#distable9").hide();
                            $("#dis4").hide();
                            $("#dis19").hide();
                            $("#dis23").show();
                            $("#answer").show();
                            $("#Again").click(function () {
                                console.log("again");
                                location.reload();
                            });
                        });
                        $("#Nothave7").click(function () {//ไม่7
                            nothave7(n2);
                            console.log("nothave7");
                            $("#distable10").show();
                            $("#distable9").hide();
                            $("#dis18").hide();
                            $("#dis19").hide();
                            $("#dis20").show();
                            $("#dis21").show();
                            $("#Have9").click(function () {//มี9
                                have9(n2);
                                console.log("have9");
                                $("#dis20").hide();
                                $("#distable10").hide();
                                $("#dis4").hide();
                                $("#dis21").hide();
                                $("#dis23").show();
                                $("#answer").show();
                                $("#Again").click(function () {
                                    console.log("again");
                                    location.reload();
                                });
                            });
                            $("#Nothave8").click(function () {//ไม่8
                                nothave8(n2);
                                console.log("nothave8");
                                $("#dis20").hide();
                                $("#dis21").hide();
                                $("#dis4").hide();
                                $("#distable10").hide();
                                $("#dis23").show();
                                $("#answer").show();
                                $("#Again").click(function () {
                                    console.log("again");
                                    location.reload();
                                });
                            });
                        });
                    });
                    $("#Nothave9").click(function () {//ไม่9
                        console.log("nothave9");
                        alert("ต้องมีแล้วแหละ");
                    });
                });
            });
        });
    });
});










