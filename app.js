let dcruns=["_","_","_","_","_","_"];
let srhruns=["_","_","_","_","_","_"];
let dcscore=0;
let srhscore=0;
let ballcounter=0;
function strikeBall()
{
    ballcounter++;
    let run=Math.floor(Math.random()*5)*2;
    if(run==8)
    {
        run='W'
    }
    if(ballcounter<=6)
    {
        if(run!='W')
        {
            dcscore+=run;
            document.getElementById("dcscore").textContent=dcscore;
        }
        dcruns[ballcounter-1]=run;
        document.getElementById("dcruns").textContent=dcruns;
    }
    else if(ballcounter<=12)
    {
        if(run!='W')
        {
            srhscore+=run;
            document.getElementById("srhcore").textContent=srhscore;
        }
        srhruns[ballcounter-7]=run;
        document.getElementById("srhruns").textContent=srhruns;
        if(dcscore>srhscore)
        {
            ballcounter=12;
        }
    }
    if(ballcounter>=12)
    {
        document.getElementById("bat").disabled=true;
        let maxscore=Math.max(dcscore,srhscore);
        if(dcscore==maxscore)
        {
            document.getElementById("dc").classList.add('winner');
        }
        if(srhcore==maxscore)
        {
            document.getElementById("srh").classList.add('winner');
        }
    }
}