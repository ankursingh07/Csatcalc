function calculate() {
    var x = document.getElementById("surveyss").value;
    var y = document.getElementById("csatss").value;
    var variable = +x + +y;
    var k=Number(x);
    var l=Number(y);
    var t=(l/k)*100;
    var answer=0;
    if (t>=87&&t<=89)
    {
        answer=1.5*l-1.5*(k-l);
        //answer=answer*74.13;
    }
    else if(t>89&&t<=92)
    {
        answer=2.25*l-1*(k-l);
        //answer=answer*74.13;
    }
    else if (t>92&&t<95)
    {
        answer=3*l-0.5*(k-l);
        //answer=answer*74.13;
    }
    else if(t>=95&&t<=100)
    {
        answer=3.5*l-0.25*(k-l);
       // answer=answer*74.13;
    }
    else
    {
        answer=-1;
    }
    if(answer==-1||l<0||k<0||t>100)
        document.getElementById("output").innerHTML="NOT ELIGIBLE FOR BONANZA"
    else
        document.getElementById("output").innerHTML = answer+" Dollars";
}